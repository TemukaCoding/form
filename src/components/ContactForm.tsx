import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import type { ContactFormData } from "../types/contact";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! (Check console)");
  };

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <Input placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
        <Input placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
        <Input placeholder="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
        <Input placeholder="Subject Line" name="subject" value={formData.subject} onChange={handleChange} />
        <TextArea placeholder="Drop Your Message..." name="message" value={formData.message} onChange={handleChange} />
        <button className="button" type="submit">Send Message ✈</button>
      </form>
    </div>
  );
};

export default ContactForm;