import React, { Component } from 'react';
import { loginUser } from '../actions/LoginAction'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: undefined,
            password: undefined
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginClickAction = this.loginClickAction.bind(this);
    }

    componentDidMount() {

    }


    componentWillReceiveProps(nextProps) {

        if (nextProps.reducer_login.result.loginUser !== undefined || nextProps.reducer_login.result.loginUser !== null) {
            let userId = (nextProps.reducer_login.result.loginUser).split()
            localStorage.setItem("userid",)
            this.props.history.push("/login")
        }


    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });


    }

    loginClickAction() {
        this.props.loginUser({
            "userName": this.state.userName,
            "password": this.state.password
        })
        this.props.history.push("/home")
    }


    render() {
        return (
            <div className="container hp-container">

                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.loginClickAction}>Sign in</button>
                    <div className="col-md text-center"> 
                    <Link className="btn btn-light" to="/register">Register</Link>
                    </div>
                </form>

            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        reducer_login: state.reducer_login
    };
}

export default connect(mapStateToProps, { loginUser })(Login);
