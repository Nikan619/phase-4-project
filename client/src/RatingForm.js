import React, {useState} from "react";

const RatingForm = ({game,user,ratings,setRatings})=>{

	

    const [rating, setRating] = useState(0);
	const [ratingId,setRatingid]= useState(1);

    const handleChangeRating = (e)=>{
		console.log(user.id);
        setRating(e.target.value);
    }

   


    const handleSubmit = (e) => {
		const ratingObj ={
			
			 game_rating: rating ,
			 game_image_id: game.id,
			  user_id: user.id
			 
		 };
		
		e.preventDefault();
		const configObj = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(ratingObj),
		};
		fetch("/ratings", configObj)
			.then((response) => response.json())
			.then((rating) => {
				console.log(ratingObj);
				
				
				setRatings([...ratings,rating]);
				console.log(ratings);
				
			});
	};


    return(
        <>
    
		<div className="form">
			<form onSubmit={handleSubmit}>
				
				<select onChange={handleChangeRating} value={rating}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
				<br />
				<br />
				<button>Submit</button>
			</form>
            </div> 
            </>
    )
}

export default RatingForm;