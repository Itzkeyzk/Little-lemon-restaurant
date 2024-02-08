// BookingForm.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI, fetchAPI } from './api'; // Make sure to import fetchAPI
import './BookingForm.css'; // Import the CSS file

const BookingForm = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formValid, setFormValid] = useState(false);

  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      } else {
        // Handle submission failure if necessary
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle submission failure if necessary
    }
  };

  // Fetch available times when component mounts
  useEffect(() => {
    initializeTimes();
  }, []);

  // Function to initialize available times
  const initializeTimes = async () => {
    const today = new Date(); // Get current date as a Date object
    try {
      const times = await fetchAPI(today);
      console.log('Initial Available Times:', times); // Debugging
      setAvailableTimes(times);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  // Function to update available times when date changes
  const handleDateChange = async (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    try {
      const times = await fetchAPI(newDate);
      console.log('Updated Available Times:', times); // Debugging
      setAvailableTimes(times);
      // Reset the selected time when date changes
      setTime(times.length > 0 ? times[0] : ''); // Set to the first available time, or empty string if no times available
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  // Function to validate form fields
  useEffect(() => {
    // Add validation logic for all fields
    // Update formValid state accordingly
  }, [firstName, lastName, email, phone, date, time, numberOfGuests, occasion]);

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={(e) => { e.preventDefault(); submitForm({ firstName, lastName, email, phone, date, time, numberOfGuests, occasion }); }}>
        <h2 className="booking-form-title">Make a Reservation</h2>

        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="booking-input"
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="booking-input"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="booking-input"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="booking-input"
        />

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          className="booking-input"
        />

       

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
          required
          className="booking-input"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          className="booking-select"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button type="submit" className="booking-button">Make Your Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
