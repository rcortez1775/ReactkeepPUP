import React, { Component } from "react";
import './signup.css';
import Kennel from '../../images/dog-kennel.png';
import Family from '../../images/pet.png'
import {Link} from 'react-router-dom';

class Signup extends Component {
    render () {
        return (
            <div>
                <div className="float">
                    <Link to="/" className="link">
                        <img className="previous" src={Kennel} alt="Kennel"/>
                    </Link> 
                </div> 
                <div className="biscuitLogo">
                    <img className="pup" src={Family} alt="Family"/>
                </div>  
                <div>
                    <p className="family">Join the Family!</p>
                </div>

                <div className="signUp">
                    <form>
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstname"/>
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastname"/>
                        <label for="PetName">Pet's Name:</label>
                        <input type="text" id="petName" name="petname"/>
                    </form>
                    <div className="buttonCont">
                            <button type="submit" className="createBtn">&#43; Create Account</button>
                    </div> 
                </div>
            
            </div>
        )
    };
}

export default Signup;