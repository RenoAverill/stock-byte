import React from 'react'
import { Nav,
  NavbarContainer, 
  NavItem, 
} from './NavbarElements'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios';

const Navbar = () => {

  const handleLogout = () => {
		const response = axiosInstance.post('users/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
	};

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavItem to='/'>StockByte</NavItem>
          <NavItem to='/'>blog</NavItem>
          <NavItem to='/stocks'>Stocks</NavItem>
          <NavItem to='/coins'>Coins</NavItem>
          <NavItem to='/'>Watchlist</NavItem>
          <NavItem onClick={handleLogout} to='/'>Logout</NavItem>
          <NavItem to='/'>About</NavItem>
        </NavbarContainer>
      </Nav>
    </>
  )
}
export default Navbar
