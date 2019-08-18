import React, { Component } from "react";
import './loginpage.css';
import Bones from '../../images/bones.png';
import Previous from '../../images/previous.png';
import {Link} from 'react-router-dom';

class loginpage extends Component {
    render() {
        return (
            <div>
                <div>
                <Link to="/" className="link">
                    <img className="previous" src={Previous} alt="previous"/>
                    
                </Link> 
                </div> 
                <div className="biscuitLogo">
                    <img className="pup" src={Bones} alt="Bones"/>
                </div>  
                <div>
                    <p className="welcome">Welcome back!</p>
                    <p className="login">Log in here.</p>
                </div>
                <div className="formCont">
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username"/>
                        <label for="pass">Password:</label>
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