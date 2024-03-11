import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        getData(url);
    }, [url])

    const getData = async (url) => {
        setIsLoading(true)
        try {
            const { data } = await axios(url);
            setData(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { isLoading, error, data }
}

export default useFetch