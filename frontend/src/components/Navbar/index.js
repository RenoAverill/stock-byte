import React from 'react'
import { Nav,
  NavbarContainer, 
  NavItem, 
} from './NavbarElements'
import { useState, useEffect } from 'react'
import { getLoggedInUser } from '../../api/UserAPI'

const Navbar = ({user, handleLogout}) => {
  
  const [renderItems, setRenderItems] = useState(false)
  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setRenderItems(true)
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  const renderNavItems = () =>{
    if (!renderItems) {
      return(
        <>
          <NavItem to='/stocks'>Stocks</NavItem>
          <NavItem to='/coins'>Coins</NavItem>
          <NavItem to='/watchlist'>Watchlist</NavItem>
          <NavItem onClick={handleLogout} to='/'>Logout</NavItem>
        </>
      )
    }
  }
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem to='/'>StockByte</NavItem>
          {renderNavItems()}
          <NavItem to='#'>About</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  )
}
export default Navbar
