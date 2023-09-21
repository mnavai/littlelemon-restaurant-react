import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
  it("displays error messages for empty fields when submitting", () => {
    render(<BookingForm />);

    // Select the form
    const form = screen.getByTestId("booking-form");

    // Submit the form without filling in any fields
    fireEvent.submit(form);

    // Check for error messages
    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(screen.getByText("Date is required.")).toBeInTheDocument();
    expect(screen.getByText("Time must be selected.")).toBeInTheDocument();
    expect(screen.getByText("Number of guests is required.")).toBeInTheDocument();
  });

  it("displays an error message for an invalid email format", () => {
    render(<BookingForm />);

    // Select the email input field
    const emailInput = screen.getByLabelText("Email");

    // Enter an invalid email format
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    // Submit the form
    fireEvent.submit(screen.getByTestId("booking-form"));

    // Check for the email error message
    expect(screen.getByText("Invalid email format.")).toBeInTheDocument();
  });

  it("does not display error messages when all fields are filled", () => {
    render(<BookingForm />);

    // Select form fields and fill them in
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@gmail.com" } });
    fireEvent.change(dateInput, { target: { value: "2023-09-15" } });
    fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "5" } });

    // Submit the form
    fireEvent.submit(screen.getByTestId("booking-form"));

    // Check that no error messages are displayed
    expect(screen.queryByText("Name is required.")).toBeNull();
    expect(screen.queryByText("Email is required.")).toBeNull();
    expect(screen.queryByText("Date is required.")).toBeNull();
    expect(screen.queryByText("Time must be selected.")).toBeNull();
    expect(screen.queryByText("Number of guests is required.")).toBeNull();
  });
});
