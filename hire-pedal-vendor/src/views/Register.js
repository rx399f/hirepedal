import React, { Component } from 'react';
import { registerPartner } from '../actions/RegisterAction'
import { connect } from 'react-redux'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

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
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

        
        if (nextProps.reducer_login.result.registerUser !== undefined || nextProps.reducer_login.result.registerUser !== null) {
            this.props.history.push("/login")
        }


    }

    handleChange = address => {
        this.setState({ address });
    };


    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => {
            this.setState({
                address:results[0].formatted_address
            })
              getLatLng(results[0]).then(latLng => {console.log('Success', latLng)
              this.setState({
                latitude:latLng.lat,
                longitude:latLng.lng
              })
            })
          })
     
          .catch(error => console.error('Error', error));
      };


    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }


    registerAction(event) {
        event.preventDefault()

        if (this.state.email.length > 5 && this.state.password.length > 5 && this.state.aadharNumber.length === 12 
        && this.state.firstName.length > 3 && this.state.lastName.length >3 ){
            var requestParams = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phoneNumber,
                email: this.state.email,
                aadharNumber: this.state.aadhar,
                password: this.state.password,
                address:{
                    "addressId":"", "addressLine1":this.state.address, 
                "addressLine2":"", "landmark":"", 
                "city":"", "state":"", 
                "pinCode":"", "status":"ACTIVE", 
                "refId":"", "refType":"PARTNER",
                "lat":this.state.latitude, "log":this.state.longitude
            }
            }
            this.props.registerPartner(requestParams)
        }
        else {
            alert("Please fill require fields")
        }
     

    }

    render() {
        return (
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
        );
    }

}


function mapStateToProps(state) {
    return {
        reducer_login: state.reducer_login
    };
}


export default connect(mapStateToProps, { registerPartner })(Register);