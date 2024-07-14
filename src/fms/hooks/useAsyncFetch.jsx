import { useEffect, useState } from "react";

function useAsyncFetchNetworkHook(url){
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);


    const handleAsyncFetch = async () =>{
        try {
            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`HTTP Error Url is not found . Status : ${response.status}`)
            }
            const resultData = await response.json()
            setData(resultData);
            setLoading(false);
            
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        handleAsyncFetch();
    },[])
    
    return {data,loading,error}
}

export default useAsyncFetchNetworkHook;