import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Nav = styled.nav`
  display: flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavItem = styled(Link)`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

