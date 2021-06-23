import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <span className = "logo">Joblist</span>
            <ul className= "menu__list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to = "/jobs-add">Add job</Link></li>
            </ul>
        </div>
    )
}
