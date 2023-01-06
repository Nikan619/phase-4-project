
import {useState} from 'react'
import EditForm from './EditForm.js'
function GameCard({game,setGames}) {
    const [liked,setLiked]=useState(false)
    const [edit,setEdit]=useState(false)

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
    function handleEdit() {
            setEdit(!edit)
    }

    function handleSubmit(id){
        
       
        console.log(game.id);
        

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
        <button onClick={()=>handleEdit()}>EDIT</button>
        {edit? <EditForm  game={game} setGames={setGames}/> : " "}
        <p>{liked ? "liked":""} </p>
        
        </>
    )
}
export default GameCard