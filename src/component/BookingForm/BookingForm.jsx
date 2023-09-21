import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";
import Button from "../Button/Button";

const BookingForm = ({
  availableTimes,
  onDateChange,
  selectedTime,
  setSelectedTime,
  selectedDate,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [date, setDate] = useState("2023-09-15");
  const [number, setNumber] = useState(2);
  const [occasion, setOccasion] = useState("Anniversary");

  const sendConfirmationEmail = async (
    name,
    email,
    selectedDate,
    selectedTime
  ) => {
    // Simulate sending an email (logging to console for demonstration purposes)
    console.log(
      `Confirmation email sent to ${email} for ${name}'s reservation on ${selectedDate} at ${selectedTime}.`
    );
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();

    // Validate name and email
    if (!name.trim()) {
      alert("Name is required.");
      return;
    }

    if (!email.trim()) {
      alert("Email is required.");
      return;
    } else if (!emailIsValid(email)) {
      alert("Invalid email format.");
      return;
    }

    // Validate date and time
    if (!selectedDate) {
      alert("Date is required.");
      return;
    }

    if (!selectedTime) {
      alert("Time must be selected.");
      return;
    }

    // If all validation passes, submit the form
    await sendConfirmationEmail(name, email, selectedDate, selectedTime);
    navigate("/confirmationpage");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleDateChange = (e) => {
    const newSelectedDate = e.target.value;
    setSelectedTime("");
    onDateChange(newSelectedDate);
    setDate(newSelectedDate);
  };
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form className="booking-form" data-testid="booking-form">
      <label htmlFor="res-name" data-testid="name">
        Name
      </label>
      <input
        type="name"
        id="res-name"
        onChange={handleNameChange}
        value={name}
        required
      ></input>
      <label htmlFor="res-email">Email</label>
      <input
        type="email"
        id="res-email"
        onChange={handleEmailChange}
        value={email}
        required
      ></input>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={handleDateChange}
        value={selectedDate}
        required
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) => {
          setSelectedTime(e.target.value);
        }}
        value={selectedTime}
        required
      >
        <option value="">Select a time</option>
        {availableTimes?.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={handleNumberChange}
        value={number}
      ></input>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChange} value={occasion}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Button
        className="btn booking-btn"
        type="submit"
        onClick={handleReservationSubmit}
        aria-label="On Click"
      >
        Make a reservation
      </Button>
    </form>
  );
};
export default BookingForm;
