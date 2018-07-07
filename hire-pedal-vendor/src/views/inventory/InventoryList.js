import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'

class InventoryList extends Component {

    render(){
        return(
            <div className="row">
                        <div className="col-sm-6 my-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Inventory Bookings</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="/home/inventory/add" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 my-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Inventory Audits</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>


                    </div>

        )
    }
}

export default InventoryList;