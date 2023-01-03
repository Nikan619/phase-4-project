import React,{ useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import App from "./App.js"

function Create ({ onLogin }) {
const [username,setUsername] = useState("");
const [password,setPassword]=useState("");
// console.log("hello from create");

function handleSubmit(e) {
  e.preventDefault();
  const user={
    username,
    password
  }
  fetch("/signup",{

    method: "POST",
    headers: {"Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
.then((r)=> r.json())
.then((data)=> onLogin(data))
}

return (

  <form onSubmit={handleSubmit}>
    <input
     type="text"
    value={username}
     onChange={(e) => setUsername(e.target.value)}
  />
  <input
     type="password"
    value={password}
     onChange={(e) => setPassword(e.target.value)}
  />
   <button type="submit" >sign up</button>
  </form>

   
  
)
    
}

export default Create;