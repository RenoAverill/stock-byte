import styles from './app.css';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Redirect  } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { getLoggedInUser, login } from './api/UserAPI';
import Backgound from './components/Background'
import Navbar from './components/Navbar';
import Login from './components/Login/Login'
import HomePage from './pages/HomePage/HomePage';
import Signup from './components/Signup/Signup';
import CoinPage from './pages/CoinPage/CoinPage';
import StockPage from './pages/StockPage/StockPage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage'
import UserContext from './context/UserContext';

const App = () => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken]= useState(null);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        let token = localStorage.getItem('auth-user')
        if (data.username) {
          setUser(data);
          setIsLoggedIn(true)
          setToken(token)
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setUser(null)
    setIsLoggedIn(false)
    console.log('user logged out!')
  }
  
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
      setIsLoggedIn(true)
      setUser(data.user)
      return Redirect('/coins')
    }
  }

  return (
    <div className='app'>
      <Router>
      <Backgound/>
      <div>
        <UserContext.Provider value={{user: user, token: token,isLoggedIn: isLoggedIn, handleLogin: handleLogin}}>
              <Navbar handleLogout={handleLogout} user={user}/> 
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/stocks" component={StockPage} />
              <Route exact path="/coins" component={CoinPage} />
              <Route exact path="/watchlist" component={WatchlistPage} />
          </UserContext.Provider>
        </div>
        </Router>
    </div>
  );
}

export default App;
