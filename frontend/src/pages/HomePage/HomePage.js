import { MainContainer,
WelcomeText,
ButtonContainer,
Button} from './HomePageStyles';
import { Link } from 'react-router-dom';
import React from 'react';

const HomePage =() => {
  return(
        <>
          <MainContainer >
            <WelcomeText>Welcome</WelcomeText>
            <ButtonContainer>
              <Button content={<Link to='/login'>Login</Link>} />
            </ButtonContainer>
            <ButtonContainer>
              <Button content={<Link to='/create'>Sign up</Link>} />
            </ButtonContainer>
          </MainContainer>
        </>
  )
}

export default HomePage

