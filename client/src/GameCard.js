
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
   
    return (
        <div className='game-card'>
            <h2>{game.name}</h2>
            <img src={game.image} alt="gamepic" className='game-image'></img>
            <br></br>
            <button onClick={handleClick}>❤️</button>
            <br></br>
            <button onClick={()=> handleDelete(game.id)}>🗑️</button>
            <br></br>
            <button onClick={()=>handleEdit()}>Edit</button>
            <br></br>
            {edit? <EditForm  game={game} setGames={setGames}/> : " "}
            {liked ? <p style={{ fontStyle: 'italic'}}>liked!</p> : ""}
        </div>
    )
}
export default GameCard