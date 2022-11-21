import { useState, useEffect } from "react";


const useFetch = (url) => {
      const [data, setData] = useState(null);
      const [isPending, setIsPending] = useState(true);
      const [error, setError] = useState(null);
      console.log(url);
      useEffect(() => {
            const abortCont = new AbortController();
            setTimeout(() => {
                  fetch(url, {signal: abortCont.signal})
                  .then(res => {
                        if(!res.ok) {
                              throw Error('Could not fetch Brewery data');
                        }
                        return res.json();
                  })
                  .then(data => {
                        setData(data);
                        setIsPending(false);
                        setError(null);
                  })
                  .catch(err => {
                        if (err.name === 'AbortError'){
                              console.log('Fetch aborted');
                        }
                        else{
                              setIsPending(false);
                              setError(err.message);
                        }
                  })
            },1000);
            
            return () => abortCont.abort();
      }, []);

      return {data, isPending, error}
}

export default useFetch;