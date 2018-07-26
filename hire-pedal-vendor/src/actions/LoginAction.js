import axios from 'axios';
import Constants from '../constants/Constants.js'
import ActionTypes from '../constants/ActionTypes'


export function loginUser(requestParams){

    return function(dispatch){
        axios.post(Constants.URL_LOGIN,requestParams)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_LOGIN,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export function getUserInfo(userId){

    return function(dispatch){
        axios.get(Constants.URL_BASE+userId)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_GET_USER_INFO,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}


export function saveContactUS(requestParams){

    return function(dispatch){
        axios.post(Constants.URL_CONTACT_US,requestParams)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_SAVE_CONTACT_US,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}