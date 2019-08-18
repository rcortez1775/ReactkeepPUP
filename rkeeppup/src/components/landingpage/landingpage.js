import { Component } from 'react';
import React from 'react';
import './landingpage.css';
import Logo from '../../images/dog.png';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="titleContainer">
                    <p className="title">keep[PUP]</p>
                    <p className="slogan">Track. Store. Share</p>
                </div>
                <div className="logoCont">
                    <img className="logo bounce" src={Logo} alt="Logo"/>
                </div>
                <div className="buttonCont">
                    <Link to="/loginpage"><button className="button">Login</button></Link>
                    <Link to="/dashboard"><button className="button">Sign Up</button></Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;