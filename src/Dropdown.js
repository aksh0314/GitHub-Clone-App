import React, { useState } from 'react'
import './Repo.css'

export default function Dropdown({options}) {

    const [val, setVal] = useState('Select an Option')
    
    const handleChange = (e) => {
        setVal(e.target.value)
    }

    return (
        <div className="form-group">
            <select value={val} onChange={handleChange} className="form-control" placeholder="Type">
                {options.map(option => {
                    return <option value={option} key={option} >{option}</option>
                })}
            </select>
        </div>
    )
}