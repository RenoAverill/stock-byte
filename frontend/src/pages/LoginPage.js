import React from 'react';
import { Link } from 'react-router-dom';
import '../myStyles.css'

const Login = ({isLoggedIn, handleLogout, handleLogin}) => {

  if (isLoggedIn) {
    return <div className='login'>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  }

  return (
    <div className='user-login-box'>
    <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>UserName:</label>
        <input className='user-password' type='text' placeholder='Enter Name' name='username' />
        <label>Password:</label>
        <input className='user-password' type='password' name='password' />
        <button type='submit' >Submit</button>
      </form>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
};

export default Login;