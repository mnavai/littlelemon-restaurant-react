import React from "react";
import BookingForm from "../component/BookingForm/BookingForm";
import Footer from "../component/Footer/Footer";
import Nav from "../component/Navigation/Nav";


const BookingPage = ({ availableTimes, handleDateChange }) => {
  
  return (
    <>
      <Nav />
      <div className="reservation-wrapper">
        <div className="reservation-container">
          <div className="reservation-text">
            <h2>Experience the perfect balance of tradition and luxury.</h2>
            <p>
              At Little Lemon, we take great pride in providing our customers
              with the greatest luxurious experience with a touch of{" "}
              <em>tradition.</em>
            </p>
            <p>Book a table with us to share in this experience.</p>
          </div>
          <div className="reservation-form" role="form">
            <h1>Reserve a table</h1>
            <p>
              Please fill in and submit the form to book your reservation at
              Little Lemon.
            </p>
            {/* Pass handleDateChange as a prop to BookingForm */}
            <BookingForm
              availableTimes={availableTimes}
              onChange={handleDateChange}
              aria-label="Booking Form"
            ></BookingForm>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
