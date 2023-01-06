
    
 


function RatedGames({currentUser}){
   


    console.log(currentUser.game_images);

  const mappedImages= () => { return currentUser.game_images.map((image) => {
   return  (<li>{image.name} </li>)})}
   const mappedRatings = () =>{ return currentUser.ratings.map((rating) => {
    return  (<li>{rating.game_rating} </li>)})} 

    return(
        <>
        <h1> {currentUser.username}'s ratings </h1>
        <ul>{mappedImages()}</ul>
        <ul>{mappedRatings()}</ul>
        </>
       
    )


}

export default RatedGames