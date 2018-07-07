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

