import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => setData(data));
        (async () => {
            setIsLoading(true);
            try {
                const { data } = await axios(url);
                setData(data);
            } catch (error) {
                console.log({ error });
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [url]);

    return { isLoading, error, data };
};



export default useFetch;