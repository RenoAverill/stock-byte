import React from 'react'
import { useState, useEffect } from 'react';
import { login, getLoggedInUser } from '../../api/UserAPI';
import { NavBar} from '../Navbar/index'
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button} from './LoginStyles';

const Login = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    if (data.token) {
      console.log(data.token)
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  }

  return (
    <>
      <MainContainer onSubmit={handleLogin}>
        <WelcomeText>Welcome</WelcomeText>
        {!isLoggedIn &&
          <>
            <InputContainer onSubmit={handleLogin}>
              <Input type="text" placeholder="Username" name='username' />
              <Input type="password" placeholder="Password" name='password'/>
            </InputContainer>
            <ButtonContainer type='submit'>
              <Button content='Log In'/>
            </ButtonContainer>
          </>
        }
      </MainContainer>
    </>
  )
}

export default Login
