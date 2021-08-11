import React from 'react'
import { signupUser } from '../../api/UserAPI';
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  HorizontalRule,
  Button} from './SignupPageStyles';

const SignupPage = (props) => {

  const { history } = props;
  const handleSignup = async (evt) => {
    console.log(evt)
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await signupUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      history.push('/login');
      console.log('successful sign up')
    }

  }

  return (
    <>
          <MainContainer onSubmit={handleSignup}>
            <WelcomeText>Welcome</WelcomeText>
            <InputContainer>
              <Input type="text" placeholder="Username" name='username' />
              <Input type="password" placeholder="Password" name='password' />
            </InputContainer>
            <ButtonContainer type='submit'>
              <Button content="Sign Up" />
            </ButtonContainer>
            <HorizontalRule />
          </MainContainer>
      </>
  )
}

export  default SignupPage
