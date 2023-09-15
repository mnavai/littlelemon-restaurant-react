// ConfirmationPage.js
import React from "react";
import Nav from "../component/Navigation/Nav";
import Footer from "../component/Footer/Footer";

const ConfirmationPage = () => {
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
          </div>
          <div className="confirmation-page">
            <h3 className="confirmation-heading">
              Booking has been <span>confirmed!</span>
            </h3>
            <p>Your reservation has been successfully confirmed.</p>
            <p>An email confirmation has been sent to your email address.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ConfirmationPage;
