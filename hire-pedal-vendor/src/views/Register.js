import React, { Component } from 'react';
import { registerPartner } from '../actions/RegisterAction'
import { connect } from 'react-redux'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: undefined,
            lastName: undefined,
            phoneNumber: undefined,
            email: undefined,
            aadhar: undefined,
            password: undefined
        }
        this.registerAction = this.registerAction.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {


        if (nextProps.reducer_login.result.registerUser !== undefined || nextProps.reducer_login.result.registerUser !== null) {
            this.props.history.push("/login")
        }


    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }


    registerAction(event) {
        event.preventDefault()
        var requestParams = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phoneNumber,
            email: this.state.email,
            aadharNumber: this.state.aadhar,
            password: this.state.password
        }
        this.props.registerPartner(requestParams)

    }

    render() {
        return (
            <div className="container hp-container">

                <form className="form-signin">
                    <h2 className="form-signin-heading">Register</h2>
                    <label htmlFor="inputFirstname" className="sr-only">First name</label>
                    <input type="text" id="inputFirstname" name="firstName" onChange={this.handleInputChange} className="form-control" placeholder="First name" required autoFocus />
                    <label htmlFor="inputLastname" className="sr-only">Last name</label>
                    <input type="text" id="inputLastname" name="lastName" onChange={this.handleInputChange} className="form-control" placeholder="Last name" required />
                    <label htmlFor="inputPhone" className="sr-only">Phone number</label>
                    <input type="number" id="inputPhone" name="phoneNumber" onChange={this.handleInputChange} className="form-control" placeholder="Phone number" required />
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" name="email" onChange={this.handleInputChange} className="form-control" placeholder="Email" required />
                    <label htmlFor="inputAadhar" className="sr-only">Aadhar</label>
                    <input type="number" id="inputAadhar" name="aadhar" onChange={this.handleInputChange} className="form-control" placeholder="Aadhar" required />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" name="password" onChange={this.handleInputChange} className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.registerAction}>Register</button>
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


export default connect(mapStateToProps, { registerPartner })(Register);