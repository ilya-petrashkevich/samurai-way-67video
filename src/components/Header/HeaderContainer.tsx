import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getAuthUserData} from "../redux/auth-reducer";
import {compose} from "redux";

type MapStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}
                       userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}
        />;
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}
export default compose<FC>(connect(mapStateToProps, {getAuthUserData}))(HeaderContainer)