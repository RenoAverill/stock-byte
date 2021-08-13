import styles from './app.css';
import { BrowserRouter as Router  } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Backgound from './components/Background'
import Navbar from './components/Navbar';
import Login from './components/Login/Login'
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import CoinPage from './pages/CoinPage/CoinPage';
import StockPage from './pages/StockPage/StockPage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage'

const App = () => {

  // const handleLogout = () => {
  //   localStorage.setItem("auth-user", null);
  //   setIsLoggedIn(false);
  //   setUser(null);
  // }

  
  return (
    <div className='app'>
      <Router>
      <Backgound/>
      <Navbar /> 
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/coins' component={CoinPage}/>
          <Route exact path='/stocks' component={StockPage}/>
          <Route exact path='/watchlist' component={WatchlistPage}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
