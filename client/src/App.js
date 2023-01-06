// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'

import NavBar from './NavBar';
import Login from './Login';
import Loggedin from "./Loggedin";
import Test from './Test.js';
import Game from './Game.js';
import RatedGames from './RatedGames.js';


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
     <div className="App">
      <Switch>
        
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <h1>Welcome {currentUser.username}</h1>
      <Game currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      
      
    
        <Switch>
        <Route  exact path="/RatedGames">
        <RatedGames/>

          </Route>
  
        </Switch>
        </main>
       </> 
       
   
    
  );
}

export default App;