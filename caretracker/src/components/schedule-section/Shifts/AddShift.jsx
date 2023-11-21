// AddShiftForm.js
import React, { useState, useEffect } from 'react';
import './AddShift.css';
import { API_SCHEDULE_ADD_SHIFT, API_SCHEDULE_UPDATE_SHIFT_BY_ID } from '../../../constants/endpoints';

const AddShift = (props) => {
  // State to manage form input values
  const initialFormData = {
    staff: '',
    date: '',
    address: '',
    startTime: '',
    endTime: '',
    isAwake: true,
    eventColor: '#4CAF50', // Default color
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (props.shiftToUpdate) {
      // If in edit mode, prepopulate the form with existing shift data
      setFormData({
        staff: props.shiftToUpdate.staff,
        date: props.shiftToUpdate.date,
        address: props.shiftToUpdate.address,
        startTime: props.shiftToUpdate.startTime,
        endTime: props.shiftToUpdate.endTime,
        isAwake: props.shiftToUpdate.isAwake,
        eventColor: props.shiftToUpdate.eventColor || '#4CAF50', // Default color
      });
    }
  }, [props.shiftToUpdate]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  // Function to handle form submission
  const handleAddShift = async (e) => {
    e.preventDefault();

    // Try Catch
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', props.token);

      // Convert startTime and endTime to date objects
      const startDate = new Date(formData.date + 'T' + formData.startTime + ':00');
      const endDate = new Date(formData.date + 'T' + formData.endTime + ':00');

      // Body
      const body = {
        staff: formData.staff,
        date: formData.date,
        address: formData.address,
        shiftStart: startDate.toISOString(),
        shiftEnd: endDate.toISOString(),
        isAwake: formData.isAwake,
        eventColor: formData.eventColor, // Include the eventColor in the body
        // Add other form fields as needed
      };
      if (props.shiftToUpdate) {
        // If in edit mode, update the shift
        const response = await fetch(`${API_SCHEDULE_UPDATE_SHIFT_BY_ID}/${props.shiftToUpdate.id}`, {
          method: 'PATCH',  // Change the method to PATCH
          headers: {
            'Content-Type': 'application/json',
            Authorization: props.token,
          },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          // Clear the selected shift and notify the parent component about the update
          setFormData({ /* ... reset form fields as needed */ });
          props.onUpdate();
        } else {
          console.error('Failed to update shift. Status:', response.status);
        }
      } else {
        // If not in edit mode, add a new shift
        const response = await fetch(API_SCHEDULE_ADD_SHIFT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: props.token,
          },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          // Clear the form after adding
          setFormData({ /* ... reset form fields as needed */ });
          // Refresh the page after handling the submit
          window.location.reload();
        } else {
          console.error('Failed to add shift. Status:', response.status);
        }
      }
      // Refresh the page after handling the submit
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    // Clear the form fields
    setFormData(initialFormData);

    // Call the onCancel prop if it's a function
    if (typeof props.onCancel === 'function') {
      props.onCancel();
    }
  };


  return (
    <form className={`add-shift-form ${props.shiftToUpdate ? 'edit-mode' : ''}`} onSubmit={handleAddShift}>
      {/* Input fields for adding shift details */}
      <div>
        <label>Staff:</label>
        <input type="text" name="staff" value={formData.staff} onChange={handleInputChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      </div>
      <div>
        <label>Start Time:</label>
        <input type="time" name="startTime" value={formData.startTime} onChange={handleInputChange} />
      </div>
      <div>
        <label>End Time:</label>
        <input type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} />
      </div>
      <div>
        <label>Is Awake:</label>
        <input type="checkbox" name="isAwake" checked={formData.isAwake} onChange={handleInputChange} />
      </div>
      <div>
        <label>Event Color:</label>
        <input type="color" name="eventColor" value={formData.eventColor} onChange={handleInputChange} />
      </div>
      {/* Add other form fields as needed */}
      <button type="submit" style={{ marginTop: '2.5vh', backgroundColor: 'Lime', border: 'none' }}>
        {props.shiftToUpdate ? 'Update Shift' : <i className="fa-solid fa-calendar-plus" style={{ color: 'white' }}></i>}
      </button>
      {props.shiftToUpdate && (
        <button type="button" onClick={handleCancel} style={{ marginLeft: '5px', backgroundColor: 'red', border: 'none', color: 'white' }}>
          Cancel
        </button>
      )}

    </form>
  );
};

export default AddShift;