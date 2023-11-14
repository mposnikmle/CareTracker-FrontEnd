import Login from "./Login";
import Signup from "./Signup";
import React, { useState } from 'react';

const Auth = (props) => {
    const [showLogin, setShowLogin] = useState(false);

    function handleToggle() {
        if (showLogin === false) {
            setShowLogin(true);
        } else {
            setShowLogin(false);
        }
    }

    return ( 
        <>
            {/* <h1>Hello from Auth</h1>
            <Login updateToken={props.updateToken} />
            <Signup /> */}
            {showLogin 
                ? <Signup updateToken={props.updateToken} />
                : <Login updateToken={props.updateToken} />
            }

            <button onClick={handleToggle}>Toggle Login/Register</button>
        </>
     );
}
 
export default Auth;