import {
    LOGIN_DONE,
    LOGOUT_DONE
} from '../actions/types';

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    isLoggedIn: null,
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_DONE:
            return { ...state, ...action.payload, isLoggedIn: true, loading: false }
        case LOGOUT_DONE:
            return { ...state, isLoggedIn: false }
        default:
            return state;
    }
}