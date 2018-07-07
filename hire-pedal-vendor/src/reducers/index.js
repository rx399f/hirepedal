import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import InventoryReducer from './InventoryReducer'


const rootReducer = combineReducers({
    reducer_login : LoginReducer,
    reducer_inventory : InventoryReducer
})


export default rootReducer;