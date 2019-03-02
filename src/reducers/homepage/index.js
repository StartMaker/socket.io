import {FolderEvent} from "../../action/event";

export default function (state = {}, action) {
    switch (action.todo) {
        case FolderEvent.UPLOAD:
            return {};
        case FolderEvent.HOME:
            return {};
        default:
            return {};
    }
}