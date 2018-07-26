import React, { Component } from 'react';
import { saveContactUS } from '../../actions/LoginAction'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            email: undefined,
            phoneNumber: undefined,
            comments: undefined,
            error: false,
            errorMessage: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveContactDetails = this.saveContactDetails.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {



        if (nextProps.reducer_login.result.saveContact !== undefined && nextProps.reducer_login.result.saveContact.status === "fail") {
            this.setState({
                open: true,
                errorMessage: nextProps.reducer_login.result.saveContact.message
            })
        }
        else if (nextProps.reducer_login.result.saveContact !== undefined &&  nextProps.reducer_login.result.saveContact.status === "success"){
            this.setState({
                open: true,
                errorMessage: "Thank you, We will reach out you shortly"
            })
        }

        //{"status":"success","statusCode":"200","message":"please check username and password","partners":null,"customers":null,"addressess":null,"partner":null}

    }


    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    saveContactDetails() {
        if (this.state.name.length > 3 && this.state.phoneNumber.length === 10 && this.state.email.length > 4) {
            this.props.saveContactUS({
                "name": this.state.name,
                "emailAddress": this.state.email,
                "phone": this.state.phoneNumber,
                "message": this.state.comments
            })
        }
        else {
            alert("Enter valid contact details");
        }
    }


    handleClose() {
        this.setState({ open: false })
    }


    render() {
        return (
            <div id="contact" className="container-fluid op-section op-contact-bg pb-0">
                <div className="container">
                    <h1 className="text-center op-section-title pb-3">Keep the Conversation Going</h1>
                    <p className="text-center pb-5">We would love to talk to you about any questions you may have.</p>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
                                <label className="mdl-textfield__label" htmlFor="">Name *</label>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3">

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                <label className="mdl-textfield__label" htmlFor="">Email Address *</label>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" onChange={this.handleInputChange} value={this.state.phoneNumber} type="text" name="phoneNumber" />
                                <label className="mdl-textfield__label" htmlFor="">Phone *</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea className="mdl-textfield__input" type="text" rows="3" name="comments" onChange={this.handleInputChange} value={this.state.comments} ></textarea>
                                <label className="mdl-textfield__label" htmlFor="">Message</label>
                            </div>
                        </div>
                        <div className="m-y-xl text-center col-12">
                            <button onClick={this.saveContactDetails} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn-lg btn-curve op-home-btn m-x-md">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="op-stripe2 col-12 mt-5">
                        <div className="container py-3 align-items-center">
                            <div className="row">
                                <div className="col-6">
                                    <p className="lead mb-0">Hirepedal. All Rights Reserved</p>
                                </div>
                                <div className="col-6">
                                    <a href="https://www.facebook.com/Opteamix/" target="_blank" className="d-block t-footer-sicon"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="https://twitter.com/opteamix" target="_blank" className="d-block t-footer-sicon"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="https://www.linkedin.com/company/opteamix" target="_blank" className="d-block t-footer-sicon"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"HirePedal"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.state.errorMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        reducer_login: state.reducer_login
    };
}

export default connect(mapStateToProps, { saveContactUS })(Contact);