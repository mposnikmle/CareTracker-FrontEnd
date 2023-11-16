This is what is recommended for the App.js based off of my current build.
Break it down into sections, understand it and be able to repeat it.
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ProfilePage from './ProfilePage';

const App = () => {
const [loggedIn, setLoggedIn] = useState(false); // You'll handle actual authentication logic here
const [staff, setStaff] = useState({ name: 'John Doe', role: 'Care Provider', email: 'john.doe@example.com' });

return (
<Router>

<div>
<Route
exact
path="/"
render={() => (loggedIn ? <Redirect to="/profile" /> : <LoginPage setLoggedIn={setLoggedIn} />)}
/>
<Route
path="/profile"
render={() => (loggedIn ? <ProfilePage staff={staff} /> : <Redirect to="/" />)}
/>
</div>
</Router>
);
};

const LoginPage = ({ setLoggedIn }) => {
// Implement your login logic here and setLoggedIn(true) when successful
return (

<div>
<h1>Login Page</h1>
{/_ Add login form and logic _/}
</div>
);
};

export default App;

<!-- Schedule (Main), Notes,
Open shifts, Profile, Miscellaneous, Maintenance -->

Installs
npm install react-router-dom

looks like we need a way (postman) to view all shifts open/posted?
