import { MainContainer,
WelcomeText,
ButtonContainer,
Button} from './HomePageStyles';
import { Link } from 'react-router-dom';
import React from 'react';
import Login from '../../components/Login/Login'


const HomePage =({ isLoggedIn, user}) => {
  return(
    <>
      {
        user && alert(`Hello ${user.username}!`)
      }
      {
        !isLoggedIn
        ?
        <>
          <MainContainer >
            <WelcomeText>Welcome</WelcomeText>
            <ButtonContainer>
              <Button content={<Link to='login'>Login</Link>} />
            </ButtonContainer>
            <ButtonContainer>
              <Button content={<Link to='signup'>Sign up</Link>} />
            </ButtonContainer>
          </MainContainer>
        </>
        :
        <MainContainer>
          <ButtonContainer>
            <Button content='Log out'></Button>
          </ButtonContainer>
        </MainContainer>
      }
    </>
  )
}

export default HomePage

