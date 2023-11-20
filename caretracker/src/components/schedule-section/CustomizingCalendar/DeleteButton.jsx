// DeleteButton.js
import React from 'react';

const DeleteButton = ({ onDelete, shiftId }) => {
    const handleDelete = () => {
        // Call the onDelete function with the shiftId
        onDelete(shiftId);
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;
