import React, { Component } from 'react';
import { loginUser } from '../actions/LoginAction'
import { connect } from 'react-redux'
import {
    Route,Switch,Redirect,
    Link
} from 'react-router-dom'
import Inventory from './inventory/Inventory';
import AddInventory from './inventory/AddInventory';
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: undefined,
            value2: undefined
        }
        this.back = this.back.bind(this);
    }

    componentDidMount() {

    }

    back(){
        this.props.history.push("/home")
    }

    render() {
        const title = {
            color: "black",
            fontSize:"23px"
        }
        return (
            <React.Fragment>
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            {/* Title  */}
                            <span onClick={this.back} className="mdl-layout-title" style={title}>HirePedal</span>
                            {/* <!-- Add spacer, to align navigation to the right --> */}
                            <div className="mdl-layout-spacer"></div>
                            {/* <!-- Navigation. We hide it in small screens. --> */}
                            <nav className="mdl-navigation mdl-layout--large-screen-only">
                                <a className="mdl-navigation__link" id="demo-menu-lower-right"><img src="images/user_avatar.jpg" className="rounded-circle op-avatar" alt="" /></a>
                                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                    htmlFor="demo-menu-lower-right">
                                    <Link to="/profile" className="mdl-menu__item">Profile Setting</Link>
                                    <Link to="/home" className="mdl-menu__item">Logout</Link>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
                <Switch>
                    <Route path='/dashboard/inventory' component={Inventory} />
                    <Route path='/dashboard/addInventory' component={AddInventory} />
                    <Redirect to='/dashboard/inventory' />
                </Switch>

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


/*
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
*/
