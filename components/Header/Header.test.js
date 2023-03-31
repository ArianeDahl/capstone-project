import Header from "./Header";
import "@testing-library/jest-dom";
import { render as renderDOM, screen } from "@testing-library/react";

it("should render a header", () => {
  const component = renderDOM(<Header />);
  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
});
