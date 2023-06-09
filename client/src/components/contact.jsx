import React, { useRef, useState, useEffect } from "react";

import emailjs from "@emailjs/browser";
import "../style/Contact.scss";
import { RiH1 } from "react-icons/ri";


export default function Contact() {
  const [emailSent, setIsEmailSent] = useState(false);
  const form = useRef();

  useEffect(() => {
    setIsEmailSent(false);
  },[])

  const setEmail = () => {
    setTimeout(() => {
      setIsEmailSent(false);
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f8ra68x",
        "template_kdq4osh",
        form.current,
        "arf-Oa_lc-bX5uylp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {!emailSent && (
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="email" placeholder="Email" name="user_email" />
          <textarea placeholder="Write something..." name="message"></textarea>
          <button type="submit" value="Send" onClick={() => { setEmail() }}>
            Send
          </button>
        </form>
      )}
      {emailSent && <span className="email--sent">Your email has been sent!</span>}
    </div>
  );
}
