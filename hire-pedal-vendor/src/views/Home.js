import React, { Component } from 'react';
import Landing from './landing/Landing.js'
import Login from './Login.js'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Register from './Register';
import Dashboard from './Dashboard'

class Home extends Component {

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Landing} />
                    <Route path="/home" component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                </React.Fragment>
            </Router>
        )
    }
}

export default Home;

/*
<React.Fragment>
                <Header />
                <Route exact path="/home" component={Dashboard} />
                <Route path="/home/inventory" component={Inventory} />
                <Route path="/home/contact" component={Contact} />
                <Route path="/home/about" component={About} />
            </React.Fragment>
*/