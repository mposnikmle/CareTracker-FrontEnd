// EditShiftForm.js
import React, { useState, useEffect } from 'react';
import './AddShift.css';
import { API_SCHEDULE_UPDATE_SHIFT_BY_ID } from '../../../constants/endpoints';

const EditShift = (props) => {
  const [formData, setFormData] = useState({
    staff: '',
    date: '',
    address: '',
    startTime: '',
    endTime: '',
    isAwake: true,
    eventColor: '#4CAF50', // Default color
  });

  useEffect(() => {
    // Update form data when shiftToUpdate prop changes
    if (props.shiftToUpdate) {
      const { staff, date, address, shiftStart, shiftEnd, isAwake, eventColor } = props.shiftToUpdate;

      setFormData({
        staff,
        date,
        address,
        startTime: new Date(shiftStart).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        endTime: new Date(shiftEnd).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isAwake,
        eventColor,
      });
    }
  }, [props.shiftToUpdate]);

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleUpdateShift = async (e) => {
    e.preventDefault();

    try {
      const startDate = new Date(formData.date + 'T' + formData.startTime + ':00');
      const endDate = new Date(formData.date + 'T' + formData.endTime + ':00');

      const updatedShift = {
        staff: formData.staff,
        date: formData.date,
        address: formData.address,
        shiftStart: startDate.toISOString(),
        shiftEnd: endDate.toISOString(),
        isAwake: formData.isAwake,
        eventColor: formData.eventColor,
      };

      const response = await fetch(`${API_SCHEDULE_UPDATE_SHIFT_BY_ID}/${props.shiftToUpdate.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: props.token,
        },
        body: JSON.stringify(updatedShift),
      });

      if (response.ok) {
        // Call the callback function passed as a prop to notify the parent component about the update
        if (props.onUpdate) {
          props.onUpdate(updatedShift);
        }
      } else {
        console.error('Failed to update shift. Status:', response.status);
      }
    } catch (error) {
      console.error('Error updating shift:', error);
    }
  };

  return (
    <form className="edit-shift-form" onSubmit={handleUpdateShift}>
      {/* Input fields for updating shift details */}
      {/* ... (same as in the AddShift component) */}
      <button type="submit">Update Shift</button>
    </form>
  );
};

export default EditShift;
