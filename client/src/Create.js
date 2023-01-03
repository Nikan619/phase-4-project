import React,{ useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function Create ({ onLogin }) {
const [username,setUsername] = useState("");
const [password,setPassword]=useState("");
// console.log("hello from create");

function handleSubmit(e) {
  e.preventDefault();
  fetch("/signup",{
    method: "POST",
    headers: {"Content-Type": "application/json",
  },
  body: JSON.stringify({username,password}),
})
.then((r)=> r.json())
.then((user)=> onLogin(user))
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
    <button type="submit">Create Account</button>
  </form>
  
)
    
}

export default Create;