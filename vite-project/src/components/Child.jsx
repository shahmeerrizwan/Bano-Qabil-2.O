import { forwardRef, useRef, useState } from "react";

const Child = (props, inputRef) => {
    console.log(props);
    // const [name, setName] = useState("");
    // props.pullData('My name is Dean Winchester & this is my brother Sammie');
    // const inputinputRef = useRef(null)
    // const onChangeInputBackground = () => {
    //     inputRef.current.style.backgroundColor = "red"
    // }
    // console.log(inputRef, inputRef.current);
    return (
        <>
            {/* <h1>Name: {name}</h1> */}
            {/* <input type="text" value={name} onChange={(e) => {
                setName(e.target.value);
                props.pullData(e.target.value);
            }} ref={props.inputRef}/> */}
            {/* <h1>I am the Child Component!</h1> */}
            <input type="text" ref={inputRef} />
            {/* <button onClick={onChangeInputBackground}>Change</button> */}
        </>
    );
}

export default forwardRef(Child) ;