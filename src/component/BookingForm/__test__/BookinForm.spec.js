import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm component", () => {
    it("should render BookingFrom correctlt", () => {
        render(<BookingForm></BookingForm>)
    })
    it("should render form fields correctly", () => {
        const nameInput = screen.getByLabelText('Name');
        const dateInput = screen.getByLabelText('Choose date');
        const timeSelect = screen.getByLabelText('Choose time');
        const numberInput = screen.getByLabelText('Number of guests');
        const occasionSelect = screen.getByLabelText('Occasion');
        const submitButton = screen.getByText('Make Your reservation');
        expect(nameInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
        expect(timeSelect).toBeInTheDocument();
        expect(numberInput).toBeInTheDocument();
        expect(occasionSelect).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(dateInput, { target: { value: '2023-09-15' } });
        fireEvent.change(numberInput, { target: { value: '5' } });
        fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

        expect(dateInput.value).toBe('2023-09-15');
        expect(numberInput.value).toBe('5');
        expect(occasionSelect.value).toBe('Anniversary');

    })
})

