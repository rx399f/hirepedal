import React, { Component } from 'react';
import {
    Link, NavLink
} from 'react-router-dom'
import { getCategoryList, saveInventory } from "../../actions/InventoryAction";
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

class AddInventory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageName: "Choose File",
            imageFile: undefined,
            categories: [],
            imageResult: undefined
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveInventory = this.saveInventory.bind(this);
        this.generateFileName = this.generateFileName.bind(this);
        this.goBack = this.goBack.bind(this);
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

        if (nextProps.reducer_inventory.result.saveImage !== undefined && this.state.imageResult === undefined) {

            this.setState({
                imageResult: nextProps.reducer_inventory.result.saveImage
            })
        }

    }

    goBack() {
        this.props.history.goBack();
    }

    handleChange(selectorFiles: FileList) {
        console.log("files ", selectorFiles)
        if (selectorFiles.length > 0) {
            let file = selectorFiles[0]
            this.setState({
                imageFile: file,
                imageName: file.name
            })
        }
    }


    saveInventory() {
        var formData = new FormData()

        // refId : “356353753537”
        // refType : “PARTNER”
        // image : imageFile

        formData.append(this.generateFileName(), this.state.imageFile);
        this.props.saveInventory(formData);
        //this.props.history.push("/home/inventory/list")
    }

    generateFileName() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }



    render() {
        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    <div className="row">
                        <div className="container-fluid mt-4 px-5">
                            <div className="row mx-0">
                                <div className="col-12">
                                    <div className="mdl-color--white mdl-shadow--2dp op-card mb-5">
                                        <h4 className="op-card-heading mb-4">INVENTORY ADD</h4>
                                        <div className="op-card-flot-btn">
                                            <button onClick={this.goBack} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                                                <i className="material-icons">keyboard_backspace</i>
                                            </button>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="row mx-0 py-4">
                                            <div className="col-4 mb-4">
                                                <TextField
                                                    name="itemName"
                                                    label="Item name"
                                                    value={this.state.itemName}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="col-4 mb-4">
                                            <TextField
                                                    name="itemPrice"
                                                    label="Item Price"
                                                    value={this.state.itemPrice}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="col-4 mb-4">
                                            <TextField
                                                    name="quantity"
                                                    label="Quantity"
                                                    value={this.state.quantity}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="col-6 mb-4">
                                            <TextField
                                                    name="description"
                                                    label="Item Description"
                                                    value={this.state.description}
                                                    multiline
                                                    rowsMax="4"
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                    <input type="file" className="custom-file-input" id="customFile" onChange={(e) => this.handleChange(e.target.files)} accept="image/*" />
                                                    <label className="custom-file-label" htmlFor="customFile">{this.state.imageName}</label>
                                                </div>
                                            </div>
                                            <div className="col-12 my-3">
                                                <a href="dashboard.html" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> Submit </a>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
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
        reducer_inventory: state.reducer_inventory
    };
}

export default connect(mapStateToProps, { getCategoryList, saveInventory })(AddInventory);

/*
< form >
                <h2> Add Inventory</h2>
                <div className="form-row offset-md-3">
                    <div className="form-group col-md-5">
                        <label htmlhtmlFor="inputCategory">Category</label>
                        <select id="inputCategory" className="form-control">
                            <option>select category</option>
                            {this.state.categories.map ((category,key) => {
                                <option key={key} value={category.categoryType}>category.categoryType</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group col-md-5">
                        <label htmlhtmlFor="inputCity">Item name</label>
                        <input type="text" placeholder="Item name" className="form-control" id="itemName" />
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlhtmlFor="itemPrice">Item Price</label>
                        <input type="number" placeholder="Item Price" className="form-control" id="itemPrice" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlhtmlFor="Quantity">Quantity</label>
                        <input type="number" className="form-control" id="Quantity" placeholder="Quantity" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlhtmlFor="inputAddress">Item Description</label>
                        <textarea className="form-control" id="itemDescription" placeholder="Item Description" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group custom-file col-md-10">
                        <input type="file" className="custom-file-input" id="customFile"   onChange={ (e) => this.handleChange(e.target.files) } accept="image/*"/>
                            <label className="custom-file-label" htmlhtmlFor="customFile">{this.state.imagName}</label>
                    </div>
                </div>

                <button type="button" onClick={this.saveInventory} className="btn btn-primary">Save</button>
            </form>
*/