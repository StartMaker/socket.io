import EVENTS from "../../action/event";

const initState = {
    character: null,
    login: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case EVENTS.LOGIN:
            return {
                ...state
            };
        case EVENTS.REGISTER:
            return;
        default:
            return state;
    }
}