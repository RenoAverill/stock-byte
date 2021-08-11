import styled from "styled-components"

export const MainContainer = styled.form`
  display: flex;
  margin:auto;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  height:50%;
  width: 50%;

  h4 {
    font-size: medium;
  }
`

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;


export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;

  `