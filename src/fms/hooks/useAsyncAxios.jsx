import { useEffect, useState } from "react";
import axios from 'axios';

function useAxiosAll(
    {
        url,
        method,
        body ={},
        headers ={},
        params= {},
        timeout =0
    }
    
    )
    {
    const [data,setData]=useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    const makeRequest = async () => {
        const config = {
            url,
            method,
            body,
            headers,
            params,
            timeout
        }

        try {
            const response = await axios(config);
            if (!(response.status === 200)){
                throw new Error(`HTTP URL Not Found Issue : ${response.status}`)
            }
            const resultData = await response.data;
            setData(resultData);
            setLoading(false);
            
        } catch (error) {
            setError(error);
            setLoading(false)
            
        }
    }

    useEffect(()=>{
        makeRequest()
    },[])

    return {data,loading,error}
}




export {useAxiosAll};