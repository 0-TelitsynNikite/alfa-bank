import './sortSelect.css'
import SortSelectItem from '../sortSelectItem/SortSelectItem.tsx'
import { OPTIONS, LIKED, ALL } from '../../consts/options-consts.ts'
import { GET_LIKED_IMAGES, CHANGE_OPTION_LIKE, CHANGE_OPTION_ALL } from '../../store/types.ts'
import { useDispatch } from 'react-redux'

export default function SortSelect(props) {
    const dispatch = useDispatch()

    const changeSortOptions = (event, callback) => {
        if (event.target.value === LIKED) {
            callback({type: GET_LIKED_IMAGES})
            callback({type: CHANGE_OPTION_LIKE})
        }
    
        if (event.target.value === ALL) {
            callback({type: CHANGE_OPTION_ALL})
        }
    }

    return (
        <select 
            className='select' 
            onChange={(event) => changeSortOptions(event, dispatch)}
            {...props}  
        >
            {OPTIONS.map(option => <SortSelectItem title={option}/>)}
        </select>
    )
}
