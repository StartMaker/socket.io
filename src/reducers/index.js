import {combineReducers} from "redux";

import user from './user';
import posts from './posts'
import folders from './folders';

export default combineReducers({
    user,
    posts,
    folders
});