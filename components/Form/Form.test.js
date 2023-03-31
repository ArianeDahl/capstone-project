import Form from "./Form";
import "@testing-library/jest-dom"; // add this line
import { render, screen } from "@testing-library/react";

it("should render a title", () => {
  render(<Form />);
  const title = screen.getByText("You may leave a comment here:");
  expect(title).toBeInTheDocument();
});

it("should render a name field", () => {
  render(<Form />);
  const nameField = screen.getByLabelText("Your name:");
  expect(nameField).toBeInTheDocument();
});

it("should render a submit button", () => {
  render(<Form />);
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
});
