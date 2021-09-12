import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './server_status_item.css';

export default function ServerStatus() {
    const [totalReactPackages,setTotalReactPackages] = useState({
        server_status: null,
        total_players: null,
        total_sessions: null
    });

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://api.amax-emu.com/server_status')
            .then(response => setTotalReactPackages(response.data.data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages)
    return (
        <div>
            <div className="server_header">
            <a className="server_status_header">Server status</a>
            <a className="server_status">
                {totalReactPackages.server_status
                ? "Online"
                : "Offline"
            }
            </a>


                    {totalReactPackages.server_status
                        ? <div className="server_header_lamp"/>
                        : <div className="server_header_lamp_offline"/>
                    }

        </div>
        <div className="card_container">
            <div className="card_item">
                <div className="card_item_name">Players online: </div>
                <div className="card_item_value">
                {totalReactPackages.server_status
                    ? totalReactPackages.total_players
                    : "Nan"
                }
                </div>
            </div><br/>
            <div className="card_item">
                <div className="card_item_name">Sessions: </div>
                <div className="card_item_value">
                    {totalReactPackages.server_status
                        ? totalReactPackages.total_sessions
                        : "Nan"
                    }
                </div>
            </div>


        </div>
        </div>
    );
}