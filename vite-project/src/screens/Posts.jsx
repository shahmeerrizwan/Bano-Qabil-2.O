import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner, Alert, Card, Button } from 'react-bootstrap';
import PostsComponent from "../components/Posts"
import useFetch from '../hooks/useFetch';

const html = <h1>Hello world</h1>;
const Posts = () => {
    const { isLoading: postsIsLoading, error: postsError, data: postsData } = useFetch("https://jsonplaceholder.typicode.com/posts")
    const { isLoading, error, data } = useFetch("https://jsonplaceholder.typicode.com/todos")


    // const [posts, setPosts] = useState([]);
    // const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    // const getPosts = async () => {
    //     try {
    //         const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    //         // console.log(data);
    //         setPosts(data)
    //     } catch (error) {
    //         console.log({ error });
    //         setError(error.message)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     getPosts()

    //     // return () => {
    //     //     alert("hello")
    //     // }
    // }, [])

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    } if (error) {
        return <Alert variant={"danger"}>
            {error}
        </Alert>
    } if ((data || []).length) {
        // return <PostsComponent age={{ age: 40 }} posts={data} name="hasnain" />
        return <PostsComponent html={html} age={"34"} posts={data} name="hasnain" />
    }

    // console.log({ isLoading, error, posts });
    // return (
    //     <div>{html}</div>
    // )
}

export default Posts