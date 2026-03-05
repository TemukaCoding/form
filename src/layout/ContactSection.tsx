import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactSection = () => {
  return (
    <div className="container contact-section">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactSection;