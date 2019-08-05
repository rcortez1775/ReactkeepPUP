import { Component } from "react";
import React from 'react';
import './loginpage.css';
import LadyNPup from '../../images/pet.png';

class loginpage extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="welcome">Welcome back!</p>
                    <p className="login">Log in here.</p>
                </div>
                <div className="formCont">
                    <form>
                        <label for="fname">Username:</label>
                        <input type="text" id="fname" name="fname"/>
                        <label for="lname">Password:</label>
                        <input type="text" id="lname" name="lname"/>
                        <div className="buttonCont">
                            <button className="submit">Submit</button>
                        </div>    
                    </form>
                </div>
                <div>
                    <img className="pup" src={LadyNPup} alt="Pup"/>
                </div>
            </div>
        )
    }
}

export default loginpage;