import './session_item.css'
import Paper from '@material-ui/core/Paper';
import React from "react";

export default function session_item(data) {
    return (
        <div>
            <Paper className="session_item_container">
                <div className="session_info">
                    <div className="header_image"/>
                    <div className="icon">
                        <img src="/public/loc_icons/amboy.png"/>
                    </div>

                    <div>1/20</div>
                    <div>Power-up racing</div>
                </div>
                <div className="players">

                </div>
            </Paper>
        </div>
    );
}