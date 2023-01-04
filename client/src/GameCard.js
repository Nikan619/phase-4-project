
import {useState} from 'react'

function GameCard({game}) {
    const [liked,setLiked]=useState(false)
    function handleClick() {
        setLiked(!liked)
    }
    
    return (
        <>
        <p>{game.name}</p>
        <img src={game.image} alt="gamepic" ></img>
        <button onClick={handleClick}>LIKE</button>
        <p>{liked ? "liked":""} </p>
        
        </>
    )
}
export default GameCard