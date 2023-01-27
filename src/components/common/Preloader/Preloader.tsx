import React from 'react';
import s from "../../Users/usersContainer.module.css";
import preloader from "../../../assets/images/preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={preloader} alt="loader"/>
        </div>
    );
};

export default Preloader;