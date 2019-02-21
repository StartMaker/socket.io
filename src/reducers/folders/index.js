import EVENTS from "../../action/event";

export default function (state = [], action) {
    switch (action.type) {
        case EVENTS.GO_HOME:
            return [

            ];
        default:
            return state;
    }
}