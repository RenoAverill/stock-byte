import React from 'react'
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button} from './LoginPageStyles';

const LoginPage = ({isLoggedIn, handleLogout, handleLogin}) => {

  if (isLoggedIn) {
    return(
      <>
        <ButtonContainer type='submit'>
          <Button content='Log Out'/>
        </ButtonContainer>
      </>
    )
      
  }
  
  return (
    <>
          <MainContainer onSubmit={handleLogin}>
            <WelcomeText>Welcome</WelcomeText>
            <InputContainer onSubmit={handleLogin}>
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

export default LoginPage
