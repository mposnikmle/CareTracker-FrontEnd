import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export { default as BasicCalendar } from "./components/schedule-section/BasicCalendar/BasicCalendar";
export { default as ControlCalendar } from "./components/schedule-section/ControlCalendar/ControlCalendar";
export { default as CustomizingCalendar } from "./components/schedule-section/CustomizingCalendar/CustomizingCalendar";
export { default as AdvancedCalendar } from "./components/schedule-section/AdvancedCalendar/AdvancedCalendar";


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
