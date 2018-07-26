import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class HowItWorks extends Component {

    render() {
        return (
            <div id="howitworks" className="container-fluid op-section pb-5">
                <div className="container">
                    <h1 className="text-center op-section-title pb-1">How It Works?</h1>
                    <p className="text-center lead pb-2 mdl-color-text--grey-600">We've made a video to showcase how we work.</p>
                </div>
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="op-video-container align-middle">
                                <div className="embed-container">
                                    {/* <iframe src="https://youtu.be/HK4FKsJ_cO8" frameborder="0" allowfullscreen></iframe> */}
                                    <iframe id="ytplayer" type="text/html"  allowFullScreen
  src="https://www.youtube.com/embed/HK4FKsJ_cO8?autoplay=0&origin=http://localhost"
  frameBorder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorks;