import React from 'react';
import s from "./Post.module.css";
// import {PostType} from "../../../redux/state";

export type PostPropsType = { //первоначально было PostType
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://publicdomainvectors.org/tn_img/Linux-Avatar.webp" alt="пингвин"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;