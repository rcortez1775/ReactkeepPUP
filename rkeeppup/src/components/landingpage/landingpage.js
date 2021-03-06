import { Component } from 'react';
import React from 'react';
import './landingpage.css';
import Logo from '../../images/dogscene.png';
import {Link} from 'react-router-dom';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="titleContainer">
                    <p className="title">keepPUP</p>
                    <p className="slogan">Store. Track. Share.</p>
                </div>
                <div className="signUpCont">
                    <Link to="/signup"><button className="button">Get Started</button></Link>
                </div>
                <div className="logoCont">
                    <Link to="/dashboard"><img className="logo" src={Logo} alt="Logo"/></Link>
                </div>
                <div className="loginCont">
                    <p className="loginBtn">Already a member? <Link to="/loginpage"><span className="loginBtn">Sign In</span></Link></p>
                </div>
            </div>
        )
    }
}

export default LandingPage;