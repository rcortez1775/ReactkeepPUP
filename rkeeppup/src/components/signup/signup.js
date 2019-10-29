import React, { Component } from "react";
import './signup.css';
import Kennel from '../../images/pet-house.png';
import Background from '../../images/dogpark.png'
import {Link} from 'react-router-dom';

class Signup extends Component {
    render () {
        return (
            <div className="blueBG">
                <div className="float">
                    <Link to="/" className="link">
                        <img className="previous" src={Kennel} alt="Kennel"/>
                    </Link> 
                </div>
                <div>
                    <p className="family">Join Us!</p>
                    <p className="subTitle">Create your keepPUP Account</p>
                </div>
                <div className="signUp">
                    <form> 
                        <input placeholder="Username" type="text" id="userName" name="userName"/>
                        <input placeholder="Password" type="text" id="password" name="password"/>
                    </form>
                    <div className="buttonCont">
                        <button type="submit" className="createBtn">&#43; Create Account</button>
                    </div> 
                </div>
                <div className="bgImage">
                    <img className="image" src={Background} alt="Family"/>
                </div>  
            </div>
        )
    };
}

export default Signup;