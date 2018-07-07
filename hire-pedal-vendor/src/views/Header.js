import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    constructor(props) {
        super(props);
        var temp = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
        this.state = {
            userName: temp
        }
        this.logoutAction = this.logoutAction.bind(this);
   
    }


    logoutAction() {
        localStorage.clear()
        //this.props.history.push("/login")

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
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.userName}<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><a href="#">Profile</a></li>
                                <li role="separator" className="divider"></li>
                                <li className="dropdown-item"><a onClick={this.logoutAction} href="/login">Logout</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }

}

function mapStateToProps(state) {
    return {
        reducer_login: state.reducer_login
    };
}

export default connect(mapStateToProps, {})(Header);
