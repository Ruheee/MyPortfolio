import React from "react";
import "../style/Contact.scss"






export default function Contact() {
  return (
    <div className="contact-container">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Write something..."></textarea>
        <button onClick={() => console.log("Hello")}>Send</button>
        
    </div>
  );
}