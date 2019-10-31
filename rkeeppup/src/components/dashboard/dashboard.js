import React, { Component } from "react";
import './dashboard.css';
import Faq from '../../images/question.png';
import Close from '../../images/close.png';
import Add from '../../images/whiteadd.png';
import AddPet from '../../images/addPet.png';
import Plus from '../../images/plus.png';

class Dashboard extends Component {
    render () {
        function displayNav() {
            var nav = document.getElementById("myNav");
            nav.style.width = nav.style.width === '100%' ? '0%' : '100%';
        }
        return (
            <div className="yellow">
                <div className="faqCont">
                    <img onClick={displayNav} className="faq" src={Faq} alt="faq"/>
                </div>
                <div id="myNav" className="overlay">
                    <div onClick={displayNav} className="closebtn">
                        <img src={Close} alt="close"/>
                    </div>
                    <div className="overlay-content">
                        <div className="instructions">
                            <p className="started">Getting Started</p>
                            <p>To add a pet, click on the "<img src={Add} className="add" alt="add"/>" icon.</p>
                        </div>
                    </div>
                </div>
                <div className="dashboardCont">
                    <p className="dashboard">My</p>
                    <p className="dashboard2">Dashboard</p>
                </div>
                <div>
                    <p className="pets">My Pets</p>
                    <img src={AddPet} className="addPet" alt="add"/>
                </div>
                <div className="petCont">
                    <form className="pure-form">
                        <p className="pupTracker">Pup Tracker</p>
                    </form>
                    <img src={Plus} className="activityBtn" alt="plus"/>
                </div>
            </div>
        )
    }
}
export default Dashboard;