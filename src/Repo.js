import React, { useEffect, useState } from 'react'
import RepoList from './RepoList';
import './Repo.css'

const BASE_URL = "https://api.github.com/users/shalabhsingh/repos"

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
        {repo.map(repoDetails => (
            <RepoList key={repoDetails.id} repoDetails={repoDetails}/>
        ))}
        </div>
    )
}
