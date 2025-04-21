import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const contactHeadingRef = useRef(null);
  const contactSeparatorRef = useRef(null);
  const contactDescriptionRef = useRef(null);
  const contactFormRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);
  
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact/`, {
        method: 'POST',
        body: form,
      });
  
      const result = await response.json();
      if (result.status === 'success') {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('⚠️ Something went wrong!');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contactHeadingRef.current) entry.target.classList.add('slideInUp');
            if (entry.target === contactSeparatorRef.current) entry.target.classList.add('scaleXForward');
            if (entry.target === contactDescriptionRef.current) entry.target.classList.add('fadeIn');
            if (entry.target === contactFormRef.current) entry.target.classList.add('slideInUp');
          } else {
            // Optional: Remove classes when leaving viewport for re-animation
            if (entry.target === contactHeadingRef.current) entry.target.classList.remove('slideInUp');
            if (entry.target === contactSeparatorRef.current) entry.target.classList.remove('scaleXForward');
            if (entry.target === contactDescriptionRef.current) entry.target.classList.remove('fadeIn');
            if (entry.target === contactFormRef.current) entry.target.classList.remove('slideInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToObserve = [
      contactHeadingRef.current,
      contactSeparatorRef.current,
      contactDescriptionRef.current,
      contactFormRef.current,
    ].filter(element => element !== null);

    elementsToObserve.forEach(element => observer.observe(element));

    return () => {
      elementsToObserve.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold initial-hidden" ref={contactHeadingRef}>LET'S TALK</h2>
      <div className="contact-separator initial-hidden" ref={contactSeparatorRef}></div> {/* Add the separator line here */}
      <p className="contact-description initial-hidden" ref={contactDescriptionRef}>
        Please don't hesitate to reach out by filling out the form below. I'll respond to your message promptly.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 max-w-md mx-auto contact-form initial-hidden" ref={contactFormRef}>
        <div className="form-group">
          <label htmlFor="name">NAME*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">EMAIL*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="bg-blue-500 text-white p-2 m-2">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;