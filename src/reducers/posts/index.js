import {REQUEST_RECEIVE,REQUEST_POST,REQUEST_FAIL} from "../../action/ajax";

export default function (state = {}, action) {
    switch (action.type) {
        case REQUEST_POST:
            return {
                ...state,
                ...action.request
            };
        case REQUEST_RECEIVE:
        case REQUEST_FAIL:
            return {
                ...state,
                ...action.response
            };
        default:
            return state;
    }
}