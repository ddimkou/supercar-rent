import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouName, setThankYouName] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with:", { name, email, message });
    setThankYouName(name);
    setShowThankYou(true);

    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setShowThankYou(false);
    }, 4000);
  };

  return (
    <>
      {showThankYou && (
        <div className="thank-you-message">
          Thank you {thankYouName} for your time!
        </div>
      )}
      <section className="contact-form">
        <h2>
          <span>Get In Touch</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-container textarea-container">
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
              placeholder="Message.."
            ></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
