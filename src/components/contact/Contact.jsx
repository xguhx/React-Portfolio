import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export const Contact = () => {
  const formRef = useRef();
  const name = useRef();
  const subject = useRef();
  const email = useRef();
  const textMessage = useRef();

  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !(
        name.current.value === "" ||
        email.current.value === "" ||
        textMessage.current.value === "" ||
        subject.current.value === ""
      )
    ) {
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

      name.current.value = "";
      subject.current.value = "";
      email.current.value = "";
      textMessage.current.value = "";

      setMessage(true);
      setError(false);
      return;
    } else {
      setError(true);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input type="text" placeholder="Name" name="user_name" ref={name} />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            ref={subject}
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            ref={email}
          />
          <textarea placeholder="Message" name="message" ref={textMessage} />
          <button type="submit">Send</button>
          {message && (
            <span>Thank you for the message! I will reply soon! </span>
          )}

          {error && (
            <span className="error">
              Looks like you are missing some information!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
