import { Component } from 'react';
import React from 'react';
import './landingpage.css';
import Logo from '../../images/dogscene.jpg';
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
                    <img className="logo" src={Logo} alt="Logo"/>
                </div>
                <div className="loginCont">
                    <p className="loginBtn">Already a member? <Link to="/loginpage"><button className="loginBtn">Login</button></Link></p>
                </div>
            </div>
        )
    }
}

export default LandingPage;