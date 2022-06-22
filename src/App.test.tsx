import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Enter email placeholder text", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter email");
  expect(input).toBeInTheDocument();
});
