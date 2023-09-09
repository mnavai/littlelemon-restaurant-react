import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe ("Button component", () => {
    it ("should buttons correctly", () => {
        render(<Button>Test Button</Button>)
        const btn = screen.getByTestId('button')
        expect(btn).toHaveTextContent('Test Button')
    })
    it('redners class name correctly', () => {
        render(<Button className='test-btn'></Button>)
        const btn = screen.getByTestId('button')
        expect(btn).toHaveClass('test-btn')
    })
})