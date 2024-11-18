import "../css/Modal.css";
import React from 'react';


const EventAddModal = (props) => {
  const onSubmit = () => {};
  
  return (
    <div id="event-modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.closeDialog}>&times;</span>
          <h2>Add Event</h2>
        </div>
        <div className="modal-body">
        <form id="event-form" onSubmit={onSubmit}>
          <p>
            <label for="name">Name:</label>
            <input id="name" type="text" name="name" required/>
          </p>
          <p>
            <label for="message">Description:</label>
            <textarea id="message" name="description" required></textarea>
          </p>

          <p><button type="submit">Submit Event</button></p>
          <p id="result"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventAddModal;