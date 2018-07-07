import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'

class AddInventory extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectorFiles: FileList){
        console.log("files ",selectorFiles)
    }

    render() {
        return (
            < form >
                <h2> Add Inventory</h2>
                <div className="form-row offset-md-3">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputCategory">Category</label>
                        <select id="inputCategory" className="form-control">
                            <option>Cycle</option>
                            <option>E-Cycle</option>
                            <option>Segway</option>
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
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-10">
                        <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                </div>
            </form>)
                    }
                }
                
export default AddInventory;