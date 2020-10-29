import {
    LOGIN
} from "../actions/types";

import Cookies from 'js-cookie';
import { loginDoneAction } from '../actions/userDataActions';
import { apply, call, put, takeEvery } from "redux-saga/effects";
import { httpRequest } from '../functions/apiRequests';
import { API_URL, AUTH_COOKIE } from '../config/keys';

export function* loginHandler(action) {
    try {
        let loginResponse = yield call(httpRequest, API_URL, 'post', { ...action.payload });
        yield call(Cookies.set, AUTH_COOKIE, loginResponse.data.token, { expires: 7 });
        yield put(loginDoneAction(loginResponse.data.user));
    } catch (err) {
        // dispatch error to reducer here to updtae error state in app
        console.log(err, 'err')
    }
}

export function* watchUserDataMiddleware() {
    yield takeEvery(LOGIN, loginHandler);
}
