import React, { useEffect, useState } from 'react'
import RepoList from './RepoList';
import Dropdown from './Dropdown';
import './Repo.css'
// import { DatabaseIcon } from '@primer/octicons-react';

const options1 = ["All", "Sources", "Forks", "Archived", "Mirror"]
const options2 = ["All", "Java", "CSS", "Python", "Jupyter Notebook"]

export default function Repo() {

    const [repo, setRepo] = useState([])
    const [txt, setTxt] = useState('')
    const [Selection1, setSelection1] = useState('')
    const [Selection2, setSelection2] = useState('')
    // console.log(Selection1)
    // console.log(Selection2)


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

    const checkVal = (data, sel1, sel2) => {
        let opt = {
            "All": "has_projects",
            "Sources": "has_issues",
            "Forks": "fork", 
            "Archived": "archived", 
            "Mirror": "mirror_url"
        }

        if ((sel1 == "" || sel1 == "All") && (sel2 == "" || sel2 == "all")) {
            return true
        } else if (sel1 != "" && data[opt[sel1]] && (sel2 == "" || sel2 == "all")) {
            return true
        } else if (sel2 != "" && data["language"].toLowerCase() == sel2 && sel1 == "") {
            return true
        } else if (sel1 != "" && sel2 != "" && data[opt[sel1]] && data["language"].toLowerCase() == sel2){
            return true
        }
        return false
    }

    return (
        <div className="repo">
            <div className="repo-filter">
                <input type="search" id="search-repo" value={txt} onChange={(e) => onChange(e.target.value)} className="repo-filter-search" placeholder="Find a repository"/>
                <Dropdown options={options1} optType={"Type"} getSelection={(q) => setSelection1(q)}/>
                <Dropdown options={options2} optType={"Languages"} getSelection={(q) => setSelection2(q.toLowerCase())}/>
            </div>
            {
                repo.filter((data)=>{
                    if({txt} == "" && {Selection1} == "" && {Selection2} == "") {
                        return data
                    } else if (({txt} == "" || data.name.toLowerCase().includes(txt.toLowerCase())) && checkVal(data, Selection1, Selection2)) {
                        return data
                    }
                }).map(repoDetails => (
                    <RepoList key={repoDetails.id} repoDetails={repoDetails}/>
                ))
            }
        </div>
    )
}