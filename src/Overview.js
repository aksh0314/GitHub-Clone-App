import React from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import './Overview.css'

export default function Overview() {

    return (
        <div className="overview">
            <Sidebar />
            <Profile />
        </div>
    )
}
