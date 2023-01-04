// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'

import NavBar from './NavBar';
import Login from './Login';
import Loggedin from "./Loggedin";

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
  return <Login onLogin ={setCurrentUser}/>}
 



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
        <Route  path="/halo">
        <Loggedin user={currentUser}/>

          </Route>
  
        </Switch>
        </main>
       </> 
       
   
    
  );
}

export default App;