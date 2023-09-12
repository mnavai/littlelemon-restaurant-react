import React, { useReducer, useState } from "react";
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { fetchAPI } from './util/utils';
import './App.css';

const App =  () => {
  const [availTime, setAvailTime] = useState([]); 
  const initialTimes = async (newDate) => {
    const data = await fetchAPI(newDate);
    console.log("data",data);
  };
  const updateTimes = (state, action) => {
    const { type, times } = action;

    switch (type) {
      case "UPDATE_TIMES":
        return times; // Set available times to the times fetched from the API.
      default:
        return state;
    }
  };

   const handleDateChange = (selectedDate) => {
     dispatch({ type: "UPDATE_TIMES", selectedDate });
     setAvailTime([...selectedDate])
     console.log("selectedDate", selectedDate);
     console.log("availTime",availTime)
   };

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);
  console.log("availableTimes", availableTimes);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes} onChange={handleDateChange} />} />
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
