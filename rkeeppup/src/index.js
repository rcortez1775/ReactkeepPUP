import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import LoginPage from './pages/loginpage';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';

const routing = (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route  path='/loginpage' component={LoginPage}/>
      <Route  path='/dashboard' component={Dashboard}/>
      <Route  path='/signup' component={Signup}/> 
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
