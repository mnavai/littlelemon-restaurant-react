import { useState } from 'react';
import './BookingForm.css';
import Button from '../Button/Button';
const BookingForm = ({availableTimes, onChange}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date,setDate] = useState('');
    const [number, setNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
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
    
    return (
        <form className='booking-form'> 
            <label htmlFor='res-name'>Name</label>
                <input type='name' id='res-name' onChange={handleNameChange} value={name}></input>
            <label htmlFor='res-email'>Email</label>
                <input type='email' id='res-email' onChange={handleEmailChange} value={email}></input>
            <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={handleDateChange} value={date}></input>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={onChange} value={availableTimes}>
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
            <Button className='btn booking-btn' type='submit'>Make a reservation</Button>
        </form>
    );
};
export default BookingForm;