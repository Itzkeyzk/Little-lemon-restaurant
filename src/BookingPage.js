import React from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component

const BookingPage = () => {
  return (
    <div>
      <h1>Book a Table</h1>
      <p>Welcome to Little Lemon! Please fill out the form below to make a reservation.</p>
      
      {/* Render the BookingForm component */}
      <BookingForm />
      
      {/* Additional content can be added here */}
    </div>
  );
};

export default BookingPage;
