import React, { useState } from 'react'
import './Repo.css'

export default function Dropdown({options, getSelection}) {
    const [val, setVal] = useState('Select an Option')
    
    const handleChange = (e) => {
        setVal(e.target.value)
        getSelection(e.target.value)
    }

    return (
        <div className="form-group">
            <select value={val} onChange={handleChange} className="form-control" placeholder="Type">
                {options.map((option, i) => {
                    debugger
                    console.log(option)
                    return <option value={option} key={i} >{option}</option>
                })}
            </select>
        </div>
    )
}
