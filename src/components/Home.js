import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';


export const Home = () => {
  const initialAvailableTimes = [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  // Reducer function to update available times based on selected date
  const timesReducer = (state, action) => {
    // For now, return the same available times regardless of the date
    return initialAvailableTimes;
  };

  // Initialize available times state using useReducer
  const [availableTimes, dispatchTimes] = useReducer(timesReducer, initialAvailableTimes);

  // Function to handle date change and update available times
  const handleDateChange = (selectedDate) => {
    dispatchTimes(selectedDate);
  };

  return (
    <div>
      <h1>Little Lemon</h1>
      <h2>Book a Table</h2>
      <BookingForm onDateChange={handleDateChange} availableTimes={availableTimes} />
    </div>
  );
};


export default Home;
