import axios from 'axios';
import Constants from '../constants/Constants.js'
import ActionTypes from '../constants/ActionTypes'



export function registerPartner(requestParams){

    return function(dispatch){
        axios.post(Constants.URL_BASE+""+Constants.URL_REGISTER,requestParams)
        .then(response => {
            dispatch({
                type :ActionTypes.ACTION_REGISTER,
                payload: response.headers.location
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}
