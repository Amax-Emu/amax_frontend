import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {AuthContext} from "../../App";
import qs from "qs";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

class ActivateAccount extends Component{
    someFunction(){
        let token1 = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).discord_token
        localStorage.setItem("token",token1)
        }


    render() {
        this.someFunction()
        return (
            <div>{localStorage.getItem("token")}</div>
        );
    }

}

export default withRouter(ActivateAccount);