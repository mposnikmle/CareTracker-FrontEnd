import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "../Calendar";
import { API_SCHEDULE_VIEW_ALL_SHIFTS } from "../../../constants/endpoints";

export default function ControlCalendar() {
  // State to store the fetched shifts
    const [fetchedShifts, setFetchedShifts] = useState([]);

    useEffect(() => {
        const fetchShifts = async () => {
            try {
                const response = await fetch(API_SCHEDULE_VIEW_ALL_SHIFTS);
                const data = await response.json();
    
                if (data.shifts) {
                    const formattedShifts = data.shifts.map((shift) => ({
                        start: moment(shift.start).toDate(),
                        end: moment(shift.end).toDate(),
                        title: shift.title,
                        // Add other properties as needed
                    }));
    
                    console.log("Formatted Shifts:", formattedShifts);
    
                    setFetchedShifts(formattedShifts);
                }
            } catch (error) {
                console.error("Error fetching shifts:", error);
            }
        };
    
        fetchShifts();
    }, []);
    

    return <Calendar events={fetchedShifts} />;
}