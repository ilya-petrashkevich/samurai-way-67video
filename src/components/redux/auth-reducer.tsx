import React from "react";
import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state
    }
}
export const setAuthUserData = (userId: number,
                                email: string,
                                login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch( setAuthUserData(id, email, login) );
            }
        });
}