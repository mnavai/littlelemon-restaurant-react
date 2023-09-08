import BookingForm from "../component/BookingForm/BookingForm";
import Footer from "../component/Footer/Footer";
import Nav from "../component/Navigation/Nav";
import { useReducer } from "react";

const BookingPage = () => {
    const initialTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    const updateTimes = (state, action) => {
        const { type, selectedDate } = action;

        switch (type) {
            case 'UPDATE_TIMES':
                // You can now customize this logic to update the times based on the selected date.
                // For this example, we'll return the same initial times.
                return initialTimes;
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    const handleDateChange = (selectedDate) => {
        // Dispatch the selectedDate to update the available times.
        dispatch({ type: 'UPDATE_TIMES', selectedDate });
    };

    return (
        <>
            <Nav></Nav>
            <div className="reservation-wrapper">
                <div className="reservation-container">
                    <div className="reservation-text">
                        <h2>Experience the perfect balance of tradition and luxury.</h2>
                        <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition.</em></p>
                        <p>Book a table with us to share in this experience.</p>
                    </div>
                    <div className="reservation-form" role="form">
                        <h1>Reserve a table</h1>
                        <p>Please fill in and submit the form to book your reservation at Little Lemon.</p>
                        {/* Pass handleDateChange as a prop to BookingForm */}
                        <BookingForm
                            availableTimes={availableTimes}
                            onChange={handleDateChange}
                            aria-label="Booking Form"
                        ></BookingForm>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BookingPage;
