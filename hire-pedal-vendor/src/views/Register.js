import React, { Component } from 'react';
import { registerPartner } from '../actions/RegisterAction'
import { connect } from 'react-redux'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    Link
} from 'react-router-dom'
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            aadhar: "",
            password: "",
            address: '',
            latitude: undefined,
            longitude: undefined,
        }

        this.registerAction = this.registerAction.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.back = this.back.bind(this);
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reducer_login.result.registerUser !== undefined && nextProps.reducer_login.result.registerUser !== null) {
            

            if (nextProps.reducer_login.result.loginUser.status !== undefined && nextProps.reducer_login.result.loginUser.status === "fail") {
                this.setState({
                    open: true,
                    errorMessage: nextProps.reducer_login.result.loginUser.message
                })
            }
            else {
                this.props.history.push("/dashboard")
            }
        }

    
    }

    handleChange = address => {
        this.setState({ address });
    }


    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                this.setState({
                    address: results[0].formatted_address
                })
                getLatLng(results[0]).then(latLng => {
                    console.log('Success', latLng)
                    this.setState({
                        latitude: latLng.lat,
                        longitude: latLng.lng
                    })
                })
            })

            .catch(error => console.error('Error', error));
    }

    handleClose() {
        this.setState({ open: false })
    }

    back(){
        this.props.history.goBack();
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }


    registerAction(event) {
        event.preventDefault()

        if (this.state.email.length > 5 && this.state.password.length > 5 && this.state.aadharNumber.length === 12
            && this.state.firstName.length > 3 && this.state.lastName.length > 3) {
            var requestParams = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phoneNumber,
                email: this.state.email,
                aadharNumber: this.state.aadhar,
                password: this.state.password,
                address: {
                    "addressId": "", "addressLine1": this.state.address,
                    "addressLine2": "", "landmark": "",
                    "city": "", "state": "",
                    "pinCode": "", "status": "ACTIVE",
                    "refId": "", "refType": "PARTNER",
                    "lat": this.state.latitude, "log": this.state.longitude
                }
            }
            this.props.registerPartner(requestParams)
        }
        else {
            this.setState({
                open: true,
                errorMessage: "Please fill require fields"
            })
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
                        <a className="navbar-brand" ><img src="" alt="" className="logo" width="200" /><img src="" alt="" className="logo_inverse" width="200" /></a>
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
                    <div className="container op-register-container">
                        <form className="form-signin">
                            <img className="mb-4" src="" alt="" width="72" height="72" />
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <TextField
                                name="firstName" autoFocus={true}
                                label="First name *" style={width}
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                name="lastName"
                                label="Last name *" style={width}
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                name="phoneNumber" 
                                label="Phone number *" style={width}
                                value={this.state.phoneNumber}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                name="email"
                                label="Email *" style={width}
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                name="aadharNumber"
                                label="Aadhar number *" style={width}
                                value={this.state.aadharNumber}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                name="password"
                                label="Password *" style={width}
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />

                            <PlacesAutocomplete className="places" style={width}
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div style={width} className="mt-4">
                                        <input style={width}
                                            {...getInputProps({
                                                placeholder: 'Search Places ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                        <div className="autocomplete-dropdown-container mt-4" style={width}>
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>

                            <div className="m-y-xl text-center col-12">
                                <a onClick={this.registerAction} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn-lg btn-curve op-home-btn m-x-md">Submit</a>
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


export default connect(mapStateToProps, { registerPartner })(Register);


/*
<div className="container hp-container">

                <form className="form-signin">
                    <h2 className="form-signin-heading">Register</h2>
                    <label htmlFor="inputFirstname" className="sr-only">First name</label>
                    <input type="text" id="inputFirstname" name="firstName" onChange={this.handleInputChange} className="form-control" placeholder="First name *" required autoFocus />
                    <label htmlFor="inputLastname" className="sr-only">Last name</label>
                    <input type="text" id="inputLastname" name="lastName" onChange={this.handleInputChange} className="form-control" placeholder="Last name *" required />
                    <label htmlFor="inputPhone" className="sr-only">Phone number</label>
                    <input type="number" id="inputPhone" name="phoneNumber" onChange={this.handleInputChange} className="form-control" placeholder="Phone number"  />
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" name="email" onChange={this.handleInputChange} className="form-control" placeholder="Email *" required />
                    <label htmlFor="inputAadhar" className="sr-only">Aadhar</label>
                    <input type="number" id="inputAadhar" name="aadharNumber" onChange={this.handleInputChange} className="form-control" placeholder="Aadhar *" required />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" name="password" onChange={this.handleInputChange} className="form-control" placeholder="Password *" required />

                    <div className="form-control">
                        <PlacesAutocomplete className="places"
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Search Places ...',
                                            className: 'location-search-input',
                                        })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.registerAction}>Register</button>
                </form>

            </div>
*/