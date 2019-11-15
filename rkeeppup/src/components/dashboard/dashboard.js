import React, { Component } from "react";
import './dashboard.css';
import Faq from '../../images/question.png';
import Close from '../../images/close.png';
import Add from '../../images/whiteadd.png';
import AddPet from '../../images/addPet.png';
import Plus from '../../images/plus.png';
import Food from '../../images/petfood.png';
import Walk from '../../images/walk.png';
import Medicine from '../../images/medicine.png';
import Bath from '../../images/bath.png';

class Dashboard extends Component {
    render () {
        //This is the function that displays the menu
        function displayNav() {
            var nav = document.getElementById("myNav");
            nav.style.width = nav.style.width === '100%' ? '0%' : '100%';
        }
        //This is the function that displays the activity buttons
        function myFunction() {
            var x = document.getElementById("buttons");
            x.style.display = x.style.display === 'none' ? 'block' : 'none';
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
                    <div id="buttons">
                        <div className="key"><img src={Medicine} className="icon" alt="medicine"/></div>
                        <div className="key"><img src={Walk} className="icon" alt="walk"/></div>
                        <div className="key"><img src={Food} className="icon" alt="food"/></div>
                        <div className="key"><img src={Bath} className="icon" alt="bath"/></div>
                    </div>
                    <img onClick={myFunction} src={Plus} className="activityBtn" alt="plus"/>
                </div>
            </div>
        )
    }
}
export default Dashboard;