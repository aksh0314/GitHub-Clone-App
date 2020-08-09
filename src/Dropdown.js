import React, { useState } from 'react'
import './Repo.css'

export default function Dropdown({options, optType, getSelection}) {
    const [val, setVal] = useState('Select an Option')
    
    const handleChange = (e) => {
        setVal(e.target.value)
        getSelection(e.target.value)
    }

    return (
        <div className="form-group">
            <select value={val} onChange={handleChange} className="form-control">
            <option value="" selected> 
                {optType}
            </option>
                {options.map((option, i) => {
                    {/* debugger */}
                    return <option value={option} key={i} >{option}</option>
                })}
            </select>
        </div>
    )
}
