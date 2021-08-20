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
  
  export default function SignUp() {
    const history = useHistory();
  
    const handleSignup = async (evt) => {
          evt.preventDefault();
          let userObject = {
            'username': evt.target.username.value,
            'password': evt.target.password.value,
          }
          console.log(userObject);
          let data = fetch('http://localhost:8000/api/users/create', {
            method: 'POST',
            headers: {Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
          "Content-Type": 'application/json',},
          body: JSON.stringify(userObject)
          }).then((res) => {
              console.log('created new user')
              history.push('/login');
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