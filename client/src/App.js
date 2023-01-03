// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Create from './Create';
import NavBar from './NavBar';

function App() {
 const [currentUser,setCurrentUser]=useState("");


 useEffect(()=> { 
  fetch("/me").then((r)=> {
    if(r.ok){
      r.json().then((user)=>setCurrentUser(user));
    }
  });
 },[]);

 if(!currentUser) {
  return <Create onLogin ={setCurrentUser}/>}
  else{
  return <Login/>
  }



//  useEffect(() =>
//  {
//   fetch('/auth')
//   .then(res=>{
//     if(res.ok){
//       res.json().then(user=>setCurrentUser(user))
//   }
//  })
//  },[])


  return (
    

      <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main>
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
        
      
          </Route>
          <Route path="/create">
            <Create onLogin={setCurrentUser} />
          </Route>
        </Switch>
        </main>
       </> 
       
   
    
  );
}

export default App;