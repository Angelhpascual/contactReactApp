import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles.css";

const ContactCard = (props) => {
  const [showAge, setshowAge] = useState(true);

  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src={props.avatar} alt="Photo" />
        <div className="user-details">
          <p>{props.name}</p>
          <p>{props.email}</p>
          <button onClick={() => setshowAge(!showAge)}>Toogle Age</button>
          {showAge && <p>{props.age}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
