import styled from "styled-components"

export const MainContainer = styled.form`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  backdrop-filter: blur(0.1px);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  height: 50%;
  width: 50%;
`

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export function Input({ name, type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} name={name} />;
}

export const StyledInput = styled.input`
  background: transparent;
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;

  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1.5rem;
  }
`


export function Button({ type, content }) {
  return <StyledButton type={type}> {content}</StyledButton>;
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