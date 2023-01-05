
import {useState} from 'react'

function GameCard({game,setGames}) {
    const [liked,setLiked]=useState(false)
    function handleClick() {
        setLiked(!liked)
    }
    function handleDelete(id) {
    
        fetch(`/game_images/${id}`,{method: 'DELETE'})
        .then((r)=> {
            if(r.ok) {
                setGames((games)=>
                games.filter((game)=> game.id !==id))
            }
        
        })
        
    }
    
    // function handleDelete(id) {
    //     fetch(`/episodes/${id}`, {
    //       method: "DELETE",
    //     }).then((r) => {
    //       if (r.ok) {
    //         setEpisodes((episodes) =>
    //           episodes.filter((episode) => episode.id !== id)
    //         );
    //       }
    //     });
    //   }
    return (
        <>
        <p>{game.name}</p>
        <img src={game.image} alt="gamepic" ></img>
        <button onClick={handleClick}>LIKE</button>
        <button onClick={()=> handleDelete(game.id)}>DELETE</button>
        <p>{liked ? "liked":""} </p>
        
        </>
    )
}
export default GameCard