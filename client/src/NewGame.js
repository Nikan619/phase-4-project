
import {useState} from 'react'

function NewGame({setGames,games}) {

    const [name,setName]= useState("")
   
    const [image,setImage]= useState("")

    

    const handleNameChange =(e)=> {
        setName(e.target.value)
    }

    const handleImageChange =(e)=> {
        setImage(e.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
      
        const response =await fetch('/gamespost',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name,image }),
        });

        const data = await response.json();
        
        setGames([...games,data])
      
    }
  


   return( 
   <section>
    <form onSubmit={handleSubmit} className='new-game-form'>
        <h3 style={{ fontStyle: 'italic'}}>Add New Game</h3>
        <div>
            <input
            type="text"
            id="name"
            placeholder="Enter Game Name"
            value={name}
            onChange={handleNameChange}
            />
        </div>
        <div>
            <input
            type="text"
            id="image"
            placeholder="Enter Game Image URL"
            value={image}
            onChange={handleImageChange}
            />
        </div>
        <button type="submit" style={{ cursor: 'pointer'}}>Submit</button>
    </form>
</section>
   )
}

export default NewGame;