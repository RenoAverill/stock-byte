import React from 'react'
import { Nav,
  NavbarContainer, 
  NavItem, 
} from './NavbarElements'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem to='/'>StockByte</NavItem>
          <NavItem to='/stocks'>Stocks</NavItem>
          <NavItem to='/coins'>Coins</NavItem>
          <NavItem to='#'>About</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
