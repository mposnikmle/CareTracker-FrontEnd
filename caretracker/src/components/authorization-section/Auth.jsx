import { Button } from "reactstrap";
import Login from "./Login";
import Signup from "./Signup";
// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
    const navigate = useNavigate();

    function handleRegister() {
        navigate("/signup");
    }

    // const [showLogin, setShowLogin] = useState();

    // function handleToggle() {
    //     if (showLogin === false) {
    //         setShowLogin(true);
    //     } else {
    //         setShowLogin(false);
    //     }
    // }

    return ( 
        <>
            
            {/* {showLogin 
                ? <Login updateToken={props.updateToken} />
                : <Signup updateToken={props.updateToken} />
            } */}

            <Login updateToken={props.updateToken} />
            <Button onClick={handleRegister}>Register New Staff Member</Button>

            {/* <button onClick={handleToggle}>Register New Staff Member</button> */}
        </>
     );
}
 
export default Auth;

