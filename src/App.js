import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import getApiImages from './store/services/get-api-images';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApiImages())
  }, []) 

  return (
    <div>

    </div>
  );
}

export default App;