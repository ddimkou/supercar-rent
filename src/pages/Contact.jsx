import "../Contact.css";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import Social from "../components/Social";

const Contact = () => {
  return (
    <main className="contact-main">
      <Location />
      <ContactForm />
      <Social />
    </main>
  );
};

export default Contact;
