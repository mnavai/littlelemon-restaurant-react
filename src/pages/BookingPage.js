import React from "react";
import { fetchAPI } from "../util/utils";
import { useState } from "react";
import BookingForm from "../component/BookingForm/BookingForm";
import Footer from "../component/Footer/Footer";
import Nav from "../component/Navigation/Nav";


const BookingPage = ({ availableTimes, dispatch }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // Local state for selected date

  const handleDateChange = async (newSelectedDate) => {
    try {
      const times = await fetchAPI(newSelectedDate); // Pass selectedDate to the API call
      setSelectedTime(""); // Reset selectedTime when the date changes
      setSelectedDate(newSelectedDate); // Update selectedDate in local state ...
      dispatch({ type: "UPDATE_TIMES", times }); // Update availableTimes using the dispatch
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };
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
              onDateChange={handleDateChange}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              selectedDate={selectedDate}
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
