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
            userName: "",
            password: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginClickAction = this.loginClickAction.bind(this);
    }

    componentDidMount() {

    }


    componentWillReceiveProps(nextProps) {



        if (nextProps.reducer_login.result.loginUser !== undefined || nextProps.reducer_login.result.loginUser !== null) {
            if (nextProps.reducer_login.result.loginUser.partners !== undefined && nextProps.reducer_login.result.loginUser.partners !== null) {
                if (nextProps.reducer_login.result.loginUser.partners.length > 0) {
                    let object = nextProps.reducer_login.result.loginUser.partners[0]
                    localStorage.setItem("partnerId", object.partnerId)
                    localStorage.setItem("firstName", object.firstName)
                    localStorage.setItem("lastName", object.lastName)
                    this.props.history.push("/home")
                }
            }
            else if (nextProps.reducer_login.result.loginUser.message !== undefined && nextProps.reducer_login.result.loginUser.message !== null ){
                alert(nextProps.reducer_login.result.loginUser.message)
            }
        }
//{"status":"success","statusCode":"200","message":"please check username and password","partners":null,"customers":null,"addressess":null,"partner":null}

    }

    //{"status":"success","statusCode":"200","message":null,"partners":[{"partnerId":"5b41042dff8e255c8c4da0b8","firstName":"Premkumar","lastName":"Palanisamy","phone":"9994595457","email":"prem@test.com","password":"12345","aadharNumber":"123456789","aadharVerified":false,"profilePic":null}],"customers":null,"addressess":null,"partner":null}

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });


    }

    loginClickAction() {

        if(this.state.userName.length > 5 && this.state.password.length > 4){
            this.props.loginUser({
                "email": this.state.userName,
                "password": this.state.password
            })
        }
        else {
            alert("Enter valid credentials");
        }

    }


    render() {
        return (
            <div className="container hp-container">

                <div className="form-signin">
                    <h2 className="form-signin-heading">Login</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" name="userName" id="inputEmail" value={this.state.userName} onChange={this.handleInputChange} className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" name="password" id="inputPassword" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.loginClickAction}>Login</button>
                    <div className="col-md text-center">
                        <Link className="btn btn-light" to="/register">Register</Link>
                    </div>
                </div>

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
