import logo from './logo.svg';
import './App.css';
// import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Button from './components/Button';
import Greeting from './components/Greeting';
import { faker } from '@faker-js/faker';
import Product from './components/Product';

const generateRandomProducts = (numberOfProducts = 100) => {
  const products = [];

  for (let index = 0; index < numberOfProducts; index++) {
    const product = { id: index + 1, title: faker.lorem.paragraph(), description: faker.lorem.sentences({ min: 1, max: 15 }), image: faker.image.urlLoremFlickr({ category: 'nature', height: 720, width: 1080 }) }
    products.push(product);
    // console.log({ product });
  };
  // console.log({ products });
  return products;

}

const products = generateRandomProducts(10);

function App() {
  // const [number, setNumber] = React.useState(second)
  // const ali = useState(0);
  // console.log(ali[0], ali[1]);
  // const [a, b, c] = [1, 2, 3];
  // console.log(a, b, c);
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("useEffect");
  const [post, setPost] = useState("No post");
  const nameInputRef = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log({ nameInputRef, email });

  console.log("count, setCount");

  useEffect(() => {

    console.log("first", count, setCount);

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch((error) => { console.error(error); })


    getPosts(count);

    // return () => {
    //   // here we make our cleanups
    //   console.log("second");
    // }
  }, [count])

  const getPosts = async (postId) => {
    try {
      // fetch('https://jsonplaceholder.typicode.com/dos')
      // .then(response => response.json())
      // .then(json => console.log(json))
      // .catch((error) => { console.error(error); })
      // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      console.log({ response });
      const _post = await response.json();
      console.log({ _post });

      setPost(JSON.stringify(_post))
    } catch (error) {
      console.log({ error });
    }
  }


  // let count = 0;
  const isGreen = false;
  const age = 20;


  const onIncrementHanlder = () => {
    setCount(count + 1)
  }

  const onDecrementHanlder = () => {
    // if (count > 0) {
    //   setCount(count - 1)
    // }

    // OR 

    count > 0 && setCount(count - 1)
  }

  console.log(nameInputRef.current?.value);


  return (

    // <React.Fragment>
    <Fragment>
      <div className="App">
        {/* <Button /> */}
        <h1>{post}</h1>
        <span>{count}</span>
        <div>
          {/* <button onClick={() => { count += 1 }}>Increment </button>
          <button onClick={() => { count = count - 1 }}>Decrement </button> */}
          {/* <button onClick={() => { setCount(count + 1) }}>Increment </button>
          <button onClick={() => { setCount(count - 1) }}>Decrement </button> */}

          {/* {console.log("rerender")} */}

          <button onClick={onIncrementHanlder}>Increment </button>
          <button onClick={onDecrementHanlder}>Decrement </button>

          {/* when you want to pass argument to a function then we use this below approach  */}
          {/* <button onClick={() => onIncrementHanlder()}>Increment </button>
          <button onClick={() => onDecrementHanlder()}>Decrement </button> */}

          {/* by using the below variations of function calling can cause to many re renders  */}
          {/* <button onClick={onIncrementHanlder()}>Increment </button>
          <button onClick={onDecrementHanlder()}>Decrement </button> */}

          {/* <button onClick={setCount(count + 1)}>Increment </button>
          <button onClick={setCount(count - 1)}>Decrement </button> */}
        </div>
        {/* <Greeting name={"Ali"} age={20} />
        <Greeting name={"Haider"} age={40} />
        <Greeting name={"Jawad"} age={50} /> */}

        {/* <ul>
          {products.map((product, index) => {
            // console.log("Product: ", product);
            // console.log("Index: ", index);
            // console.log("ProductsArray: ", productsArray);
            // console.log({ product, index, productsArray });
            // return <Product product={product}/>
            return <Product {...product} />
          })}

        </ul>
 */}

        {/* {products.map((product, productsArray, index) => {
          console.log("Product: ", product);
          console.log("Index: ", index);
          console.log("ProductsArray: ", productsArray);
        })} */}


        {/* {products.map(function () { })} */}

        <h1>{title}</h1>
        <button onClick={() => { setTitle("useState") }}>Change Title </button>


      </div>
      <form >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameInputRef} onChange={() => { console.log(nameInputRef.current.value); }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' value={email} onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }
          } />
        </div>
        <div>
          <label htmlFor="name">Password:</label>
          <input type="password" id='password' />
        </div>
        {/* <button type='button' disabled={email ? false : true} onClick={() => console.log("clicked")}>Submit</button> */}
        <button type='button' disabled={!(!!email)} onClick={() => console.log("clicked")}>Submit</button>
      </form >
      {/* {age >= 20 ? <h3>Your are 18+</h3> : <h6>Your are under 18</h6>}
      <h3>{age >= 20 ? "Your are 18+" : "Your are under 18"}</h3>
      <h1>hello</h1> */}
    </Fragment>
    // <div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    //   <h1>hello</h1>
    // </div>
  );
  // return "ali" true
}

export default App;



// const products = [
//   { id: 1, title: "Product 1", description: "Description 1", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
//   { id: 2, title: "Product 2", description: "Description 2", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
//   { id: 3, title: "Product 3", description: "Description 3", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
//   { id: 4, title: "Product 4", description: "Description 4", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
//   { id: 5, title: "Product 5", description: "Description 5", image: "https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
// ];