import styled from 'styled-components'


  export const VideoBackground = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  `

export const LoginContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
	margin: auto auto;
	padding: 40px;
	border-radius: 5px;
	box-shadow: 0 0 10px #000;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 500px;
	height: 430px;
`

export const LoginInput = styled.input`
  border:none;
  border-radius: 100px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  `

export const SignUpBtn = styled.input`
  color:white;
  position: relative;
`
