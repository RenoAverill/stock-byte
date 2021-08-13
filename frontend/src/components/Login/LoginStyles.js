import styled from "styled-components"

export const MainContainer = styled.form`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  background: transparent;
  backdrop-filter: blur(0.01px);
  border-radius: 10px;
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
  justify-content:space-around;
  align-items: center;
  height: 20%;
  width:100%;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

export function Input({ name, type, placeholder }) {
  return <StyledInput name={name} type={type} placeholder={placeholder} />;
}

export const StyledInput = styled.input`
  background: transparent;;
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;

  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;

  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1.5rem;
  }
`


export function Button({ type, content }) {
  return <StyledButton type={type}>{content}</StyledButton>;
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
  font-size: medium;
  `