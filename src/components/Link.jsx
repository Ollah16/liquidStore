import React from 'react'
import { Link } from 'react-router-dom'

const UseLink = ({ link, title, className, icon }) => {
    return (
        <Link className={className} to={link}><span>{title}</span>{icon && <span>{icon}</span>}</Link>
    )
}

export default UseLink
