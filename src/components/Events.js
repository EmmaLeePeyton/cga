import React, { useState, useEffect } from "react";
import DeleteEvent from "../components/DeleteEvent";
import EditEvent from "../components/EditEvent";


const Events = (props) => {
  
  const [event, setEvent] = useState(props);
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [showDeleteEvent, setShowDeleteEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(true);
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
  const editEvent = (event) => {
    setEvent(event);
  };

  const hideEvent = () => {
    setShowEvent(false);
  }
/*
  const editEvent = (newEvent) => {
    setEvent(newEvent);
  };  
 */
  return (
    <>
    {showEvent ? (
      <>
        {showDeleteEvent ? (
          <DeleteEvent
            closeDialog={closeDeleteEvent}
            hideEvent = {hideEvent}
            name={event.name}
            _id={event._id}
          />
        ) : (
          ""
        )}

        {showEditEvent ? (
          <EditEvent
            closeDialog={closeEditEvent}
            editEvent={editEvent}
            _id={event._id}
            name={event.name}
            description={event.description}
          />
        ) : (
          ""
        )}

        <div id="events">
          <section className="events">
            <div className="columns">
            <h3>{event.name}</h3>
              <section id="change-buttons">
                <a href="#" onClick={openEditEvent}>
                  &#9998;
                </a>
                <a href="#" onClick={openDeleteEvent}>
                  &#x2715;
                </a>
              </section>
            </div>

            <p>{event.description}</p>
          </section>
        </div>
      </>
    ) : (
      ""
    )}
    </>
  );
};

export default Events;