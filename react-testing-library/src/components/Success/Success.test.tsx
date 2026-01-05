import { render, screen } from "@testing-library/react";
import Success from ".";
import { expect, test } from "vitest";

test.skip("renders succdess text", () => {
  render(<Success country="USA" />);
  expect(screen.getByText(/USA/i)).toBeInTheDocument();
});
