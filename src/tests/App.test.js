import { render, screen } from "@testing-library/react";
import App from "../App";

// TODO actually write a test, this is a placeholder
test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
