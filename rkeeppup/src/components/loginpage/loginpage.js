import React, { Component } from "react";
import './loginpage.css';
import Bones from '../../images/dog.png';
import Kennel from '../../images/pet-house.png';
import {Link} from 'react-router-dom';

class loginpage extends Component {
    render() {
        return (
            <div className="blue">
                <div className="float">
                    <Link to="/" className="link"><img className="previous" src={Kennel} alt="Kennel"/></Link> 
                </div> 
                <div className="dogImage">
                    <img className="pup" src={Bones} alt="Bones"/>
                </div> 
                <div>
                    <p className="welcome">Welcome back!</p>
                </div>
                <div className="formCont">
                    <form className="pure-form">
                        <p className="login">Log in here.</p>
                        <input type="text" id="userName" name="username"/>
                        <input type="password" id="pass" name="password" minLength="8" required/>
                        <div className="buttonCont">
                            <button type="submit" className="submit">Submit</button>
                        </div>    
                    </form>
                </div>
            </div>
        )
    }
}

export default loginpage;