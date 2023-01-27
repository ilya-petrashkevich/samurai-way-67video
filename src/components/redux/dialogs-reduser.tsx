import React from 'react';
import {ActionsTypes, DialogsPageType} from "./store";

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Dimich"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Bla"},
        {id: 5, message: "Blabla"},
        {id: 6, message: "Blablabla"},
    ],
    newMessageBody: "",
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            };


        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            };

        default:
            return state
    }

    // ВНИМАНИЕ ВАЖНЫЙ КОММЕНТ К КОДУ!!!!! ниже это то что было то того как мы использовали switch case, в редюсерах видимо принято использовать switch case!!!
    // if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
    //     state.newMessageBody = action.body;
    //     // this._onChange();
    // } else if (action.type === 'SEND-MESSAGE') {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.messages.push({id: state.messages.length + 1/*6*/, message: body});
    //     // this._onChange();
    // }

    // return state
};

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

// export default dialogsReducer;