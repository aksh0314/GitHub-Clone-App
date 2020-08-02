import React from 'react';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-image">
                <a href="https://avatars0.githubusercontent.com/u/26006330?v=4">
                    <img src="https://avatars0.githubusercontent.com/u/26006330?v=4" alt=""/>
                </a>
            </div>
            <div className="sidebar-user-details">
                <h1 className="sidebar-user-details-names">
                    <span className="sidebar-user-details-fullname">Brad Traversy</span>
                    <span className="sidebar-user-details-userId">bradtraversy</span>
                </h1>
            </div>
            <div className="sidebar-user-profile-bio">
                <div>
                Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.
                </div>
            </div>
            <div className="sidebar-user-more-details">
                <div className="sidebar-edit-profile">
                    <button className="sidebar-edit-profile-button"><span>Edit profile</span></button>
                    <div className="sidebar-followers">
                        <a>
                            <span>Icon</span>
                            <span>1</span>
                            <span>followers</span>
                        </a>.
                        <a>
                            <span>3</span>
                            <span>following</span>
                        </a>.
                        <a>
                            <span>Icon</span>
                            <span>1</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
