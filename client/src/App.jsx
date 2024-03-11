// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useEffect } from 'react'
import { Counter } from './components/Counter'
import { useDispatch } from 'react-redux'
import { fetchUsers } from './store/features/userSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './screens/Users'
import Posts from './screens/Posts'
import Products from './screens/Products'
import Post from './screens/Post'
import Layout from './components/Layout'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (

    // <div><Counter /></div>

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:postId' element={<Post />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App