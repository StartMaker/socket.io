import {FolderEvent} from "../event";

export const initHomePage = () => {
    return {
        type: FolderEvent.HOME
    };
};

export const initUploadPage = () => {
    return {
        type: FolderEvent.UPLOAD
    };
};