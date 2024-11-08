import { render, screen } from "@testing-library/react";
import Home from "../src/app/page"
import '@testing-library/jest-dom';

test("check for text", ()=>{
    render(<Home/>);
    const TextToCheck = screen.getByText("Next Notes");
    expect(TextToCheck).toBeInTheDocument();
})