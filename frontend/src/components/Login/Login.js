import React from 'react'
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button} from './LoginStyles';
  import axiosInstance from '../../axios';



const Login = () => {
  const history = useHistory()
  const [blog, setBlog] = useState('')
  const [logout, setLougout] = useState('')

  const navBarHelper = () => {
    return (
      <Navbar 
        blog={blog}
        logout={logout}
      />
    )
  }

  const handleLogin = (evt) => {
    evt.preventDefault();
          let userObject = {
            'username': evt.target.username.value,
            'password': evt.target.password.value,
          }
          console.log(userObject);
          axiosInstance.post(`token/`, {
            username: userObject.username,
            password: userObject.password
          })
          .then((res) => {
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            axiosInstance.defaults.headers['Authorization'] = 
              'JWT ' + localStorage.getItem('access_token')
              setBlog('Blog')
              setLougout('Logout')
              navBarHelper()
              history.push('/coins')
          })
  }


  return (
    <>
      <MainContainer onSubmit={handleLogin}>
        <WelcomeText>Welcome</WelcomeText>
            <InputContainer>
              <Input type="text" placeholder="Username" name='username' />
              <Input type="password" placeholder="Password" name='password'/>
            </InputContainer>
            <ButtonContainer type='submit'>
              <Button content='Log In'/>
            </ButtonContainer>
      </MainContainer>
    </>
  )
}

export default Login
