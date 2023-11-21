import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { API_STAFF_LOGIN } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = {
        email: email,
        password: password
      };

      const requestOption = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      };

      const response = await fetch(API_STAFF_LOGIN, requestOption);

      const data = await response.json();


      console.log(data);
      props.updateToken(data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
}

  return (
    <>
        {/* <div className="d-flex justify-content-center mt-5"> */}
            {/* <div className="secondary-background p-5 rounded" style={{width: "450px", height: "370px"}}> */}
                <h2 /*className="text-center font-primary bold"*/>LOGIN</h2>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button title="Login" onClick={handleSubmit}>Login</Button>
                </Form>
            {/* </div> */}
        {/* </div>       */}
    </>
  );
};

export default Login;