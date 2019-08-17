import React, { Component } from "react";
import './dashboard.css';
import Faq from '../../images/faq.png';

class Dashboard extends Component {
    render () {
        return (
            <div>
                <div>
                <img className="faq" src={Faq} alt="faq"/>
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