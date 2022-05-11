import './trashIcon.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function TrashIcon(props) {
    return (
        <DeleteIcon 
            className='icon icon__trash'
            {...props}
        />
    )
}
