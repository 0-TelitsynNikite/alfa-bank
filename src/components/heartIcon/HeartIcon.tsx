import './heartIcon.css'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function HeartIcon(props) {

    return (
        <FavoriteIcon 
            className='heart'
            {...props}
        />
    )
}
