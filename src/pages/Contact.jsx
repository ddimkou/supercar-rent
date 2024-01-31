import "../Contact.css";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";

const Contact = () => {
  return (
    <main className="contact-main">
      <Location />
      <ContactForm />
    </main>
  );
};

export default Contact;
