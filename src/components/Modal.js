import "../css/Modal.css";
import React, {useState} from 'react';


const Modal = ({ show, onClose }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <> 
    <div id="myModal" class="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Got Questions?</h2>
          <h4>Ask the team!</h4>
        </div>
        <div className="modal-body">
          <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="f866c890-ef35-4582-8524-28b64aa47cba"/>
            <p>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" placeholder="first and last" name="name"required/>
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" required/>
            </p>
            <p>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </p>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
            <input type="hidden" name="subject" value="Question/Comment from CGA Website"/>
            <input type="hidden" name="from_name" value="Christian Golfers" />

            <p><button type="submit">Submit Form</button></p>
            <p id="result"></p>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Modal;