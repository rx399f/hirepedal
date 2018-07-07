import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props);

        this.logoutAction = this.logoutAction.bind(this);
    }

    logoutAction(){
        
    }

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/home">Hire Pedal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home/inventory">Inventory</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home/contact">Contact Us</NavLink>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="dropdown dropdown-menu-right">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Partner name<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#">Profile</a></li>
                                <li role="separator" className="divider"></li>
                                <li className="dropdown-item"><Link to="/login">Logout</Link></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }

}

export default Header;