import React, { Component } from 'react';
import Dashboard from './Dashboard'

class About extends Component {

    render() {
        return (
            <div className="container hp-container">
                <div className="row">
                    <div className="col-md">
                        <div className="section-header">
                            <h2>Welcome to Hire Pedal</h2>
                            <p className="lead">How do you explore when on tour?
Let us imagine you want to travel to Hampi, you book Rail/bus and hotel for desired duration.
Imagine if you could reserve the bicycle/ebike/Segway so that you can explore the tourist destination at your own pace and at your own choice
Hirepedal is a marketplace which brings Tourist/Renter, Rural Partner(rural entrepreneurs) and Bike mechanic on the same platform to renting and hiring well maintained cycle/ebikes/Segway easiler.</p>
                            <h3>How it works?</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Hirepedal will create a marketplace in which a person or local rural entrepreneur owning a cycle(s) can rent it out and a person/tourist in need of the cycle can rent it on an hourly, daily basis</li>
                                <li className="list-group-item">Our platform would help customers (mostly tourists) to book cycles in Tier 2 /3 cities in advance and be sure about the quality and availability of the cycle for their entire road trip</li>
                                <li className="list-group-item">HirePedal will promote Self-Guided Cycling Tours to promote eco-tourism</li>
                                <li className="list-group-item">HirePedal will promote cycling and ecotourism using Gamification and social media integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;