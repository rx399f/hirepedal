import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'
import { getCategoryList } from "../../actions/InventoryAction";
import { connect } from 'react-redux'

class InventoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],

        }
    }

    componentDidMount() {
        this.props.getCategoryList();
    }


    componentWillReceiveProps(nextProps) {

        if (nextProps.reducer_inventory.result.categories.length > 0 || this.state.categories.length === 0) {
            this.setState({
                categories: nextProps.reducer_inventory.result.categories
            })
        }

    }


    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-end">
                    <div className=".col-md-4 .offset-my-4">
                        <Link to="/home/inventory/add" className="btn btn-primary">Add</Link>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                    <div className="col">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Hercules - Roadsters
    <span class="badge badge-primary badge-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Hercules - Roadeo
    <span class="badge badge-primary badge-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Hercules - Ryders
    <span class="badge badge-primary badge-pill">1</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Hercules - Turbodrive
    <span class="badge badge-primary badge-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Hercules - CMX
    <span class="badge badge-primary badge-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                            Hero Cycles - Maxim Fun Series
    <span class="badge badge-primary badge-pill">1</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                            Hero Cycles - Super Start Series
    <span class="badge badge-primary badge-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                            Hero Cycles - City Bikes
    <span class="badge badge-primary badge-pill">1</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}

function mapStateToProps(state) {
    return {
        reducer_inventory: state.reducer_inventory
    };
}

export default connect(mapStateToProps, { getCategoryList })(InventoryList);

