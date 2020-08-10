import React, { useState } from 'react'
import './Repo.css'

export default function Dropdown({options, optType, getSelection}) {
    const [val, setVal] = useState('Select an Option')
    const [disable, setdisable] = useState(false)
    
    const handleChange = (e) => {
        setVal(e.target.value)
        getSelection(e.target.value)
        setdisable(true)
    }

    return (
        <div className="form-group">
            <select value={val} onChange={handleChange} className="form-control">
            <option value="Default" defaultValue disabled={disable} >
                {optType}
            </option>
                {options.map((option, i) => {
                    return <option value={option} key={i} >{option}</option>
                })}
            </select>
        </div>
    )
}
