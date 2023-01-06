import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'
import GameCard from "./GameCard.js";
import NewGame from './NewGame.js';

function Game() {


    const [games,setGames]= useState([])
    function handleLike() {
        
    }

    useEffect(() =>{
        fetch('/games')
        .then((response) => response.json())
        .then((data)=>setGames(data));
    },[]);

const mappedGames =()=>{ 
    
    return games.map((game) =>{
  return(  <ul><GameCard setGames={setGames} game={game}/></ul>)
})}
return (
    <div>
        <h1 style={{ textAlign: 'center'}}>Game Poll</h1>
        <NewGame games={games} setGames={setGames}/>
        
        <h2 style={{ textAlign: 'center' }}>Available Games:</h2>
        <div>
              {mappedGames()}  
        </div>
        

    </div>
)
}

export default Game;