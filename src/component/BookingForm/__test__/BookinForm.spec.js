import { render, screen } from "@testing-library/react";
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
    })
})

