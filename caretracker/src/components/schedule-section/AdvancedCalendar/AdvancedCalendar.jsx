import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "../Calendar";
import AddShift from "../Shifts/AddShift";
import { API_SCHEDULE_VIEW_ALL_SHIFTS } from "../../../constants/endpoints";

export default function ControlCalendar() {
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

            setFetchedShifts(formattedShifts);
            }
        } catch (error) {
            console.error("Error fetching shifts:", error);
        }
        };

        fetchShifts();
    }, []);

    const components = {
        event: (props) => {
        // Customize event styling based on your requirements
        return (
            <div style={{ background: "blue", color: "white", height: "100%" }}>
            {props.title}
            </div>
        );
        },
    };

    return (
        <div>
        <Calendar events={fetchedShifts} components={components} />
        <AddShift />
        </div>
    );
}
