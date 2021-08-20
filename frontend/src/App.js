import styles from './app.css';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Redirect  } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { getLoggedInUser, login } from './api/UserAPI';
// import Backgound from './components/Background'
// import Navbar from './components/Navbar';
// import Login from './components/Login/Login'
// import HomePage from './pages/HomePage/HomePage';
// import Signup from './components/Signup/Signup';
// import CoinPage from './pages/CoinPage/CoinPage';
// import StockPage from './pages/StockPage/StockPage';
// import WatchlistPage from './pages/WatchlistPage/WatchlistPage'
import PostLoadingComponent from './components/PostLoading'
import Posts from './components/Posts'

const App = () => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  })

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = 'http://localhost:8000/api/';
  //   fetch(apiUrl)
  //     .then(data=>data.json())
  //     .then(posts=>{
  //       setAppState({ loading:false, posts: posts })
  //     })
  //   },[setAppState])

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        let token = localStorage.getItem('auth-user')
        if (data.username) {
          setUser(data);
          setIsLoggedIn(true) 
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

  return (
    <div className='app'>
      <PostLoadingComponent isLoding={appState.loading} posts={appState.posts}/>
      <Router>
      <div>
              {/* <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/stocks" component={StockPage} />
              <Route exact path="/coins" component={CoinPage} />
              <Route exact path="/watchlist" component={WatchlistPage} />  */}
        </div>
        </Router>
    </div>
  );
}

export default App;
