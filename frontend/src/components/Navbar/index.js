import React from 'react'
import { Nav,
  NavbarContainer, 
  NavItem, 
} from './NavbarElements'
import { useState, useEffect } from 'react'
import { getLoggedInUser } from '../../api/UserAPI'

const Navbar = () => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setUser(true)
        }
      }
    }
    if (!user) {
      getUser();
    }
  })

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    console.log('user logged out!')
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem to='/'>StockByte</NavItem>
          { user &&
              <>
                <NavItem to='/stocks'>Stocks</NavItem>
                <NavItem to='/coins'>Coins</NavItem>
                <NavItem to='/watchlist'>Watchlist</NavItem>
                <NavItem onClick={handleLogout} to='/'>Logout</NavItem>
              </>
          }
          <NavItem to='#'>About</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
