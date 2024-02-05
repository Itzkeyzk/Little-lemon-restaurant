// BookingForm.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI, fetchAPI } from './api'; // Make sure to import fetchAPI

const BookingForm = () => {
  // State variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);

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
      setAvailableTimes(times);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={(e) => { e.preventDefault(); submitForm({ date, time, numberOfGuests, occasion }); }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((timeOption, index) => (
          <option key={index} value={timeOption}>{timeOption}</option>
        ))}
      </select>

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
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
