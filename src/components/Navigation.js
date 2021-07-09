import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
        return (
        <div>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/history">Past games</NavLink>
            <NavLink to="/index_new">Index page</NavLink>
            <NavLink to="/server_status">server_status</NavLink>


        </div>
    );
}

export default Navigation;

