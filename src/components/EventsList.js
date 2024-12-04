import Events from "./Events";
import React, { useState, useEffect } from "react";
import axios from "axios";

import EventAddModal from "../components/EventAddModal";
import DeleteEvent from "../components/DeleteEvent";
import EditEvent from "../components/EditEvent";


const EventsList = () => {
  const [event, setEvent] = useState([]);
  const [eventsModalShow, setEventsModal] = useState(false);
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [showDeleteEvent, setShowDeleteEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(true);
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
  const openEditEvent = () => {
    setShowEditEvent(true);
  };
  const openDeleteEvent = () => {
    setShowDeleteEvent(true);
  };

  const addEvent = (event) => {
    setEvent((events) => [...events, event]);
  };
  const closeEditEvent = () => {
    setShowEditEvent(false);
  };
  const closeDeleteEvent = () => {
    setShowDeleteEvent(false);
  };

  const hideEvent = () => {
    setShowEvent(false);
  }
/*
  const editEvent = (newEvent) => {
    setEvent(newEvent);
  };  
 */

  return(
    <>
      <button id="add-event" onClick={openEventsModal}>+</button>
      {eventsModalShow ? (
        <EventAddModal closeDialog={closeEventsModal} addEvent={addEvent}/>
        ) :
        ("")
      }
      {showDeleteEvent ? (
      <DeleteEvent
        closeDialog={closeDeleteEvent}
        hideEvent = {hideEvent}
        _id={Events._id}
        name={Events.name}
      />
    ) : (
      ""
    )}

    {showEditEvent ? (
      <EditEvent
        closeDialog={closeEditEvent}
        //updateEvent = {editEvent}
        _id={Events._id}
        name={Events.name}
        description={Events.description}
      />
    ) : (
      ""
    )}
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