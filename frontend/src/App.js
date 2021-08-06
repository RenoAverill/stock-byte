// import React, { useState, useEffect } from 'react';
// import { getLoggedInUser, login } from './api/UserAPI';
import { BrowserRouter as Router  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Background from './components/Background'
import Login from './components/Login/Login';


const App = () => {
  
  return (
    <Router>
      <HomePage/>
      <Login/>
      <Background/>
    </Router>
  );
}

export default App;
// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [user, setUser] = useState(null);

// useEffect(() => {
//   const getUser = async () => {
//     if (localStorage.getItem("auth-user") !== 'null') {
//       let response = await getLoggedInUser(localStorage.getItem("auth-user"));
//       let data = await response.json();
//       if (data.username) {
//         setIsLoggedIn(true);
//         setUser(data);
//       }
//     }
//   }
//   if (!user) {
//     getUser();
//   }
// }, [user])

// const handleLogin = async (evt) => {
//   evt.preventDefault();
//   let userObject = {
//     username: evt.target.username.value,
//     password: evt.target.password.value,
//   }
//   let response = await login(userObject);
//   let data = await response.json();
//   if (data.token) {
//     localStorage.setItem("auth-user", `${data.token}`);
//     setIsLoggedIn(true);
//     setUser(data.user);
//   }
// }

// const handleLogout = () => {
//   localStorage.setItem("auth-user", null);
//   setIsLoggedIn(false);
//   setUser(null);
// }

// const renderLoginPage = () => {
//   return (
//     <LoginPage
//       isLoggedIn={isLoggedIn}
//       handleLogin={handleLogin}
//       handleLogout={handleLogout}
//       user={user}
//     />
//   )
// }

// const renderHomePage = () => {
//   return (
//     <HomePage
//       isLoggedIn={isLoggedIn}
//       user={user}
//       handleLogout={handleLogout}
//     />
//   )
// }