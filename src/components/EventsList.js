import Events from "./Events";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EventsList = () => {

  const [event, setEvent] = useState([]);

  //useEffect “delays” a piece of code from running until that render is reflected on the screen.
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        //"http://localhost:3001/api/events"
        "https://cga-backend.onrender.com/api/events"
      );
      setEvent(response.data);
    })();
  }, []);

  

  return(
    <>
      {event.map((eventsevents,index)=>(
        <Events
          key={index}
          name={eventsevents.name}
          description={eventsevents.description}
        />
      ))}
    </>
  );
};
export default EventsList;