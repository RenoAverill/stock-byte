import styles from './app.css';
import { BrowserRouter as Router  } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { getLoggedInUser, login } from './api/UserAPI';
import { useState, useEffect } from 'react';
import Backgound from './components/Background'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import CoinPage from './pages/CoinPage/CoinPage';
import StockPage from './pages/StockPage/StockPage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])



  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  }

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }


  const renderHomePage = () => {
    return (
      <HomePage
        isLoggedIn={isLoggedIn}
        user={user}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    )
  }

  const renderLoginPage = () => {
    return (
      <LoginPage
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        user={user}
      />
    )
  }
  
  
  return (
    <div className='app'>
      <Router>
      {/* <Backgound/>
      <Navbar />  */}
        <div>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" render={renderLoginPage} />
          <Route exact path='/coins' component={CoinPage}/>
          <Route exact path='/stocks' component={StockPage}/>
          <Route exact path='/watchlist' component={WatchlistPage}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
