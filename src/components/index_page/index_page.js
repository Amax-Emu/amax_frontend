import "./index_page.css"
import React from "react";
import sessions_item from "../sessions/sessions_item/sessions_item";
import Button from '@material-ui/core/Button';
import ServerStatus from "../server_status_item/server_status_item"
import { withStyles } from '@material-ui/core/styles';

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


export default function Index_App(){
    return (
        <div className="main_page_container">
            <div className="main_index_area">
                <div className="intro_text_container">
                    <div>
                    Just press that button. It's worth it. Trust me.
                    </div>
                    <div className="intro_buttons_container">
                        <StyledButton>Primary</StyledButton>
                    </div>
                </div>
            </div>
            <div className="secondary_index_area">
                <ServerStatus />
            </div>
            <div className="sessions_index_area">
                <sessions_item/>
            </div>
            <div className="leaderboard_index_area"></div>
            <div className="discord_index_area">
                <iframe src="https://discord.com/widget?id=840455397818630175&theme=dark" width="350" height="500"
                        allowTransparency="true" frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    )
}