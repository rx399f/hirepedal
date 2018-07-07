import ActionTypes from '../constants/ActionTypes'

const INITIAL_STATE = {
    result: {
        inventoryList:[],
        saveInventory:{},
        categories:[]
    }
}

export default function (state = INITIAL_STATE, action) {
    var nextState = state;
    switch (action.type) {
        
        case ActionTypes.ACTION_GET_CATEGORY:
            nextState.result.categories = action.payload._embedded;
            return { ...state, result: nextState.result }

        case ActionTypes.ACTION_GET_INVENTORY_LIST:
            nextState.result.inventoryList = action.payload;
            return { ...state, result: nextState.result }

        case ActionTypes.ACTION_SAVE_INVENTORY:
            nextState.result.saveInventory = action.payload;
            return { ...state, result: nextState.result }

        default:
            return state
    }

    return state;
}