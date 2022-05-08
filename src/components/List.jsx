import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

export default function List() {
    const selector = useSelector(state => state.images)
    
    return (
        <ul className="list">
            {selector.map(({image, name}) => <ListItem image={image} name={name}/>)}
        </ul>
    )
}
