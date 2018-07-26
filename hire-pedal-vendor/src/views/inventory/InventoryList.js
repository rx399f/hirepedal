import React, { Component } from 'react';
import {
    Link
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
            <div className="col-12">
                <div className="mdl-color--white mdl-shadow--2dp op-card mb-5">
                    <h4 className="op-card-heading mb-4">INVENTORY LIST</h4>
                    <div className="op-card-flot-btn">
                        <Link to='/dashboard/addInventory' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row mx-0 py-4">
                        <div className="col-3">
                            <div className="op-card-list mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="../images/cycle-inventory.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hercules - Roadsters <span className="float-right mdl-color-text--pink-A200">14</span></h5>
                                        <p>catetory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="op-card-list mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="../images/cycle-inventory.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hercules - Roadsters <span className="float-right mdl-color-text--pink-A200">14</span></h5>
                                        <p>catetory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="op-card-list mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="../images/cycle-inventory.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hercules - Roadsters <span className="float-right mdl-color-text--pink-A200">14</span></h5>
                                        <p>catetory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="op-card-list mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="../images/cycle-inventory.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hercules - Roadsters <span className="float-right mdl-color-text--pink-A200">14</span></h5>
                                        <p>catetory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="op-card-list mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="../images/cycle-inventory.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hercules - Roadsters <span className="float-right mdl-color-text--pink-A200">14</span></h5>
                                        <p>catetory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="op-card-list mb-4">
                                <div className="card">
                                    <img className="card-img-top" src="../images/cycle-inventory.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hercules - Roadsters <span className="float-right mdl-color-text--pink-A200">14</span></h5>
                                        <p>catetory</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        reducer_inventory: state.reducer_inventory
    };
}

export default connect(mapStateToProps, { getCategoryList })(InventoryList);

