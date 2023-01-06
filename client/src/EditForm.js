
import {useState} from 'react'


function EditForm ({game,setGames}){



    const [name,setName]= useState("")
   
    const [image,setImage]= useState("")

    

    const handleNameChange =(e)=> {
        setName(e.target.value)
    }

    const handleImageChange =(e)=> {
        setImage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const updatedGame ={name: name,image: image}
        fetch(`/game_images/${game.id}`,{method: "PATCH",
        headers: {'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedGame),
})
    .then(response=>response.json())
    .then(data => {
        setGames(game=> [...game,updatedGame])
    })
        

    }
  
  
    return(
<section>
        <form onSubmit={handleSubmit}>
        <h2>Modify Game</h2>
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
export default EditForm