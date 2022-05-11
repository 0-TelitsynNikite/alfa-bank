import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import getApiImages from './services/get-api-images';
import List from './components/list/List.tsx';
import SortSelect from './components/sortSelect/SortSelect.tsx';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApiImages())
  }, [])

  return (
    <div className='main'>
      <SortSelect/>
      <List/>
    </div>
  );
}

export default App;