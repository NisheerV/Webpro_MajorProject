import React from 'react'
import './Phone.css'

const Phone = ({number,type}) => {
    return (
        <div className='phone'>
            <p>{type}:{number}</p>
        </div>
    )
}

export default Phone
