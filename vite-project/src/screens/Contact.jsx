import React, { useRef } from 'react'
import Child from '../components/Child'

const Contact = () => {

  const inputRef = useRef("jkhhjk")
  const onChangeInputBackground = () => {
    inputRef.current.style.backgroundColor = "red"
    inputRef.current.focus()
  }
  console.log(inputRef);
  return (<>
    <div>Contact</div>
    {/* <input type="text" /> */}
    <button onClick={onChangeInputBackground}>Change</button>
    <Child ref={inputRef} />

    {/* <input type="text" ref={inputRef} /> */}

  </>

  )
}

export default Contact