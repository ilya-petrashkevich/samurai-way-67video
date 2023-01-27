import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/474x/10/e2/12/10e212bcdc05de6636717cf0cb7d3022.jpg" alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    props.login
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;