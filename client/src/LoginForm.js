
// import {useState} from "react"

// function LoginForm({onLogin}){

//     const [username, setUsername] = useState("");
//     const [password,setPassword]= useState("");
//     // const [errors,setErrors] = useState("");

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/login", {
//             method: "POST",
//             headers: {"Content-Type": "application/json",
//         },

//         body: JSON.stringify({username: username,password }),
//     })
//         .then((r)=> r.json())
//         .then((data)=> onLogin(data))
//     }


//    return( 
//     <>
//    <h2 className="login-title">Login Form</h2>
//     <form onSubmit={handleSubmit}>
//       <label className="enter-username">  Username: 
//       <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
//       </label>
//       <label className="enter-password">  Password: 
//       <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
//       </label>
//       <button type = "submit">Login</button>
     
//     </form>
//     </>
//    )
// }

 import React, { useState } from 'react';

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Invalid   password');
      })
      .then((data) => {
        onLogin(data)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
