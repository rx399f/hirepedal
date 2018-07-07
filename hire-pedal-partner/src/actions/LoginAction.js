import axios from 'axios';
import Constants from '../constants/Constants.js'
import ActionTypes from '../constants/ActionTypes'


export function loginUser(requestParams){

    return function(dispatch){
        axios.post(Constants.URL_BASE,requestParams)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_LOGIN,
                payload: response.headers.location
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