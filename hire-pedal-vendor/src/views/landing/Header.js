import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        var temp = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
        
        this.state = {
            userName: temp,
            className : "navbar navbar-expand-lg navbar-light fixed-top op-main-header",
            e : false,
            b : document.documentElement,
            g : document.querySelector(".op-main-header"),
            a :50
        }
        this.logoutAction = this.logoutAction.bind(this);
        this.d = this.d.bind(this)
        this.c = this.c.bind(this)
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScrollEvent);
    }


    logoutAction() {
        localStorage.clear()
    }

    handleScrollEvent(event){
        if (!this.state.e) {
            this.state.e = true;
            setTimeout(this.d(), 250)
        }
    }

    d() {
        var h = this.c();
        if (h >= this.state.a) {
            //classie.add(g, "navbar-shrink")
            this.setState({
                className : "navbar navbar-expand-lg navbar-light fixed-top op-main-header navbar-shrink"
            })
        } else {
            //classie.remove(g, "navbar-shrink")
            this.setState({
                className : "navbar navbar-expand-lg navbar-light fixed-top op-main-header"
            })
        }
        this.state.e = false
    }

    c() {
        return window.pageYOffset || this.state.b.scrollTop
    }


    render() {
        const style1 = {
            maxWidth: "200px"
        }
        const selected = {
            color:  "green"
        }

        return (
            <React.Fragment>
                <nav id="appHeader" className={this.state.className}>
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><img src="" alt="" className="logo" width="200" /><img src="" alt="" className="logo_inverse" width="200" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#page-top">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#howitworks">How it Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-us">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid op-header-bg">
                    <div className="container op-home-container">
                        <h1 className="op-home-title text-center">HirePedal</h1>
                        <p className="op-home-subtitle text-center">Reimage how you explore local experiences on your next vacation</p>
                        <h4 className="mdl-color-text--white mdl-typography--font-light text-center">
                            <a href="https://play.google.com/store/apps/details?id=com.hirepedal.customer&hl=en_IN" target="_blank" className="mr-2"><img src="images/google-play-badge.png" alt="" style={style1} /></a>
                        </h4>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        reducer_login: state.reducer_login
    };
}

export default connect(mapStateToProps, {})(Header);
