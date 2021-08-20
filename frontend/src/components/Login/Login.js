import React from 'react'
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { login, getLoggedInUser } from '../../api/UserAPI';
import { Navbar} from '../Navbar/index'
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button} from './LoginStyles';
  import axiosInstance from '../../axios';

const Login = ({user}) => {
  const history = useHistory()

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
              history.push('/coins')

          })
          // let data = fetch('http://localhost:8000/api/token/', {
          //   method: 'POST',
          //   headers: {Authorization: localStorage.getItem('access_token')
          //   ? 'JWT ' + localStorage.getItem('access_token')
          //   : null,
          // "Content-Type": 'application/json',},
          // body: JSON.stringify(userObject)
          // }).then((res) => {
          //   console.log(res)
          //     localStorage.setItem('access_token', res.data.access)
          //     localStorage.setItem('refresh_token', res.data.refresh)
              
          //     console.log('created new user')
          //     history.push('/');
          // });
  }


  return (
    <>
      <MainContainer onSubmit={handleLogin}>
        <WelcomeText>Welcome</WelcomeText>
        {!user &&
          <>
            <InputContainer>
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
