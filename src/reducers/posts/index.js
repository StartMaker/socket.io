import {REQUEST_RECEIVE,REQUEST_POST,REQUEST_FAIL} from "../../action/ajax";

const initState = {};

export default function (state = initState, action) {
    switch (action.type) {
        case REQUEST_RECEIVE:
        case REQUEST_POST:
        case REQUEST_FAIL:
            return {
                ...state,
                data: action.data.message,
                code: action.data.code
            };
        default:
            return state;
    }
}