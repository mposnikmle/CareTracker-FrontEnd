import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "../Calendar";
import { API_SCHEDULE_DELETE_SHIFT_BY_ID, API_SCHEDULE_VIEW_ALL_SHIFTS, API_SCHEDULE_UPDATE_SHIFT_BY_ID } from "../../../constants/endpoints";
import AddShift from "../Shifts/AddShift";

/* 
  ! ControlCalendar
  * Fetching shifts from the API
  * Using proper ReactBigCalendar Formatting
  * Deleting Shifts from the API
*/

const ControlCalendar = ({ token }) => {
  const [fetchedShifts, setFetchedShifts] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await fetch(API_SCHEDULE_VIEW_ALL_SHIFTS, {
          headers: {
            Authorization: `${token}`,
          },
        });

        const data = await response.json();

        if (data.shifts) {
          const formattedShifts = data.shifts.map((shift) => ({
            id: shift._id,
            start: moment(shift.shiftStart).toDate(),
            end: moment(shift.shiftEnd).toDate(),
            title: shift.staff,
            staff: shift.staff,
            date: moment(shift.shiftStart).format("YYYY-MM-DD"),
            address: shift.address,
            color: shift.eventColor || "#4CAF50",
          }));

          console.log("Formatted Shifts:", formattedShifts);

          setFetchedShifts(formattedShifts);
        }

      } catch (error) {
        console.error("Error fetching shifts:", error);
      }
    };

    fetchShifts();
  }, [token]);

  // Define eventStyleGetter function
  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  };

  // Deleting shift in the API
  const handleDelete = async (shiftId) => {
    try {
      const response = await fetch(`${API_SCHEDULE_DELETE_SHIFT_BY_ID}/${shiftId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        setFetchedShifts((prevShifts) => prevShifts.filter((shift) => shift.id !== shiftId));
      } else {
        console.error('Failed to delete shift. Status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting shift:', error);
    }
  };

  const handleEdit = (shift) => {
    setSelectedShift(shift);
    console.log(shift)
  };

  const handleUpdate = async (updatedShift) => {
    try {
      const response = await fetch(`${API_SCHEDULE_UPDATE_SHIFT_BY_ID}/${updatedShift.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify(updatedShift),
      });

      if (response.ok) {
        // Update the local shifts data
        setFetchedShifts((prevShifts) => {
          const updatedShifts = prevShifts.map((shift) =>
            shift.id === updatedShift.id ? { ...shift, ...updatedShift } : shift
          );
          return updatedShifts;
        });

        // Clear the selectedShift
        setSelectedShift(null);
      } else {
        console.error('Failed to update shift. Status:', response.status);
      }
    } catch (error) {
      console.error('Error updating shift:', error);
    }
  };


  // How the Shift are displayed on the Calendar
  const EventComponent = ({ event }) => (
    <div style={{ position: 'relative' }}>
      <strong>{event.title}</strong>
      <p>Address: {event.address}</p>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button
          onClick={() => handleEdit(event)}
          style={{
            backgroundColor: 'lightyellow',
            borderRadius: '5px', // You can adjust the border radius as needed
            color: 'black', // Set text color to contrast with the light yellow background
            border: 'none', // Remove the default button border
            padding: '5px', // Add padding for better aesthetics
          }}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          onClick={() => handleDelete(event.id)}
          style={{
            backgroundColor: 'red',
            borderRadius: '5px', // You can adjust the border radius as needed
            color: 'black', // Set text color to contrast with the light yellow background
            border: 'none', // Remove the default button border
            padding: '5px', // Add padding for better aesthetics
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <Calendar
          events={fetchedShifts}
          components={{
            event: (props) => <EventComponent {...props} />,
          }}
          eventPropGetter={eventStyleGetter}
        />
    </div>
    <div>
      <AddShift
        token={token}
        shiftToUpdate={selectedShift}
        onUpdate={handleUpdate}
        onCancel={() => setSelectedShift(null)}
      />

    </div>
    </div>
  );
};

export default ControlCalendar;
