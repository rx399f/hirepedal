import axios from 'axios';
import Constants from '../constants/Constants.js'
import ActionTypes from '../constants/ActionTypes'


export function getCategoryList(){

    return function(dispatch){
        axios.get(Constants.URL_GET_CATEGORY)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_GET_CATEGORY,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}



export function getInventoryList(requestParams){

    return function(dispatch){        
        axios.get(Constants.URL_GET_INVENTORY_LIST)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_GET_INVENTORY_LIST,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}



export function saveInventory(requestParams){

    return function(dispatch){
        var formData = new FormData()
        
        axios.post(Constants.URL_SAVE_INVENTORY,requestParams)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_SAVE_INVENTORY,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}


export function saveImageForInventory(formData){

    return function(dispatch){
        
        axios.post(Constants.URL_BASE + "" +Constants.URL_SAVE_IMAGE,formData)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_SAVE_IMAGE,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}




