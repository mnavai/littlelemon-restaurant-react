import { useState } from 'react';
import './BookingForm.css';
const BookingForm = () => {
    const [name, setName] = useState('')
    const [date,setDate] = useState('');
    const [number, setNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
    }
    const handleTimeChange = (e) => {
        setAvailableTimes(e.target.value);
    };

    return (
        <form className='booking-form'> 
            <label htmlFor='res-name'>Name</label>
                <input type='name' id='res-name' onChange={handleNameChange} value={name}></input>
            <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={handleDateChange} value={date}></input>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={handleTimeChange} value={availableTimes}>
                {availableTimes.map((time) => (
                <option key={time} value={time}>
                    {time}
                </option>
            ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleNumberChange} value={number}></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleOccasionChange} value={occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    );
};
export default BookingForm;