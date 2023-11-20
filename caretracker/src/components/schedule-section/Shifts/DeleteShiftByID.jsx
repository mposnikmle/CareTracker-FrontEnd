// DeleteShiftByID.jsx
import React, { useState } from 'react';
import { API_SCHEDULE_DELETE_SHIFT_BY_ID } from '../../../constants/endpoints';

const DeleteShiftByID = ({ token }) => {
    const [shiftId, setShiftId] = useState('');

    const handleInputChange = (e) => {
        setShiftId(e.target.value);
    };

    const handleDeleteShift = async (e) => {
        e.preventDefault();

        // Check if shiftId is provided
        if (!shiftId) {
        console.error('Shift ID is required.');
        return;
        }

        try {
        const response = await fetch(`${API_SCHEDULE_DELETE_SHIFT_BY_ID}/${shiftId}`, {
            method: 'DELETE',
            headers: {
            Authorization: token,
            },
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Shift deleted successfully:', data);
            // You may want to refresh the calendar or update the UI accordingly
        } else {
            console.error('Error deleting shift:', data);
        }
        } catch (error) {
        console.error('Error deleting shift:', error);
        }
    };

    return (
        <div>
        <h3>Delete Shift by ID</h3>
        <form onSubmit={handleDeleteShift}>
            <label>
            Shift ID:
            <input type="text" value={shiftId} onChange={handleInputChange} />
            </label>
            <button type="submit">Delete Shift</button>
        </form>
        </div>
    );
};

export default DeleteShiftByID;
