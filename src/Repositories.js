import React from 'react';
import Sidebar from './Sidebar';
import Repo from './Repo';

export default function Repositories() {
    return (
        <div className="overview">
            <Sidebar />
            <Repo />
        </div>
    )
}
