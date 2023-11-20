import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "../Calendar";
import { API_SCHEDULE_DELETE_SHIFT_BY_ID, API_SCHEDULE_VIEW_ALL_SHIFTS } from "../../../constants/endpoints";
import AddShift from "../Shifts/AddShift";
import EditShift from "../Shifts/EditShift";

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
  };


  // How the Shift are displayed on the Calendar
  const EventComponent = ({ event }) => (
    <div style={{ position: 'relative' }}>
      <strong>{event.title}</strong>
      <p>Address: {event.address}</p>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button onClick={() => handleEdit(event)}>Edit</button>
        <button onClick={() => handleDelete(event.id)}>X</button>
      </div>
    </div>
  );

  return (
    <div>
      <Calendar
        events={fetchedShifts}
        components={{
          event: (props) => <EventComponent {...props} />,
        }}
        eventPropGetter={eventStyleGetter}
      />
  
      <AddShift
        token={token}
      />

    <EditShift
      token={token}
      // Pass handleUpdate as a prop
      shiftToUpdate={selectedShift}
    />

    </div>
  );
};

export default ControlCalendar;
