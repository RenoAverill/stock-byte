import { MainContainer,
WelcomeText,
ButtonContainer,
Button} from './HomePageStyles';
import { Link } from 'react-router-dom';
import React from 'react';
import Login from '../../components/Login/Login'


const HomePage =({ user }) => {
  return(
    <>
      {
        !user
        &&
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
}
    </>
  )
}

export default HomePage

