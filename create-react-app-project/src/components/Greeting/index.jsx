import React from 'react'
import "./style.css";

// const Greeting = (props) => {
//     const { name, age } = props
const Greeting = ({ name, age }) => {
    // console.log({ props: props });
    // OR 
    // console.log("Props: ", props);
    return (
        <>
            {/* <h1>Hey {props.name}, Your age is {props.age}</h1> */}
            <h1>Hey {name}, Your age is {age}</h1>
        </>

    )
}

export default Greeting