import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";
import { groupReducer } from "./groupReducer";
import { uiReducer } from "./uiReducers";
import { usersReducer } from "./usersReducer";


export default combineReducers({
    users: usersReducer,
    ui: uiReducer,
    groups: groupReducer,
    chats: chatReducer
})