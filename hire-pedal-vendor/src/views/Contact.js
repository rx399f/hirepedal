import React, { Component } from 'react';
import Dashboard from './Dashboard'

class Contact extends Component {

    render() {
        return (
            <div className="container hp-container">


                <div className="row">


                    <div className="col-md-6">
                        <h4>Send A Message</h4>
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Enter your Message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                    </div>

                    <div className="col-md-5 col-md-offset-1">
                        <h4>Contact Information</h4>

                        <ul className="list-group">
                            <li className="list-group-item">Hire Pedal</li>
                            <li className="list-group-item"><i className="fas address-card"></i>37/A-07, Southend Road
6th Block, Southend Circle
Basavanagudi
Bengaluru 560004
INDIA</li>
                            <li className="list-group-item">contact@hirepedal.com</li>

                        </ul>

                        <div id="contact-map"></div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Contact;