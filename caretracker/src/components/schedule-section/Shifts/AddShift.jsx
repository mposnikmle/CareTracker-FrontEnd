// AddShiftForm.js
import React, { useState } from 'react';
import './AddShift.css';
import { API_SCHEDULE_ADD_SHIFT } from '../../../constants/endpoints';

const AddShift = (props) => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    staff: '',
    date: '',
    address: '',
    startTime: '',
    endTime: '',
    isAwake: true,
    eventColor: '#4CAF50', // Default color
  });

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

      // Request Options
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      };

      // Send Request
      const response = await fetch(API_SCHEDULE_ADD_SHIFT, requestOptions);
      // Get A Response
      const data = await response.json();

      // Refresh the Calendar or perform any necessary updates
      window.location.reload();
      // Example: props.fetchCalendarData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="add-shift-form" onSubmit={handleAddShift}>
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
      <button type="submit">Add Shift</button>
    </form>
  );
};

export default AddShift;