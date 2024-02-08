import React, { useState } from 'react';

function BookingFormTwo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
    // Add validation logic for first name
    // Update formValid state accordingly
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
    // Add validation logic for last name
    // Update formValid state accordingly
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    // Add validation logic for email
    // Update formValid state accordingly
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setPhone(value);
    // Add validation logic for phone number
    // Update formValid state accordingly
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form if all fields are valid
    if (formValid) {
      // Implement form submission logic
    } else {
      // Display error message or prevent submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={handleLastNameChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleEmailChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} required />
      </label>
      {/* Add more input fields with appropriate event handlers */}
      <button type="submit" disabled={!formValid}>Submit</button>
    </form>
  );
}

export default BookingFormTwo;
