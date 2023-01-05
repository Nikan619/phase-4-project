
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
    <form onSubmit={handleSubmit}>
        <h2>Add New Game</h2>
        <div>
            <label htmlFor="name">Name:</label>
        </div>
        <div>
            <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
            />
        </div>
        <div>
            <label htmlFor="field_of_study">Image:</label>
        </div>
        <div>
            <input
            type="text"
            id="image"
            placeholder="Enter image url"
            value={image}
            onChange={handleImageChange}
            />
        </div>
    
        
        <button type="submit">Submit</button>
    </form>
</section>
   )
}

export default NewGame;