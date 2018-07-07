import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'
import { getCategoryList } from "../../actions/InventoryAction";
import { connect } from 'react-redux'

class AddInventory extends Component {

    constructor(props){
        super(props);
        this.state = {
            imagName:"Choose File",
            categories : [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveInventory = this.saveInventory.bind(this);

    }

    componentDidMount(){
        this.props.getCategoryList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reducer_inventory.result.categories.length > 0  || this.state.categories.length === 0) {
            this.setState({
                categories:nextProps.reducer_inventory.result.categories
            })
        }

    }

    handleChange(selectorFiles: FileList){
        console.log("files ",selectorFiles)
        if (selectorFiles.length > 0){
            let file = selectorFiles[0]
            this.setState ({
                imagName:file.name
            })
        }
    }


    saveInventory(){
        this.props.history.push("/home/inventory/list")
    }

    render() {
        return (
            < form >
                <h2> Add Inventory</h2>
                <div className="form-row offset-md-3">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputCategory">Category</label>
                        <select id="inputCategory" className="form-control">
                            <option>select category</option>
                            {this.state.categories.map ((category,key) => {
                                <option key={key} value={category.categoryType}>category.categoryType</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group col-md-5">
                        <label htmlFor="inputCity">Item name</label>
                        <input type="text" placeholder="Item name" className="form-control" id="itemName" />
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="itemPrice">Item Price</label>
                        <input type="number" placeholder="Item Price" className="form-control" id="itemPrice" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="Quantity">Quantity</label>
                        <input type="number" className="form-control" id="Quantity" placeholder="Quantity" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputAddress">Item Description</label>
                        <textarea className="form-control" id="itemDescription" placeholder="Item Description" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group custom-file col-md-10">
                        <input type="file" className="custom-file-input" id="customFile"   onChange={ (e) => this.handleChange(e.target.files) } accept="image/*"/>
                            <label className="custom-file-label" htmlFor="customFile">{this.state.imagName}</label>
                    </div>
                </div>

                <button type="button" onClick={this.saveInventory} className="btn btn-primary">Save</button>
            </form>)
    }
}
                

function mapStateToProps(state) {
    return {
        reducer_inventory: state.reducer_inventory
    };
}

export default connect(mapStateToProps, { getCategoryList })(AddInventory);