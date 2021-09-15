import React, { Component } from 'react';
import "./index_page.css"
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SessionsItem from "../sessions/sessions_item/sessions_item";
import ServerStatus from "../server_status_item/server_status_item";



const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
})(Button);

export default function login_test(){
    return (
                <div className="intro_text_container">
                    <div>
                        Just press that button. It's worth it. Trust me.
                    </div>
                    <div className="intro_buttons_container">
                        <StyledButton href="http://127.0.0.1:8000/auth/login">Login</StyledButton>
                    </div>
                </div>

    )
}