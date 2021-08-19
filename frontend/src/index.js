import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar/index';
import Background from './components/Background/index'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import StockPage from './pages/StockPage/StockPage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import CoinPage from './pages/CoinPage/CoinPage';
import Register from './components/register';

const routing = (
	<Router>
		<React.StrictMode>
      <Background/>
      <Navbar/>
			<Switch>
				<Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/stocks" component={StockPage} />
              <Route exact path="/coins" component={CoinPage} />
              <Route exact path="/watchlist" component={WatchlistPage} /> 
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
