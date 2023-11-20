import React, { useState } from "react";

const UserProps = ({ children }) => {
  // Step 1: Initialize user state with useState
  const [user, setUser] = useState(null);

  // Step 2: Define function to update user state
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // Step 3: Pass down user state and update function as props using children
  return <div>{children({ user, updateUser })}</div>;
};

export default UserProps;
