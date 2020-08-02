import React from 'react'
import './Profile.css'
import {RepoIcon, RepoForkedIcon, StarIcon} from '@primer/octicons-react';

const langColor = {
    "Python" : "#3572A5",
    "Jupyter Notebook" : "#DA5B0B",
    "CSS" : "#563d7c",
    "Java" : "#b07219"
}

export default function ProfileBox({repo}) {

    return (
        <div className="profile-box">
            <div className="profile-box-content">
                <div className="profile-box-title"><RepoIcon size={16} />  <a href={repo.html_url}>{repo.name}</a></div>
                <div className="profile-box-desc">{repo.description}</div>
                <div className="profile-box-lower">
                    <p className="profile-lang-color" style={{"backgroundColor": langColor[`${repo.language}`]}}></p>
                    <span>{repo.language}</span>
                    {repo.stargazers_count > 0 ? <a href="#"><StarIcon /><span> {repo.stargazers_count}</span></a> : ''}
                    {repo.forks_count > 0 ? <a href="#"><RepoForkedIcon /><span> {repo.forks_count}</span></a> : ''}
                </div>
            </div>
        </div>
    )
}
