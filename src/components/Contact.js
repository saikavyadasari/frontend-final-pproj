import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  // Step 1: Define form state using useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Step 2: Define error state to show validation messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  // Step 3: Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Validate form data
  const validateForm = () => {
    let formErrors = {};

    // Name validation
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    // Return the validation errors
    return formErrors;
  };

  // Step 5: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Validate the form data
    const formErrors = validateForm();
  
    // If there are no errors, proceed with logging the form data and reset the form
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Data Submitted:", formData); // Log form data to the console
      setFormData({ name: '', email: '', message: '' }); // Reset the form
      setErrors({}); // Clear any validation errors
      alert('Form submitted successfully!');
    } else {
      setErrors(formErrors); // Set validation errors if any
    }
  };
  


  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      {/* Step 6: Form structure */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message (optional):</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
