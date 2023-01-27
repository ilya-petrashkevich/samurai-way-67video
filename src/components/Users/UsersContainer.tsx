import React, {ComponentType, FC} from 'react';
import {
    followSuccess,
    unfollowSuccess,
    InitialStateType,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers, follow, unfollow
} from '../redux/users-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {compose} from 'redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: UserType[]) => void

    setCurrentPage: (pageNumber: number) => void

    // setUsersTotalCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber) // это потом наверное езаменим санкой, а пока пусть останется, это выделяет чёрным жирным текущую страницу
        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {


        return <>
            {this.props.isFetching
                ?
                <Preloader/>
                :
                null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.usersPage.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose<FC>(
    connect(mapStateToProps, /*mapDispatchToProps*/{
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer)

