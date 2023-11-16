import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "../Calendar";
import { API_SCHEDULE_VIEW_ALL_SHIFTS } from "../../../constants/endpoints";
import AddShift from "../Shifts/AddShift";

const ControlCalendar = ({ token }) => {
  const [fetchedShifts, setFetchedShifts] = useState([]);

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

  const EventComponent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <p>Address: {event.address}</p>
      {/* Add more information as needed */}
    </div>
  );

  return (
    <div>
      <Calendar
        events={fetchedShifts}
        components={{
          event: EventComponent,
        }}
        eventPropGetter={eventStyleGetter} // Assign the eventStyleGetter function
      />
      <AddShift token={token} />
    </div>
  );
};

export default ControlCalendar;
