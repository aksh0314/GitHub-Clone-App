import React from 'react';
import './Repo.css';
import {RepoForkedIcon, LawIcon, StarIcon} from '@primer/octicons-react';
import { Link } from 'react-router-dom';

export default function RepoList({repoDetails}) {

    const date = new Date(repoDetails.updated_at);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const nDate = date.toLocaleDateString(undefined, options);

    return (
        <div className="repo-details">
            <div className="repo-box-title"><Link to={repoDetails.html_url}>{repoDetails.name}</Link></div>
                {repoDetails.fork ? <div className="repo-box-forked">Forked from <Link to="https://github.com/shalabhsingh/shalabhsingh.github.io">barryclark/jekyll-now</Link></div> : ''}
                <div className="repo-box-desc">{repoDetails.description}</div>
                <div className="repo-box-lower">
                    <p className="repo-lang-color" style={{"backgroundColor": langColor[`${repoDetails.language}`]}}></p>
                    <span>{repoDetails.language}</span>
                    {repoDetails.stargazers_count > 0 ? <Link to="#"><StarIcon /><span> {repoDetails.stargazers_count}</span></Link> : ''}
                    {repoDetails.forks_count > 0 ? <Link to="#"><RepoForkedIcon /><span> {repoDetails.forks_count}</span></Link> : ''}
                    <Link to="#"><LawIcon size={16} /><span> MIT License </span></Link>
                    <Link to="#"><span> Updated on {nDate} </span></Link>
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