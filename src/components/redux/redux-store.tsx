import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reduser";
import navbarReducer from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: navbarReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
//@ts-ignore
window.store=store