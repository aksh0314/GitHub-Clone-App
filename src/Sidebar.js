import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {KebabHorizontalIcon, PeopleIcon, StarIcon, OrganizationIcon, LocationIcon, MailIcon, LinkIcon} from '@primer/octicons-react';

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
                    <div className="sidebar-follow-button">
                        <button className="sidebar-edit-profile-button"><span>Follow</span></button>
                        <KebabHorizontalIcon size={16} />
                    </div>
                    <div className="sidebar-followers-details">
                        <a href={userDetails.followers_url}>
                            <span><PeopleIcon size={16} /> </span>
                            <span className="txt-gray"> {userDetails.followers} </span>
                            <span> followers · </span>
                        </a>
                        <a href={userDetails.following_url}>
                            <span className="txt-gray"> {userDetails.following} </span>
                            <span> following · </span>
                        </a>
                        <a href={userDetails.following_url}>
                            <span className="txt-gray"> <StarIcon size={16} /> </span>
                            <span> {userDetails.following} </span>
                        </a>
                    </div>
                    <div className="sidebar-profile-details">
                        <ul className="sidebar-profile-ul">
                            <li className="sidebar-profile-li">
                                <OrganizationIcon size={16} />
                                <span>{userDetails.company}</span>
                            </li>
                            <li className="sidebar-profile-li">
                                <LocationIcon size={16} />
                                <span>{userDetails.location}</span>
                            </li>
                            <li className="sidebar-profile-li">
                                <MailIcon size={16} />
                                <span><a href="mailto:shalabhsingh95@gmail.com"></a>shalabhsingh95@gmail.com</span>
                            </li>
                            <li className="sidebar-profile-li">
                                <LinkIcon size={16} />
                                <span><a href="{userDetails.blog}"></a>{userDetails.blog}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
