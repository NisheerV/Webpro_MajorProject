import React from 'react'
import './Location.css'

const Location = ({location}) => {
    return (
        <div className='location'>
            <p>{location.street.number}.{location.street.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.country}</p>
            <p>{location.postcode}</p>
        </div>
    )
}

export default Location
