import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import {RepoIcon, RepoForkedIcon, StarIcon} from '@primer/octicons-react';

export default function ProfileBox({repo}) {

    return (
        <div className="profile-box">
            <div className="profile-box-content">
                <div className="profile-box-title"><RepoIcon size={16} />  <a href={repo.html_url}>{repo.name}</a></div>
                <div className="profile-box-desc">{repo.description}</div>
                <div className="profile-box-lower">
                    <p className="profile-lang-color" style={{"backgroundColor": langColor[`${repo.language}`]}}></p>
                    <span>{repo.language}</span>
                    {repo.stargazers_count > 0 ? <Link to="/"><StarIcon /><span> {repo.stargazers_count}</span></Link> : ''}
                    {repo.forks_count > 0 ? <Link to="/"><RepoForkedIcon /><span> {repo.forks_count}</span></Link> : ''}
                </div>
            </div>
        </div>
    )
}

const langColor = {
    "Python" : "#3572A5",
    "Jupyter Notebook" : "#DA5B0B",
    "CSS" : "#563d7c",
    "Java" : "#b07219"
}