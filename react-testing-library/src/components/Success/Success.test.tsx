import { render, screen } from "@testing-library/react";
import Success from ".";
import { expect, test } from "vitest";

test("renders succdess text", () => {
  render(<Success country="USAb" />);
  expect(screen.getByText(/USA/i)).toBeInTheDocument();
});
