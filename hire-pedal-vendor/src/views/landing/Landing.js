import React, { Component } from 'react';
import HowItWorks from './HowItWorks'
import About from './About'
import Features from './Features'
import Contact from './Contact'
import Header from './Header'


class Landing extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <HowItWorks/>
                <About/>
                <Features/>
                <Contact/>
            </React.Fragment>
        )
    }
}

export default Landing;