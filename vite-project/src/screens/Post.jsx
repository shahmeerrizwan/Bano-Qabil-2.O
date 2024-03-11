import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Post = () => {
    // let params = useParams();
    // console.log(params, "params");
    let { postId } = useParams();
    let location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(location);
    console.log(searchParams.get("name"), searchParams.get("age"));

    searchParams.get('code')
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const getPost = async () => {
        try {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            // console.log(data);
            setPost(data)
        } catch (error) {
            console.log({ error });
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getPost()
    }, [postId])

    console.log({ isLoading, error, post });
    return (
        <div>Post</div>
    )
}

export default Post