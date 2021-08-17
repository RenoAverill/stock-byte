import React from 'react'
import { useState, useEffect } from 'react';
import { login, getLoggedInUser } from '../../api/UserAPI';
import { Navbar} from '../Navbar/index'
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button} from './LoginStyles';

const Login = ({user, handleLogin}) => {


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
