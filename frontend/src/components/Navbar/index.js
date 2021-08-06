import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav,
  NavbarContainer, 
  NavItem, 
} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem to='stockbyte'>StockByte</NavItem>
          <NavItem to='#'>About</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
