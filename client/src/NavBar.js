import React from "react";
import { Link } from "react-router-dom";
import "./App.css"


function NavBar ({currentUser,setCurrentUser}){
    function handleLogOutClick(){
        fetch("/logout", {method:"DELETE"}).then((r)=>{
            if(r.ok){
                setCurrentUser(null);
            }
        })
    }
    return (
        
        <div>
        <Link className="games-link" exact to ="/" style={{padding: '280px', margin: '5px', cursor: 'pointer'}}>Games Display{" "}</Link><spc></spc>

<Link className="rate-games" to="/RatedGames" style={{padding: '200px', margin: '5px', cursor: 'pointer'}}> {" "}  RatedGames </Link>
<button className="nav" variant= "outline" onClick={handleLogOutClick} style={{ float: 'right', padding: '5px', margin: '5px', cursor: 'pointer'}}>Logout</button>
</div>

    )}
    

    export default NavBar;