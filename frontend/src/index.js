import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar/index';
import Background from './components/Background/index'


const routing = (
	<Router>
		<React.StrictMode>
      <Background/>
      <Navbar/>
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
