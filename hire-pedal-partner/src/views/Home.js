import React, { Component } from 'react';
import Dashboard from './Dashboard'
import Login from './Login'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Inventory from './inventory/Inventory.js'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Route exact path="/home" component={Dashboard} />
                <Route path="/home/inventory" component={Inventory} />
                <Route path="/home/contact" component={Contact} />
                <Route path="/home/about" component={About} />
            </React.Fragment>
        )
    }
}

export default Home;