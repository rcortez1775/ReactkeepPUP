import React, { Component } from "react";
import './dashboard.css';
import Faq from '../../images/faq.png';
import Close from '../../images/close.png';

class Dashboard extends Component {
    render () {
        function displayNav() {
            var nav = document.getElementById("myNav");
            nav.style.width = nav.style.width === '100%' ? '0%' : '100%';
        }
        return (
            <div>
                <div>
                    <img onClick={displayNav} className="faq" src={Faq} alt="faq"/>
                </div>
                
                <div id="myNav" className="overlay">
                    <div onClick={displayNav} className="closebtn">
                        <img src={Close} alt="close"/>
                    </div>
                    <div className="overlay-content">
                        <div className="instructions">
                            <p>Getting Started</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="dashboard">My</p>
                    <p className="dashboard2">Dashboard</p>
                </div>
                <div>
                    <p className="pets">My Pets</p>
                </div>
            </div>
        )
    }
}
export default Dashboard;