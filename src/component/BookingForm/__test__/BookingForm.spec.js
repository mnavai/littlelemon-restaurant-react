import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { MemoryRouter } from "react-router-dom";

describe("BookingForm", () => {
  it("displays error messages for empty fields when submitting", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={[]}
          selectedTime=""
          setSelectedTime={() => {}}
          selectedDate=""
        />
      </MemoryRouter>
    );

    // Select the form
    const form = screen.getByTestId("booking-form");

    // Submit the form without filling in any fields
    fireEvent.submit(form);

    // Check for error messages
    expect(screen.getByTestId("nameError")).toBeInTheDocument();
    expect(screen.getByTestId("emailError")).toBeInTheDocument();
    expect(screen.getByTestId("dateError")).toBeInTheDocument();
    expect(screen.getByTestId("timeError")).toBeInTheDocument();
    expect(screen.getByTestId("guestError")).toBeInTheDocument();
  });

  

  it("does not display error messages when all fields are filled", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["12:00 PM", "1:00 PM"]}
          selectedTime="12:00 PM"
          setSelectedTime={() => {}}
          selectedDate="2023-09-15"
        />
      </MemoryRouter>
    );

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

    expect(screen.queryByTestId("nameError")).toHaveTextContent("Name");
    expect(screen.queryByTestId("emailError")).toHaveTextContent("Email");
    expect(screen.queryByTestId("dateError")).toHaveTextContent("Choose date");
    expect(screen.queryByTestId("timeError")).toHaveTextContent("Choose time");
    expect(screen.queryByTestId("guestError")).toHaveTextContent("Number of guests");
  });
});
