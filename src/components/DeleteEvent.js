import "../css/Modal.css";
import React, { useState } from "react";

const DeleteEvent = (props) => {
  const [result, setResult] = useState("");

  const deleteEvent = async() => {
    /* const response = await fetch(`http://localhost:3001/api/events/${props._id}`,{
      method:"DELETE"
    }); */
   const response = await fetch(`https://cga-backend.onrender.com/api/events/${props._id}`,{
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Event successfully delete");
    props.hideEvent();
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your event at this time.");
   }
  };

  return (
    <div id="event-modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.closeDialog}>&times;</span>
          <h2>Delete Event</h2>
        </div>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
              <button onClick={deleteEvent}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
  );
};

export default DeleteEvent;