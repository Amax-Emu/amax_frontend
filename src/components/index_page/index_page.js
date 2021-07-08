import "./index_page.css"
import React from "react";
import sessions_item from "../sessions/sessions_item/sessions_item";




export default function Index_App(){
    return (
        <div className="main_page_container">
            <div className="main_index_area">
                <div className="intro_text_container">
                    <div>
                    Just press that button. It's worth it. Trust me.
                    </div>
                    <div className="intro_buttons_container">
                        <div className="intro_button">A BUTTON</div>
                    </div>
                </div>
            </div>
            <div className="secondary_index_area"></div>
            <div className="sessions_index_area">
                {sessions_item('1')}
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