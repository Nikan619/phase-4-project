// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Create from './Create';

function App() {
 const [user,setUser]=("");
//  const [api,setApi]=("")

 const onLogin = (user) => {
  setUser(user);
 }


//  useEffect(() =>
//  {
//   fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=36a6b9db-f23f-4fc7-9b67-741ec4a282f5").then((r)=>r.json()).then((data)=> setApi(data))
//   console.log(api);
//  });


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route  exact path="/">
        <h2 className="login-title">Login Form</h2>
        <form>
          <label className="enter-username">  Username: 
          <input type="text"></input>
          </label>
          <label className="enter-password">  Password: 
          <input type="text"></input>
          </label>
          <button><Link className="login-button" to="/testing">Login</Link></button>
        </form>
        <button><Link className="create-account" to="/create">Create Account</Link></button>
      
          </Route>
          <Route path="/create">
            <Create onLogin={onLogin}/>
          </Route>
        </Switch>
       </div> 
       
    </BrowserRouter>
    
  );
}

export default App;