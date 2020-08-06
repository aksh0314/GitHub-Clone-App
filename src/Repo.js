import React, { useEffect, useState } from 'react'
import RepoList from './RepoList';
import Dropdown from './Dropdown';
import './Repo.css'

const options1 = ["Type","All", "Source", "Forks", "Archived", "Mirror"]
const options2 = ["Languages", "All", "Java", "CSS", "Python", "Jupyter Notebook"]

export default function Repo() {

    const [repo, setRepo] = useState([])
    const [txt, setTxt] = useState('')
    const [Selection1, setSelection1] = useState('')
    const [Selection2, setSelection2] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/shalabhsingh/repos`)
            .then(res => res.json())
            .then(data => {
                setRepo(data)
            })
    }, [])

    const onChange = (q) => {
        setTxt(q);
    }

    return (
        <div className="repo">
            <div className="repo-filter">
                <input type="search" id="search-repo" value={txt} onChange={(e) => onChange(e.target.value)} className="repo-filter-search" placeholder="Find a repository…"/>
                <Dropdown options={options1} getSelection={(q) => setSelection1(q.toLowerCase())}/>
                <Dropdown options={options2} getSelection={(q) => setSelection2(q.toLowerCase())}/>
            </div>
            {repo.filter((data)=>{
                {/* debugger */}
                if({txt} == null && {Selection1} == null && {Selection2} == null)
                    return data
                else if(data.name.toLowerCase().includes(txt.toLowerCase())){
                    return data
                } 
                }).map(repoDetails => (
                    <RepoList key={repoDetails.id} repoDetails={repoDetails}/>
                ))
            }
        </div>
    )
}
