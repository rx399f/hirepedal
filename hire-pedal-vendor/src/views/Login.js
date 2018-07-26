import React, { Component } from 'react';
import { loginUser } from '../actions/LoginAction'
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: undefined,
            password: undefined,
            open: false,
            errorMessage: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginClickAction = this.loginClickAction.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {

    }

    handleClose() {
        this.setState({ open: false })
    }

    back(){
        this.props.history.goBack();
    }


    componentWillReceiveProps(nextProps) {



        if (nextProps.reducer_login.result.loginUser !== undefined && nextProps.reducer_login.result.loginUser !== null) {
            if (nextProps.reducer_login.result.loginUser.partners !== undefined && nextProps.reducer_login.result.loginUser.partners !== null) {
                if (nextProps.reducer_login.result.loginUser.partners.length > 0) {
                    let object = nextProps.reducer_login.result.loginUser.partners[0]
                    localStorage.setItem("partnerId", object.partnerId)
                    localStorage.setItem("firstName", object.firstName)
                    localStorage.setItem("lastName", object.lastName)
                    this.props.history.push("/dashboard")
                }
            }
            else if (nextProps.reducer_login.result.loginUser.message !== undefined && nextProps.reducer_login.result.loginUser.message !== null) {
                this.setState({
                    open: true,
                    errorMessage: nextProps.reducer_login.result.loginUser.message
                })
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

        if (this.state.userName.length > 5 && this.state.password.length > 4) {
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

        const width = {
            width: "100%",
            marginBottom: "10px"
        }

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top op-main-header">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src="" alt="" className="logo" width="200" /><img src="" alt="" className="logo_inverse" width="200" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <button onClick={this.back} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                                                <i className="material-icons">keyboard_backspace</i>
                                            </button>
                                    {/* <a className="nav-link" onClick={this.back}><i class="material-icons">arrow_back</i></a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid op-header-bg op-bg100">
                    <div className="container op-login-container">
                        <form className="form-signin">
                            <img className="mb-4" src="" alt="" width="72" height="72" />
                            <h1 className="h3 mb-3 font-weight-normal">LOGIN</h1>
                            <TextField
                                name="userName" autoFocus={true}
                                label="Email address" style={width}
                                value={this.state.userName}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                name="password"
                                label="Password" style={width}
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <div className="m-y-xl text-center col-12">
                                <a onClick={this.loginClickAction} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn-lg btn-curve op-home-btn m-x-md">Submit</a>
                            </div>
                            <div className="m-y-xl text-center col-12">
                                <Link to="/register" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-lg btn-curve op-home-btn op-bg-register m-x-md">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"HirePedal Error"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.state.errorMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Ok</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

        );
    }

}


function mapStateToProps(state) {
    return {
        reducer_login: state.reducer_login
    };
}

export default connect(mapStateToProps, { loginUser })(Login);
