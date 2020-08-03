import React, { useEffect, useState } from 'react'
import RepoList from './RepoList';
import Dropdown from './Dropdown';
import './Repo.css'

const BASE_URL = "https://api.github.com/users/shalabhsingh/repos"
const options1 = ["Type", "All", "Sources", "Forks", "Archived", "Mirrors"]
const options2 = ["Languages", "All"]

export default function Repo() {

    const [repo, setRepo] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                setRepo(data)
            })
    }, [])

    return (
        <div className="repo">
            <div className="repo-filter">
                <input type="search" id="search-repo" name="search-repo" className="repo-filter-search" placeholder="Find a repository…"/>
                <Dropdown options={options1}/>
                <Dropdown options={options2}/>
            </div>
            {repo.map(repoDetails => (
                <RepoList key={repoDetails.id} repoDetails={repoDetails}/>
            ))}
        </div>
    )
}
