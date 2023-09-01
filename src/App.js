import React from 'react';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App =  () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/confirmedbooking' element={<ConfirmedBooking />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
