import styled from "styled-components"

export const MainContainer = styled.form`
  display: flex;
  margin:auto;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(.01px);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  height:50%;
  width: 50%;
  text-decoration: none;
`

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  text-decoration: none;
`;


export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;


export function Button({ content }) {
  return <StyledButton >{content}</StyledButton>;
}

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  width: 60%;
  height: 65px;
  border-radius: 30px;
  cursor: pointer;
  z-index:15;
  `