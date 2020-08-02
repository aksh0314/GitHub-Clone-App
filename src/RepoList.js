import React from 'react';
import './Repo.css';
import {RepoForkedIcon, LawIcon, StarIcon} from '@primer/octicons-react';

export default function RepoList({repoDetails}) {

    const date = new Date(repoDetails.updated_at);
    const nDate = date.toString().slice(4, 15);

    return (
        <div className="repo-details">
                <div className="repo-box-title"><a href={repoDetails.html_url}>{repoDetails.name}</a></div>
                <div className="repo-box-forked">Forked from <a href="https://github.com/shalabhsingh/shalabhsingh.github.io">barryclark/jekyll-now</a></div>
                <div className="repo-box-desc">{repoDetails.description}</div>
                <div className="repo-box-lower">
                    <p className="repo-lang-color" style={{"backgroundColor": langColor[`${repoDetails.language}`]}}></p>
                    <span>{repoDetails.language}</span>
                    {repoDetails.stargazers_count > 0 ? <a href="#"><StarIcon /><span> {repoDetails.stargazers_count}</span></a> : ''}
                    {repoDetails.forks_count > 0 ? <a href="#"><RepoForkedIcon /><span> {repoDetails.forks_count}</span></a> : ''}
                    <a href="#"><LawIcon size={16} /><span> MIT License </span></a>
                    <a href="#"><span> Updated on {nDate} </span></a>
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