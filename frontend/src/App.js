import styles from './app.css';
import { useState, useEffect } from 'react';
import PostLoadingComponent from './components/PostLoading'
import Posts from './components/Posts'
import HomePage from './pages/HomePage/HomePage';


const App = () => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  })
  
  return (
    <div className='app'>
      <HomePage/>
    </div>
  );
}

export default App;
