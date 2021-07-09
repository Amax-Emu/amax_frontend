import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetRequestHooks() {
    const [totalReactPackages,setTotalReactPackages] = useState({
        server_status: null,
        total_online: null,
        total_sessions: null
    });

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://127.0.0.1:8000/server_status')
            .then(response => setTotalReactPackages(response.data.data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages)
    return (

        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                Server status: {totalReactPackages.server_status
            ? "Online"
            : "Offline"
            }
                Server status: {totalReactPackages.total_players}
                Server status: {totalReactPackages.total_sessions}
            </div>
        </div>
    );
}