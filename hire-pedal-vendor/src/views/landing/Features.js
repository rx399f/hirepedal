import React, { Component } from 'react';

class Features extends Component {

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        const opts = {
        };



        return (
            <div id="features" className="container-fluid op-section pb-5">
                <div className="container">
                    <h1 className="text-center op-section-title">Features</h1>
                    <div className="row mb-4 op-feature">
                        <div className="col-4" >
                            <div style={opts}> <h5>Book Cycle  <i class="material-icons">book</i></h5>
                            </div>
                            <span>Book cycle for your destination from website, mobile app</span>
                        </div>

                        <div className="col-4 feature-col" >
                        <div style={opts}> <h5>Customer Validation  <i class="material-icons">verified_user</i> </h5></div>
                            <span>Easy customer validation using Aadhar and Passport</span>
                        </div>

                        <div className="col-4 feature-col" >
                        <div style={opts}><h5>Easy Payment  <i class="material-icons">payment</i> </h5></div>
                            <span>Supports mobile wallets and cash on delivery</span>
                        </div>

                        <div className="col-4 feature-col" >
                        <div style={opts}> <h5>Best Routes  <i class="material-icons">navigation</i></h5></div>
                            <span>Recommends cycle routes based on customer preference</span>
                        </div>


                        <div className="col-4 feature-col" >
                        <div style={opts}> <h5>Security  <i class="material-icons">security</i> </h5></div>
                            <span>Secures cycle using smart lock and geo tagging</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;