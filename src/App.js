import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking'
import { Route, Routes } from 'react-router-dom';
import './App.css';
//App - starting point
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Booking' element={<Booking />}></Route>
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
