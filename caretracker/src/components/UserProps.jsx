import React, { useState } from "react";

const UserProps = ({ children }) => {
  //    Initialize user state with useState
  const [user, setUser] = useState("");

  // Define function to update user state
  const updateUser = (newUser) => {
    setUser(newUser);
  };
  console.log(user);
  //  Pass down user state and update function as props using children
  return <div>{children({ user, updateUser })}</div>;
};

export default UserProps;
