import { useState } from "react";
import "./BookingForm.css";
import Button from "../Button/Button";
const BookingForm = ({ availableTimes, onDateChange, selectedTime, setSelectedTime, selectedDate }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [date, setDate] = useState("2023-09-15");
  const [number, setNumber] = useState(2);
  const [occasion, setOccasion] = useState("Anniversary");

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
    setSelectedTime(""); // Reset selectedTime when the date changes
    onDateChange(newSelectedDate); // Notify the parent component of the date change
    setDate(newSelectedDate); // Update the local state as well
  };
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
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
      ></input>
      <label htmlFor="res-email">Email</label>
      <input
        type="email"
        id="res-email"
        onChange={handleEmailChange}
        value={email}
      ></input>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={handleDateChange}
        value={selectedDate}
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={(e) => {setSelectedTime(e.target.value)}} value={selectedTime}>
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
      <Button className="btn booking-btn" type="submit">
        Make a reservation
      </Button>
    </form>
  );
};
export default BookingForm;
