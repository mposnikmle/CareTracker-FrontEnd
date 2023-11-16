import Login from "./Login";
import Signup from "./Signup";
import React, { useState } from 'react';

const Auth = (props) => {

    const [showLogin, setShowLogin] = useState();

    function handleToggle() {
        if (showLogin === false) {
            setShowLogin(true);
        } else {
            setShowLogin(false);
        }
    }

    return ( 
        <>
            
            {showLogin 
                ? <Login updateToken={props.updateToken} />
                : <Signup updateToken={props.updateToken} />
            }

            <button onClick={handleToggle}>Toggle Login/Register</button>
        </>
     );
}
 
export default Auth;

