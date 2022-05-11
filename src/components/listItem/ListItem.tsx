import './list-item.css'
import HeartIcon from '../heartIcon/HeartIcon.tsx';
import TrashIcon from '../trashIcon/TrashIcon.tsx';
import { useDispatch } from 'react-redux'
import { removeImage, likeImage } from '../../store/actions.ts';
import { useState } from 'react';

type TProps = {
    image: string,
    name: string,
    id: number,
    liked: boolean
}


export default function ListItem({ image, name, id, liked }: TProps) {
    const dispatch = useDispatch()
    const [color, setColor] = useState('lightskyblue')

    const changeLike = () => {
        if (liked) {
            setColor('lightskyblue')
        } else {
            setColor('red')
        }

        dispatch(likeImage(id))
    }

    return (
        <li className='list__item'>
            <img src={image} alt={name} />
            <div className="icon-wrapper">
                <HeartIcon onClick={(e) => changeLike()} style={{width: '40px', height: '40px', color: color}}/>
                <TrashIcon onClick={() => dispatch(removeImage(id))} style={{width: '40px', height: '40px'}}/>
            </div>
        </li>
    )
}

