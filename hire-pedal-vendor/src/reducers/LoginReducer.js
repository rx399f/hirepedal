import ActionTypes from '../constants/ActionTypes'

const INITIAL_STATE = {
    result: {
        loginUser:undefined,
        logoutUser:undefined,
        registerUser:undefined,
        saveContact:undefined
    }
}

export default function (state = INITIAL_STATE, action) {
    var nextState = state;
    switch (action.type) {
        
        case ActionTypes.ACTION_LOGIN:
            
            nextState.result.loginUser = action.payload;
            return { ...state, result: nextState.result }

        case ActionTypes.ACTION_LOGOUT:
            nextState.result.logoutUser = action.payload;
            return { ...state, result: nextState.result }

        case ActionTypes.ACTION_REGISTER:
            nextState.result.registerUser = action.payload;
            return { ...state, result: nextState.result }
        
        case ActionTypes.ACTION_SAVE_CONTACT_US:
            nextState.result.saveContact = action.payload;
            return {...state, result : nextState.result}

        default:
            return state
    }

    return state;
}