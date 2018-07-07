import React, { Component } from 'react';
import { loginUser } from '../actions/LoginAction'
import { connect } from 'react-redux'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: undefined,
            value2: undefined
        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="container hp-container">
                    <div className="row">
                        <div className="col-sm-6 my-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Upcoming Bookings</h5>
                                    <div className="container">
                                        <ul>
                                            <li>Prem</li>
                                            <li>kumar</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 my-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Upcoming Audits</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-sm-6 my-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Inventory Summary</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 my-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Revenue</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

 


            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        reducer_dashboard: state.reducer_dashboard
    };
}

export default connect(mapStateToProps, { loginUser })(Dashboard);