// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Create from './createAccount';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        
        <h2 className="login-title">Login Form</h2>
        <form>
          <label className="enter-username">  Username: 
          <input type="text"></input>
          </label>
          <label className="enter-password">  Password: 
          <input type="text"></input>
          </label>
          <button><Link className="login-button" to="/testing">Login</Link></button>
        </form>
        <button><Link className="create-account" to="/create">Create Account</Link></button>
      </div>
    </BrowserRouter>
  );
}

export default App;