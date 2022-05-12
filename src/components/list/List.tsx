import './list.css'
import { useSelector } from 'react-redux'
import ListItem from '../listItem/ListItem.tsx'



export default function List(): JSX.Element {
    const selector = useSelector(state => state)
    
    return (
        <ul className="list">
            {selector.allSort
                ? selector.mainListImages.map(({id, image, name, liked}) => <ListItem key={id} id={id} image={image} name={name} liked={liked}/>)
                : selector.likedListImages.map(({id, image, name, liked}) => <ListItem key={id} id={id} image={image} name={name} liked={liked}/>)
            }
        </ul>
    )
}
