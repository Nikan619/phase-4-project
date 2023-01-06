
    
 


function RatedGames({currentUser}){
   


    console.log(currentUser.game_images);

  const mappedImages= () => { return currentUser.game_images.map((image) => {
   return  (<p>{image.name} :</p>)})}
   const mappedRatings = () =>{ return currentUser.ratings.map((rating) => {
    return  (<p>{rating.game_rating}/10 </p>)})} 

    return(
        <>
        <h1> {currentUser.username}'s Ratings </h1>
        <div style ={{ float: "left", paddingLeft: "320px"}}>
        <p>
            {mappedImages()}</p>
            </div>
      <div style={{float: "right",paddingRight:"400px"}}> <p>{mappedRatings()}</p></div>

        
        </>
       
    )


}

export default RatedGames