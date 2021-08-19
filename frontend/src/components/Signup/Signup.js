import React from 'react'
import {  useState } from 'react';
import { signupUser } from '../../api/UserAPI';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import { MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button} from './SignupStyles';

// const SignupPage = (props) => {
//   const { history } = props;

//   const handleSignup = async (evt) => {
//     evt.preventDefault();
//     let userObject = {
//       'username': evt.target.username.value,
//       'password': evt.target.password.value,
//     }
//     console.log(userObject)
//     let response = await signupUser(userObject);
//     let data = await response.json();
//     if (data.error) {
//       console.log('there was an error signing up');
//     } else {
//       history.push('/login');
//     }
//   }

//   return (
//     <>
//           <MainContainer onSubmit={handleSignup}>
//             <WelcomeText>Welcome</WelcomeText>
//             <InputContainer>
//               <Input type="text" placeholder="Username" name='username' />
//               <Input type="password" placeholder="Password" name='password' />
//             </InputContainer>
//             <ButtonContainer type='submit'>
//               <Button content="Sign Up" />
//             </ButtonContainer>
//           </MainContainer>
//       </>
//   )
// }

// export  default SignupPage
export default function SignUp() {
	const history = useHistory();

  const handleSignup = async (evt) => {
        evt.preventDefault();
        let userObject = {
          'username': evt.target.username.value,
          'password': evt.target.password.value,
        }
            console.log(userObject);
            axiosInstance
              .post(`user/create/`, {
                user_name: userObject.username,
                password: userObject.password,
              })
              .then((res) => {
                history.push('/login');
                // console.log(res);
                // console.log(res.data);
              });
          };
	
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
              </MainContainer>
          </>
      )
}