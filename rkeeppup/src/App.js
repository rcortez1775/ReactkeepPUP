import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/landingpage/landingpage';
// import LoginPage from './components/loginpage/loginpage';
// import Dashboard from './components/dashboard/dashboard';



class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
