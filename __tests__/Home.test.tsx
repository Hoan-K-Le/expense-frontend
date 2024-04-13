import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have Home text", () => {
  render(<Home />);
  const heading = screen.getByText("Home");

  expect(heading).toBeTruthy();
});
