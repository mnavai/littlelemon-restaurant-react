import React, { useReducer } from "react";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage"
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  const updateTimes = (state, action) => {
    const { type, times } = action;

    switch (type) {
      case "UPDATE_TIMES":
        return times; // Set available times to the times fetched from the API.
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              aria-label="Booking Form"
            />
          }
        />
        <Route path="/ConfirmedBooking" element={<ConfirmationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
