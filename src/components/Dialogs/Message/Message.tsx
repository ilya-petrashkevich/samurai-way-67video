import React from 'react';
import s from "../Dialogs.module.css";
import {MessagesType} from "../../redux/store";

type MessagePropsType = {
    message: MessagesType
}

const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export default Message;