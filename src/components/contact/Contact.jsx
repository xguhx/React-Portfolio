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
      <div className="left">
        <img
          src="https://png2.cleanpng.com/sh/246bf1350b70284fb6d5ef936e2b8e2a/L0KzQYm3VMAyN5p2iZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfhidpV4gNN0ZT3sc7F1TfRme5pshp9sbHnzPbL5lL10cJJwfZ9xYX7ng368gfMxP5c4fKoAZkfkSXABUcA1PWg4UaMAMkK4RoWCUsU2PGk8RuJ3Zx==/kisspng-computer-icons-handshake-icon-design-clip-art-shake-hands-5ac07f3d85f7a9.8104573915225649255487.png"
          alt="handshake"
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
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
