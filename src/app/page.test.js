import { render, screen } from "@testing-library/react";
import Home from "./page"
import '@testing-library/jest-dom';

test("check for text", ()=>{
    render(<Home/>);
    const TextToCheck = screen.getByText(/Next/);
    expect(TextToCheck).toBeInTheDocument();
})
test("check for notes", ()=>{
    render(<Home/>);
    const TextToCheck = screen.getByText(/Notes/);
    expect(TextToCheck).toBeInTheDocument();
})