import BookingForm from "../component/BookingForm/BookingForm";
import Footer from "../component/Footer/Footer";
import Nav from "../component/Navigation/Nav";
import { useState } from "react";

const BookingPage = () => {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);
    const handleTimeChange = (e) => {
        setAvailableTimes(e.target.value);
    };
    return(
        <>
            <Nav></Nav>
            <div className="reservation-wrapper">
                <div className="reservation-container">
                <div className="reservation-text">
                        <h2>Experience the perfect balance of tradition and luxury.</h2>
                        <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition.</em></p>
                        <p>Book a table with us to share in this experience.</p>
                    </div>
                    <div className="reservation-form">
                        <h1>Reserve a table</h1>
                        <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                        <BookingForm availableTimes={availableTimes} onChange={handleTimeChange}></BookingForm>
                    </div>
                </div>   
            </div>
            <Footer></Footer>
        </>
    );
}
export default BookingPage;