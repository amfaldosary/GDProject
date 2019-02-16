import {LOGIN_USER, FETCH_PLACES , REGISTER_USER} from '../actions/types';

const initialState = {
    user : {},
    places: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    };
};