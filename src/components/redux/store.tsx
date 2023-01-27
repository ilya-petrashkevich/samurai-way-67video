import {addPostAC, updateNewPostTextAC, setUserProfile} from "./profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reduser";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess,
    UserType
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type newMessageBodyType = string
// let newMessageBody: newMessageBodyType = "";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type newPostTextType = string //это под снос
// let newPostText: newPostTextType = 'it-kamasutra.com'; //это под снос

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string
        vk: string
        twitter: string
        instagram: string
        youtube: null | string
        github: string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: newPostTextType
    profile: ProfileType
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType

    usersPage: UsersPageType
    sidebar: {}
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>;
