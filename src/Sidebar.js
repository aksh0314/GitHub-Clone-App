import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {PeopleIcon, StarIcon} from '@primer/octicons-react';
// import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.github.com/users/shalabhsingh';

export default function Sidebar() {

    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                setUserDetails(data)
            })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-image">
                <a href={userDetails.avatar_url}>
                    <img src={userDetails.avatar_url} alt=""/>
                </a>
            </div>
            <div className="sidebar-user-details">
                <h1>
                    <span className="sidebar-user-details-fullname">{userDetails.name}</span>
                    <span className="sidebar-user-details-userId">{userDetails.login}</span>
                </h1>
            </div>
            <div className="sidebar-user-profile-bio">
                <div>
                    {userDetails.bio}
                </div>
            </div>
            <div className="sidebar-user-more-details">
                <div className="sidebar-edit-profile">
                    <button className="sidebar-edit-profile-button"><span>Edit profile</span></button>
                    <div className="sidebar-followers">
                        <a href={userDetails.followers_url}>
                            <span><PeopleIcon size={16} /> </span>
                            <span> {userDetails.followers} </span>
                            <span> followers · </span>
                        </a>
                        <a href={userDetails.following_url}>
                            <span> {userDetails.following} </span>
                            <span> following · </span>
                        </a>
                        <a href={userDetails.following_url}>
                            <span> <StarIcon size={16} /> </span>
                            <span> {userDetails.following} </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
