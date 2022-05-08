import React from 'react'

export default function ListItem({image, name}) {
    return (
        <li className='list__item'>
            <img src={image} alt={name} />
        </li>
    )
}
