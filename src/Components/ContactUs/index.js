import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name && formData.email && formData.message) {
      axios.post('http://localhost:5000/api/contact', formData)
        .then(response => {
          console.log('Form submitted successfully:', response.data);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
          console.error('There was an error submitting the form:', error.response ? error.response.data : error.message);
          alert("There was an error submitting the form. Please try again.");
        });
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div
        className="contact-image"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-contact-us-icons-merged-into-composite-image-photo-image_29628458.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '400px'
        }}
      ></div>
    </div>
  );
};

export default ContactUs;
