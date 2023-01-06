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
        
        <>
<Link to="/datapage">Gamepoll</Link>
<button className="nav" variant= "outline" onClick={handleLogOutClick} style={{ float: 'right', padding: '5px', margin: '5px', cursor: 'pointer'}}>Logout</button>
</>

    )
    }

    export default NavBar;