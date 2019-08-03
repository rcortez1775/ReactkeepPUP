import { Component } from "react";
import React from 'react';
import './loginpage.css';
import Logo from '../../images/dog.png';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="titleContainer">
                    <p className="title">keep[PUP]</p>
                </div>
                <div className="logoCont">
                    <img className="logo bounce" src={Logo} alt="Logo"/>
                </div>
                <div className="buttonCont">
                    <span className="button">Login</span>
                    <span className="button">Sign Up</span>
                </div>
            </div>
        )
    }
}

export default LandingPage;