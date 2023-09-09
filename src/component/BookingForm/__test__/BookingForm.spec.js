import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';


describe("BookingForm component", () => {
  it("should render BookingForm correctly", () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const onChangeMock = jest.fn();
    
    render(<BookingForm availableTimes={availableTimes} onChange={onChangeMock}></BookingForm>);

    // Get form elements by their labels
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const dateInput = screen.getByLabelText('Choose date');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    // const submitButton = screen.getByText('Make a reservation');
  
    // Verify user input
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john.doe@gmail.com');
    expect(dateInput).toHaveValue('2023-09-15');
    expect(guestsInput).toHaveValue(2);
    expect(occasionSelect).toHaveValue('Anniversary');

    // fireEvent.click(screen.getByText('Make a reservation'));

    // expect(onChangeMock).toHaveBeenCalledTimes(1);


  });
});
