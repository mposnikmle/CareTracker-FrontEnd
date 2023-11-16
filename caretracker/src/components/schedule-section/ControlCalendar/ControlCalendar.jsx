import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "../Calendar";
import { API_SCHEDULE_VIEW_ALL_SHIFTS } from "../../../constants/endpoints";

export default function ControlCalendar() {
  // State to store the fetched shifts
    const [fetchedShifts, setFetchedShifts] = useState([]);

    useEffect(() => {
        // Function to fetch shifts from the backend
        const fetchShifts = async () => {
        try {
            const response = await fetch(API_SCHEDULE_VIEW_ALL_SHIFTS);
            const data = await response.json();

            if (data.shifts) {
            // Transform the fetched data into the format expected by your Calendar component
            const formattedShifts = data.shifts.map((shift) => ({
                start: moment(shift.start).toDate(),
                end: moment(shift.end).toDate(),
                title: shift.title,
            }));

            // Update the state with the fetched shifts
            setFetchedShifts(formattedShifts);
            console.log("Fetched shifts:", data.shifts);
            }
        } catch (error) {
            console.error("Error fetching shifts:", error);
        }
        
        };

        // Call the fetchShifts function
        fetchShifts();
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    return <Calendar events={fetchedShifts} />;
}
