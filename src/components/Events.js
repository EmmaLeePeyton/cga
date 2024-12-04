import React, { useState, useEffect } from "react";
import DeleteEvent from "../components/DeleteEvent";
import EditEvent from "../components/EditEvent";


const Events = (events) => {
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [showDeleteEvent, setShowDeleteEvent] = useState(false);
  //http://localhost:3001/
  const openEditEvent = () => {
    setShowEditEvent(true);
  };
  const openDeleteEvent = () => {
    setShowDeleteEvent(true);
  };
  const closeEditEvent = () => {
    setShowEditEvent(false);
  };
  const closeDeleteEvent = () => {
    setShowDeleteEvent(false);
  };
/*
  const hideEvent = () => {
    setShowEvent(false);
  }

  const editEvent = (newEvent) => {
    setEvent(newEvent);
  };  
 */
  return (
    <>
      {showDeleteEvent ? (
      <DeleteEvent
        closeDialog={closeDeleteEvent}
        //hideEvent = {hideEvent}
        name={Events.name}
        _id={Events._id}
      />
    ) : (
      ""
    )}

    {showEditEvent ? (
      <EditEvent
        closeDialog={closeEditEvent}
        //updateEvent = {editEvent}
        _id={events._id}
        name={events.name}
        description={events.description}
      />
    ) : (
      ""
    )}

    <div id="events">
      <section className="events">
        <div className="columns">
        <h3>{events.name}</h3>
          <section id="change-buttons">
            <a href="#" onClick={openEditEvent}>
              &#9998;
            </a>
            <a href="#" onClick={openDeleteEvent}>
              &#x2715;
            </a>
          </section>
        </div>

        <p>{events.description}</p>
      </section>
    </div>
    </>
  );
};

export default Events;