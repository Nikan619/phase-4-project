import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'

function Game() {

    function handleLike() {
        
    }



return (
    <div>
        <h1 >Game Poll</h1>
        <h2 className="date-card">Dates to Play
        <h3>Vote on a Date to Play</h3>
        <button onDoubleClick={handleLike}>UpVote</button>

        </h2>
        
        <h2 className="game-card">Games to Play
        <h3>Vote on a Game to Play
        <button onDoubleClick={handleLike}>UpVote</button>    
        </h3>
        </h2>
        

    </div>
)
}

export default Game;