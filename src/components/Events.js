import React from "react";

const Events = (events) => {
  //http://localhost:3001/
  return (
    <div>
      <section className="events">
        <h3>{events.name}</h3>
        <p>{events.description}</p>
      </section>
    </div>
  );
};

export default Events;