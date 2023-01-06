// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Game from './Game.js';
import NavBar from './NavBar';
import Login from './Login';
import Loggedin from "./Loggedin";
import Test from './Test.js';

function App() {
 const [currentUser,setCurrentUser]=useState("");


 useEffect(()=> { 
  fetch("/me").then((r)=> {
    if(r.ok){
      r.json().then((user)=>setCurrentUser(user));
     console.log(currentUser);
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
      <h1>Welcome {currentUser.username}</h1>
      <main>
        <Switch>
        <Route  path="/datapage">
        

          </Route>
  
        </Switch>
        </main>
        <Game></Game>
       </> 
       
   
    
  );
}

export default App;