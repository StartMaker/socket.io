import {Events} from "../../action/event";

const initState = {
    character: null,
    login: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case Events.LOGIN:
            return {
                ...state
            };
        case Events.REGISTER:
            return;
        default:
            return state;
    }
}