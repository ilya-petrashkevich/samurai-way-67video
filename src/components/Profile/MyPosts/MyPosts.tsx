import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, newPostTextType, PostsType} from "../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: newPostTextType
    // dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text: string) => void
    // addPost: () => void
    addPost: (postMessage/*?*/: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElementRef = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        if (props.addPost) {
            props.addPost(props.newPostText);
        }

        // if (newPostElementRef.current) {
        //     // let text = newPostElementRef.current.value;
        //
        //     // props.addPost(props.newPostText);
        //     props.dispatch(addPostAC(props.newPostText))
        //
        //     // newPostElementRef.current.value = '';
        //     // props.updateNewPostText('');
        // }
    }

    const onPostChange = () => {
        if (newPostElementRef.current) {
            let text = newPostElementRef.current.value;
            props.updateNewPostText(text);
        }


        // if (newPostElementRef.current) {
        //     let text = newPostElementRef.current.value;
        //     props.updateNewPostText(text);
        //     props.dispatch(updateNewPostTextAC(text))
        // }
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ref={newPostElementRef}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;