// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, { Suspense, createContext, lazy, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Root from './screens/Root';
import Dashboard from './screens/Dashboard';
const LazyDashboard = lazy(() => import('./screens/Dashboard'));
import PageNotFound from './screens/PageNOtFound';
import Login from "./screens/Login";
const LazyLogin = lazy(() => import('./screens/Login'));
import Contact from "./screens/Contact";


import Posts from "./screens/Posts";
const LazyPosts = lazy(() => import('./screens/Posts'));
import Post from "./screens/Post";
import { UserContext } from "./context";
import { ErrorBoundary } from "./components/ErrorBoundry";

function App() {
  const [user, setUser] = useState("Jesse Hall");
  const [age, setAge] = useState(24);


  return (
    <>
      <Root />
      {/* <h1 className="bg-red-600">Hello world</h1> */}
      {/* <ErrorBoundary>
        <UserContext.Provider value={{ user: user, age: age, setUser }}>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/login' element={<Suspense fallback={<div style={{ backgroundColor: "yellow", width: "100vw", height: "100vh" }}>Loading...</div>}><LazyLogin /></Suspense>} />
            <Route path='/dashboard' element={<Suspense fallback={<div style={{ backgroundColor: "red", width: "100vw", height: "100vh" }}>Loading...</div>}><LazyDashboard /></Suspense>} />
            <Route path='/contact' element={<Suspense fallback={<div style={{ backgroundColor: "green", width: "100vw", height: "100vh" }}>Loading...</div>}><LazyPosts /></Suspense>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/:posts/postId' element={<Post />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </UserContext.Provider>
      </ErrorBoundary> */}
    </>


  )
}

export default App






