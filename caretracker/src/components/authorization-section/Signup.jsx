import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API_STAFF_SIGNUP } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [company, setCompany] = useState();
  const [role, setRole] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = {
        company: company,
        role: role,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      };

      const requestOption = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      };

      const response = await fetch(API_STAFF_SIGNUP, requestOption);

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
      <Form>
        <FormGroup>
          <Label for="company">Company</Label>
          <select id="company" name="company" /*value={company}*/ onChange={(e) => setCompany(e.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="comp1">company 1</option>
            <option value="comp2">company 2</option>
            <option value="comp3">company 3</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="role">Role</Label>
          <Input
            id="role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            id="firstname"
            name="firstname"
            placeholder="Enter First Name"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Enter Last Name"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
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
        <Button title="Signup" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </>
  );
};

export default Signup;
