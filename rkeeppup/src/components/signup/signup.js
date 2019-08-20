import React, { Component } from "react";
import './signup.css';
import Kennel from '../../images/dog-kennel.png';
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
                <div>
                    <p className="family">Join the Family!</p>
                </div>

            
            </div>
        )
    };
}

export default Signup;