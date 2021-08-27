import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Background from './components/Background/index'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import StockPage from './pages/StockPage/StockPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CoinPage from './pages/CoinPage/CoinPage';
import Navbar from './components/Navbar';


const routing = (
	<Router>
		<React.StrictMode>
      <Background/>
			<Navbar/>
			<Switch>
				<Route exact path="/" component={App} />
        <Route exact path="/create" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/stocks" component={StockPage} />
        <Route exact path="/coins" component={CoinPage} />
        <Route exact path="/blog" component={BlogPage} /> 
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));