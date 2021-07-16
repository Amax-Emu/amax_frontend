import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ServerStatus() {
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

        <div className="card_container">
            <h5 className="">Server status</h5>
            <div className="">
                Server status: {totalReactPackages.server_status
            ? "Online"
            : "Offline"
            }<br/>
                Players online: {totalReactPackages.total_players}<br/>
                Sessions: {totalReactPackages.total_sessions}
            </div>
        </div>
    );
}