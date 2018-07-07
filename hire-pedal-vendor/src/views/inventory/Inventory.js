import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Route,
    Link, Switch, Redirect
} from 'react-router-dom'

import InventoryList from "./InventoryList";
import AddInventory from "./AddInventory";

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
           
                <div className="container hp-container">
                    <Switch>
                        <Route path='/home/inventory/list' component={InventoryList} />
                        <Route path='/home/inventory/add' component={AddInventory} />
                        <Redirect to='/home/inventory/add' />
                    </Switch>

                    
                </div>


          
        )
    }
}

function mapStateToProps(state) {
    return {
        reducer_dashboard: state.reducer_dashboard
    };
}

export default connect(mapStateToProps, {})(Inventory);