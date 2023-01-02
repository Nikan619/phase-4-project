import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'

function Create () {


return (
<div>
  <form>
    <label className="create-username">  Create Username: 
    <input type="text"></input>
    </label>
    <label className="create-password">  Create Password: 
    <input type="text"></input>
    </label>
    <button><Link className="create-a" to="/">Create Account</Link></button>
  </form>
  
</div>
)
    
}

export default Create;