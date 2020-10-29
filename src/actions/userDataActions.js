
import {
    LOGIN,
    LOGIN_DONE,
    LOGOUT_DONE
} from './types';

export function loginAction(credentials) {
    return { type: LOGIN, payload: credentials };
}

export function loginDoneAction(userInfo) {
    return { type: LOGIN_DONE, payload: userInfo };
}

export function logoutDoneAction() {
    return { type: LOGOUT_DONE };
}
