import React from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
import nobody from '../../../assets/images/user.png';

type ProfileInfoPropsType = {
    profile: ProfileType
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>    {/* бэкграунд общий, а ниже закомменчено фото прилетающее из профиля с сервака*/}
                <img
                    src="https://www.worthingcourt.com/images/Blog/5_of_the_best_beaches/Dover_Beach_WCH_Blog_3.jpg"
                    alt="pic"/>
                {/*<img*/}
                {/*    src={props.profile.photos.large}*/}
                {/*    alt="pic"/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.ava}
                     src={props.profile.photos.small !== null ? props.profile.photos.small : nobody}
                     alt="pic"/>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.fullName}</p>
            </div>

        </div>
    );
};

export default ProfileInfo;