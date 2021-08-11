import { MainContainer,
WelcomeText,
ButtonContainer,
Button} from './HomePageStyles';
import { Link } from 'react-router-dom';
import React from 'react';


const HomePage =({ isLoggedIn, user, handleLogout }) => {
  return(
    <>
      {
        user &&
        <div>
          Hi {user.username}
        </div>
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
        <button onClick={handleLogout}>Logout</button>
      }
    </>
  )
}

export default HomePage

