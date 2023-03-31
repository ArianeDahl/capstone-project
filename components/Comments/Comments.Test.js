import Comments from "./Comments";
import { shallow } from "enzyme";
import { render as renderDOM, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render a submit button", () => {
  const component = renderDOM(<Comments />);
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
});
