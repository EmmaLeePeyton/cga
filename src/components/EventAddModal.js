import "../css/Modal.css";
import React, {useState} from 'react';


const EventAddModal = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("https://cga-backend.onrender.com/api/events", {
      method: "POST",
      body: formData,
    });


    if (response.status === 200) {
      setResult("Event Successfully Added");
      event.target.reset(); //reset your form fields
      props.addEvent(await response.json());
      props.closeDialog();
    } else {
      console.log("response.json(): " + response.json());
      setResult("Error adding Event");
    }
  };

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
            <label htmlFor="name">Event Name:</label>
            <input 
              id="name" 
              type="text" 
              name="name" 
              value={inputs?.name || ""} 
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="message">Description of event:</label>
            <textarea 
              id="message" 
              name="description" 
              value={inputs?.description || ""}
              onChange={handleChange}
              required
            />
          </p>

          <p><button type="submit">Submit Event</button></p>
          
          </form>
          <p id="result">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default EventAddModal;