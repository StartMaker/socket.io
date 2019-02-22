import {FolderEvent} from "../../action/event";

export default function (state = {}, action) {
    switch (action.type) {
        case FolderEvent.UPLOAD:
            return {};
        case FolderEvent.HOME:
            return {};
        default:
            return {};
    }
}