import React from 'react';
import { Link } from 'react-router-dom';
import '../myStyles.css'

const HomePage = ({ isLoggedIn, user, handleLogout }) => {

  return (
    <div>
      <h1 className='stockbyte'> 
      <Link style={{ textDecoration: 'none', color:'white' }} to='/'>Stock Byte</Link>
      </h1>
      {
        user &&
        <div>
          <div class="user-name">{user.name}</div>
        </div>
      }
      {
        !isLoggedIn
        ?
        <div className='blurred-box'>
          <div className='buttons'>
            <Link style={{ textDecoration: 'none', color:'white' }} to='/login'>Login</Link>
          </div>
          <div className='buttons'>
            <Link style={{ textDecoration: 'none', color:'white' }} to='/signup'>Signup</Link>
          </div>
        </div>
        :
        <button onClick={handleLogout}>Logout</button>
      }
    </div>
  );
};

export default HomePage;