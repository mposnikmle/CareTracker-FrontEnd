// SomeComponent.js
import React from "react";

const SomeComponent = ({ user }) => {
  return (
    <div>
      {/* Step 3.2: Use passed user prop to conditionally render content */}
      {user ? (
        <p>
          Hello, {user.name}! Your role is {user.role}.
        </p>
      ) : (
        <p>Please log in to view this content.</p>
      )}
    </div>
  );
};

export default SomeComponent;
