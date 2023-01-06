
import {useState} from 'react'
import EditForm from './EditForm.js'
import RatingForm from './RatingForm.js'
function GameCard({game,setGames,ratings,setRatings,currentUser}) {
    const [ratingClicked,setRatingClicked]=useState(false)
    const [edit,setEdit]=useState(false)

    function handleClick() {
        setRatingClicked(!ratingClicked)
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
   
    return (
        <div className = 'game-card'>
        <h2>{game.name}</h2>
        <img src={game.image} alt="gamepic" className = 'game-image' ></img>
        <button onClick={handleClick}>Rating</button>
        { ratingClicked? <RatingForm ratings={ratings} setRatings={setRatings} game={game} setGames={setGames} user={currentUser}/>: null}
        <button onClick={()=> handleDelete(game.id)}>🗑️</button>
        <button onClick={()=>handleEdit()}>EDIT</button>
        {edit? <EditForm  game={game} setGames={setGames}/> : " "}
        
        
        </div>
    )
}
export default GameCard