import { useState } from "react";

import LoginForm from "./LoginForm";
import Create from "./Create"
// import {Button} from "./styles/Button"


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

<>
      <h1>Gamepoll</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
        
          <p>
            Don't have an account? 
            <button  onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <Create onLogin={onLogin} />
         
          <p>
            Already have an account? 
            <button  onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
        
      )}
    </>
    
  );
}




// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;


export default Login;