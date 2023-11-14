import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <>
      <h1>Hello from Auth</h1>
      <Login updateToken={props.updateToken} />
      <Signup />
    </>
  );
};

export default Auth;
