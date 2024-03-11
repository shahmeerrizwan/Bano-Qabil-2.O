import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useMemo } from 'react';
import { Header } from '../components/Header'
import Parent from '../components/Parent';
import Todos from '../components/Todos';
import axios from 'axios';
// import { expensiveCalculation } from '../utils';

// const Root = () => {
//     return (
//         <div><Header /></div>
//     )
// }

// export default Root

const Root = () => {
    const [isLoading, setIsLoading] = useState(false)
    const titleInputRef = useRef(null);
    const viewsInputRef = useRef(null);
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [isUpdatedPost, setIsUpdatedPost] = useState(false)
    const [post, setPost] = useState({ title: "", views: "" });


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, [])

    // console.log(todos);
    //  const calculation = useMemo(() => expensiveCalculation(count), [count]);
    // const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };


    // const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    // }, [todos]);

    const addTodo = useCallback(
        () => {
            setTodos((prevTodos) => [...prevTodos, "New Todo"]);
        },
        [todos],
    )

    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const onSubmit = async (event) => {
        setIsLoading(true)
        try {
            event.preventDefault();


            if (isUpdatedPost) {
                const { id, ...restPost } = post
                const { data, status } = await axios({ method: "PATCH", url: `http://localhost:3000/posts/${post.id}`, data: JSON.stringify(restPost) })
                console.log({ data, status });

                if (status === 200) {
                    setPosts(prevPosts => prevPosts.map(prevPost => prevPost.id === post.id ? post : prevPost))
                }
            } else {
                const { data, status } = await axios({ method: "POST", url: "http://localhost:3000/posts", data: JSON.stringify(post) })
                console.log({ data, status });

                if (status === 201) {
                    setPosts(prevPosts => [...prevPosts, data])
                }
            }
            // getAllPosts();
        } catch (error) {
            console.log({ error });
        } finally {
            setIsLoading(false)
        }
    }
    const updatePost = async (event) => {
        setIsLoading(true)
        try {
            event.preventDefault();
            // const post = { title: titleInputRef.current.value, views: viewsInputRef.current.value }
            // console.log({ post });
            const createdPost = await axios({ method: "PATCH", url: "http://localhost:3000/posts", data: JSON.stringify(post) })
            console.log({ createdPost });
        } catch (error) {
            console.log({ error });
        } finally {
            setIsLoading(false)
        }
    }

    const deletePost = async (postId) => {
        // console.log("delete", postId);
        setIsLoading(true)
        try {
            const { status } = await axios({ method: "DELETE", url: `http://localhost:3000/posts/${postId}` })
            // getAllPosts();

            if (status === 200) {
                const filteredPosts = posts.filter(post => post.id !== postId);
                // posts.filter(post => {
                //     return post.id !== postId
                // })
                // const filteredPosts = posts.filter(post => {

                //     console.log(post, post.id);
                //     if (post.id !== postId) {
                //         return true
                //     } else {
                //         return false
                //     }
                // })
                // console.log(filteredPosts, "filteredPosts");


                setPosts(filteredPosts)
            }

        } catch (error) {
            console.log({ error });
        } finally {
            setIsLoading(false)
        }
    }

    const getAllPosts = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios({
                method: "GET",
                url: "http://localhost:3000/posts",
            })
            setPosts(data)
        } catch (error) {
            console.log({ error });
        } finally {
            setIsLoading(false)
        }
    }

    // console.log(posts);
    console.log(post);
    return (
        <div>


            {/* <Header />
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div> */}
            {/* <Parent /> */}
            {/* <Todos todos={todos} addTodo={addTodo} /> */}
            {/* <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div> */}
            {/* <Todos /> */}
            <h1>Total Posts: {posts.length}</h1>
            {/* <form onSubmit={onSubmit}>
                <input ref={titleInputRef} value={updatedPost?.title} type="text" placeholder='Enter your title' />
                <br />
                <input ref={viewsInputRef} type="number" value={updatedPost?.views} placeholder='Enter your views' />
                <br />
                <button disabled={isLoading}>{isLoading ? "Loading..." : "Create"}</button>
            </form> */}
            <form onSubmit={onSubmit}>
                <input value={post?.title} type="text" placeholder='Enter your title' onChange={(event) => setPost({ ...post, title: event.target.value })} />
                <br />
                <input type="number" value={post?.views} placeholder='Enter your views' onChange={(event) => setPost({ ...post, views: event.target.value })} />
                <br />
                <button disabled={isLoading}>{isLoading ? "Loading..." : isUpdatedPost ? "Update" : "Create"}</button>
            </form>


            {(posts || []).map((post, index) => {
                return <ul key={post.id} style={{ listStyle: "none", padding: "1rem 0" }}>
                    <li><button onClick={() => deletePost(post.id)}>Delete</button> <button onClick={() => {
                        setPost(post);
                        setIsUpdatedPost(true)
                    }}>Update</button></li>
                    <li><strong>Index: </strong>{index + 1}</li>
                    <li><strong>ID: </strong>{post.id}</li>
                    <li><strong>Title: </strong>{post.title}</li>
                    <li><strong>Views: </strong>{post.views}</li>
                </ul>
            })}



        </div>
    );
};

export default Root

const expensiveCalculation = (num) => {
    console.log("Calculating...", num);
    for (let i = 0; i < 1000000000; i++) {
        num = num + 1;
    }
    console.log({ num });
    return num;
};
