import React, { Component } from 'react';
import YouTube from 'react-youtube';

class About extends Component {

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        // const opts = {
        //     height: '390',
        //     width: '640',
        //     playerVars: {
        //         autoplay: 1,
        //         src: 'https://www.youtube.com/watch?v=1ogD0aIpe9s'
        //     }
        // };


        return (
            <div id="about-us" className="container-fluid op-section pb-5">
                <div className="container">
                    <h1 className="text-center op-section-title">About Us</h1>
                    <h4 className="op-lead text-center pb-5">Hirepedal is a marketplace which brings tourists, mechanics and rural entrepreneurs on the same platform for renting and hiring well maintained cycle/e-bikes/segways online. Tourists by using Hirepedal website or mobile app can book cycles from a fleet of cycles managed by local entrepreneurs at the tourist attraction.</h4>
                    <h4 className="op-lead text-center pb-5 mb-0">We believe in building a better nation by supporting environment friendly tourism, reducing carbon footprints and by providing employment opportunities to rural people.</h4>
                </div>
            </div>
        )
    }
}

export default About;