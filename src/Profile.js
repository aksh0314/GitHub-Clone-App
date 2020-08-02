import React, { useEffect, useState } from 'react';
import './Profile.css'
import ProfileBox from './ProfileBox'

const BASE_URL = "https://api.github.com/users/shalabhsingh/repos"

export default function Profile() {

    const [repo, setrepo] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
            .then (res => res.json())
            .then (data => {
                setrepo(data)
            })
    }, [])

    return (
        <div className="profile">
            <p>Pinned</p>
            <div className="profile-container">
                {repo.map((repo) => (
                    <ProfileBox key={repo.id} repo={repo}/>
                ))}
            </div>
        </div>
    )
}
