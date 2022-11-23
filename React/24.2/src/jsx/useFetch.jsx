import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunc = async ()=>{

        setLoading('loading...')
        // setData(null);
        setError(null);
        // const source = axios.CancelToken.source();
        try{
            
            const res = await axios
            .get(url)
            setData(res.data)
            
        }
        catch(err){
            setLoading(false)
            setError('An error occurred. Awkward..')
        }
        
    }
    fetchFunc()
  }, [url])

  return{ data, loading, error }
}
export default useFetch;