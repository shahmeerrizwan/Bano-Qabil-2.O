import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import Root from './screens/Root.jsx';
import Contact from './screens/Contact.jsx';
import Dashboard from './screens/Dashboard.jsx';
import AuthLayout from './screens/AuthLayout.jsx';
import Login from './screens/Login.jsx';



// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: (
// //       <div>
// //         <h1>Hello World</h1>
// //         <Link to="about">About Us</Link>
// //       </div>
// //     ),
// //   },
// //   {
// //     path: "about",
// //     element: <div>About</div>,
// //   },
// // ]);


// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={<Root />}>
// //       <Route path="contact" element={<Contact />} />
// //       <Route
// //         path="dashboard"
// //         element={<Dashboard />}
// //         // loader={({ request }) =>
// //         //   fetch("/api/dashboard.json", {
// //         //     signal: request.signal,
// //         //   })
// //         // }
// //       />
// //       <Route element={<AuthLayout />}>
// //         <Route
// //           path="login"
// //           element={<Login />}
// //           // loader={redirectIfUser}
// //         />
// //         {/* <Route path="logout" action={logoutUser} /> */}
// //       </Route>
// //     </Route>
// //   )
// // );

// // Or use plain objects
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         // loader: ({ request }) =>
//         //   fetch("/api/dashboard.json", {
//         //     signal: request.signal,
//         //   }),
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "login",
//             element: <Login />,
//             // loader: redirectIfUser,
//           },
//           // {
//           //   path: "logout",
//           //   action: logoutUser,
//           // },
//         ],
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <BrowserRouter> <App />
  </BrowserRouter>
);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
