import React, { useEffect, useState } from "react";
import "./App.css";
import today from "./assets/today.png";
import upcoming from "./assets/upcoming.png";
import calendar from "./assets/calendar.png";
import Add from "./assets/Add.png";
import arrowdown from "./assets/arrowdown.png";

function App() {
  

  return (
    

    
    <div className="container" >
    <div className ="panel">
      <h1 className = "task"> Personal Tasks</h1>
      <button className="today"><img src={today} className="todayimg"  />Today</button>
      <button className="upcoming"><img src={upcoming} className="upcomingimg "  />Upcoming Tasks</button>
      <button className="calendar"><img src={calendar} className="calendarimg "  />Calendar</button>

      <h1 className = "collab">Collaborator Tasks</h1>
      <button className="addfile"><img src={Add} className="Addimg "  /></button>
      <button className="popup"><img src = {arrowdown} className="arrowdownimg"></img></button>
      
    </div>
    </div>
  );
}


export default App;

