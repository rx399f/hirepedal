import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'


const rootReducer = combineReducers({
    reducer_login : LoginReducer,
})


export default rootReducer;