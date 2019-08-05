import { Component } from "react";
import React from 'react';
import './landingpage.css';
import Logo from '../../images/dog.png';

class LandingPage extends Component {
    render() {
        
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

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
                    <button onClick={handleClick} className="button">Login</button>
                    <button onClick={handleClick} className="button">Sign Up</button>
                </div>
            </div>
        )
    }
}

export default LandingPage;