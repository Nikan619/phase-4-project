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
 const [ratings,setRatings] =useState([])


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
    
     <div className="App">
      <Switch>
        <Route exact path="/" >
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    
      <Game currentUser={currentUser} setCurrentUser={setCurrentUser}  ratings={ratings} setRatings={setRatings}/>
      </Route>
        
       <Route path ="/RatedGames">    
       <NavBar />
        <RatedGames currentUser={currentUser}/>
      </Route>
  
        </Switch>
      </div>
       

  );
}

export default App;