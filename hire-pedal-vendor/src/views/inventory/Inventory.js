import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Route,
    Link, Switch, Redirect
} from 'react-router-dom'

import InventoryList from "./InventoryList";
import AddInventory from "./AddInventory";
import UpcomingBookings from './UpcomingBookings';
import InflightOrders from './InflightOrders';

class Inventory extends Component {

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

            <main className="mdl-layout__content">
                <div className="page-content">
                    <div className="row">
                        <div className="container-fluid mt-4 px-5">
                            <div className="row mx-0">
                            <UpcomingBookings/>
                            <InflightOrders/>
                                <div className="col-2">
                                    <div className="mdl-color--white mdl-shadow--2dp op-card mb-4">
                                        <h5 className="op-card-heading">TOTAL BOOKING</h5>
                                        <div className="clearfix"></div>
                                        <h1 className="text-center my-2">227</h1>
                                        <button className="mdl-button mdl-js-button mdl-button--accent float-right"> View List </button>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="mdl-color--white mdl-shadow--2dp op-card">
                                        <h5 className="op-card-heading">TOTAL INVENTORY</h5>
                                        <div className="clearfix"></div>
                                        <h1 className="text-center my-2">128</h1>
                                        <button className="mdl-button mdl-js-button mdl-button--accent float-right"> View List </button>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <InventoryList/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        reducer_dashboard: state.reducer_dashboard
    };
}

export default connect(mapStateToProps, {})(Inventory);