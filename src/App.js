import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import getApiImages from './store/services/get-api-images';
import List from './components/List';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApiImages())
  }, []) 

  return (
    <div>
      <List/>
    </div>
  );
}

export default App;