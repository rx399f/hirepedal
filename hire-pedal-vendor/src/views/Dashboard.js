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
                        <div className="col-sm-4 my-4">


                            <div className="card text-white bg-primary mb-3" >
                                <div className="card-header">Registered Users</div>
                                <div className="card-body">
                                    <h5 className="card-title">5</h5>
                                    <p className="card-text">Full Detail</p>
                                </div>
                            </div>



                        </div>

                        <div className="col-sm-4 my-4">
                            <div className="card text-white bg-secondary mb-3" >
                                <div className="card-header">Listed Cycles</div>
                                <div className="card-body">
                                    <h5 className="card-title">10</h5>
                                    <p className="card-text">Full Detail</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 my-4">
                            <div className="card text-white bg-success mb-3" >
                                <div className="card-header">Total Bookings</div>
                                <div className="card-body">
                                    <h5 className="card-title">40</h5>
                                    <p className="card-text">Full Detail</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 my-4">
                            <div className="card text-white bg-danger mb-3" >
                                <div className="card-header">Listed Brands</div>
                                <div className="card-body">
                                    <h5 className="card-title">7</h5>
                                    <p className="card-text">Full Detail</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 my-4">
                            <div className="card text-white bg-warning mb-3" >
                                <div className="card-header">Queries</div>
                                <div className="card-body">
                                    <h5 className="card-title">3</h5>
                                    <p className="card-text">Full Detail</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 my-4">
                            <div className="card text-white bg-info mb-3" >
                                <div className="card-header">Testimonials</div>
                                <div className="card-body">
                                    <h5 className="card-title">2</h5>
                                    <p className="card-text">Full Detail</p>
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