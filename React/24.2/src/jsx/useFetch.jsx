import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunc = async ()=>{

        setLoading('loading...')
        // setData(null);
        setError(null);
        // const source = axios.CancelToken.source();
        try{
            
            const {data} = await axios.get(url);
            setState(data);
            
        }
        catch(err){
            setLoading(false)
            setError('An error occurred. Awkward..')
        }
        
    }
    fetchFunc()
  }, [url])

  return{ state , loading, error }
}
export default useFetch;