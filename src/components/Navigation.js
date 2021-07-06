import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
        return (
        <div>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/history">Past games</NavLink>
            <NavLink to="/sessions">Sessions</NavLink>

        </div>
    );
}

export default Navigation;

