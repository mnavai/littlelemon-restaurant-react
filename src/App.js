import React from 'react';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking'
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Booking' element={<Booking />}></Route>
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking />}></Route>
      </Routes>
    </>
  );
}
export default App;
