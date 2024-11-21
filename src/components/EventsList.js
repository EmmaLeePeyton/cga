import Events from "./Events";
import React, { useState, useEffect } from "react";
import axios from "axios";

import EventAddModal from "../components/EventAddModal";

const EventsList = () => {

  const [event, setEvent] = useState([]);
  const [eventsModalShow, setEventsModal] = useState(false);

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

  const openEventsModal = () => {
    setEventsModal(true);
  }
  const closeEventsModal = () => {
    setEventsModal(false);
  }

  const addEvent = (event) => {
    setEvent((events) => [...events, event]);
  };
  

  return(
    <>
      <button id="add-event" onClick={openEventsModal}>+</button>
      {eventsModalShow ? (
        <EventAddModal closeDialog={closeEventsModal} addEvent={addEvent}/>
        ) :
        ("")
      }
      

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