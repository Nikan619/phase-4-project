import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'
import GameCard from "./GameCard.js";

function Game() {


    const [games,setGames]= useState([])
    function handleLike() {
        
    }

    useEffect(() =>{
        fetch('/games')
        .then((response) => response.json())
        .then((data)=>setGames(data));
    },[]);

const mappedGames = games.map((game) =>{
  return(  <ul><GameCard game={game}/></ul>)
})
return (
    <div>
        <h1 >Game Poll</h1>
        {/* <h2 className="date-card">Dates to Play
        <p>Vote on a Date to Play</p>
        <button onDoubleClick={handleLike}>UpVote</button>

        </h2> */}
        
        <h1 className="game-card">Games to Play
        <div>
              {mappedGames}  
        </div>
        </h1>
        

    </div>
)
}

export default Game;