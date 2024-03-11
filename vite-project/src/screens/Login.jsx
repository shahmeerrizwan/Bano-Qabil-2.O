// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login


import React from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
  // state = { user: null, error: null };
  const [state, setState] = React.useState({ user: null, })
  const { user, } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    const [username, password] = event.target;
    console.log(event, username.value, password.value, event.target[0].value, event.target[1].value);
    // try {
    // let user = await login(event.target);

    // this.setState({ user });

    setState({ ...state, user: { username: username.value, password: password.value, } })

    // } catch (error) {
    //   // this.setState({ error });

    //   setState({ ...state, error: error })
    // }
  }

  console.log({ user });

  // let { user, error } = this.state;
  return (
    <div>
      {/* {error && <p>{error.message}</p>} */}
      {user !== null && (
        <Navigate to="/dashboard" replace={true} />
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter your username" />
        <input type="password" name="password" placeholder="Enter your password" />
        <button>Submit</button>
      </form>
    </div>
  );
}