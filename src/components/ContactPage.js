import "./ContactPage.css"
import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send message to server or email
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div className="contact-page">
     
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    

  );
};

export default ContactPage;


{/* <div className="social-links">
<a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
<a href="https://www.connect.com"><i className="fas fa-link"></i></a>
<a href="https://www.linktree.com"><i className="fas fa-tree"></i></a>
<a href="https://www.donation.com"><i className="fas fa-donate"></i></a>
</div> */}