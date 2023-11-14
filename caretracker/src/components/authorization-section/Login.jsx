import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("Daniel@Dan.com");
  const [password, setpassword] = useState("Password123");

  function handleSubmit() {
    console.log("Login Submitted");

    setEmail("");
    setpassword("");
  }

  return (
    <>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
    </>
  );
}
export default Login;
