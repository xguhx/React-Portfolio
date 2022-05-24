import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export const Contact = () => {
  const formRef = useRef();

  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_NAME,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="email" placeholder="Email" name="user_email" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">Send</button>
          {message && (
            <span>Thank you for the message! I will reply soon! </span>
          )}
        </form>
      </div>
    </div>
  );
};
