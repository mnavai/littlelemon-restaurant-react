import React, { useEffect, useReducer } from "react";
import BookingForm from "../component/BookingForm/BookingForm";
import Footer from "../component/Footer/Footer";
import Nav from "../component/Navigation/Nav";

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
        const { type, times } = action;

        switch (type) {
            case 'UPDATE_TIMES':
                return times; // Set available times to the times fetched from the API.
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    useEffect(() => {
        // Use the fetchData function to fetch available times for today's date.
        // Pass the selected date (today's date) to the API call.
        fetchData(new Date())
            .then((times) => {
                // Dispatch the times fetched from the API to update availableTimes.
                dispatch({ type: 'UPDATE_TIMES', times });
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const fetchData = async (selectedDate) => {
        try {
            // Use the selectedDate to fetch data from the API.
            const response = await fetch(`your-api-endpoint?date=${selectedDate}`);
            const data = await response.json();
            return data.times; // Assuming the API response contains an array of times.
        } catch (error) {
            throw new Error(error);
        }
    };

    const handleDateChange = (selectedDate) => {
        // Dispatch the selectedDate to update the available times.
        fetchData(selectedDate)
            .then((times) => {
                dispatch({ type: 'UPDATE_TIMES', times });
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    return (
        <>
            <Nav />
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
            <Footer />
        </>
    );
};

export default BookingPage;
