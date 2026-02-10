import { render, screen } from "@testing-library/react";
import Success from ".";
import { expect, test } from "vitest";

test("ölkə yoxdursa default 'Country' mətni görünməlidir", () => {
  render(<Success />);
  expect(screen.getByText(/Success , Country/i)).toBeInTheDocument();
});

// 2-ci Test: Ölkə OLDUĞU hal (True budağı)
test("ölkə varsa həmin ölkə adı görünməlidir", () => {
  render(<Success country="USA" />);
  expect(screen.getByText(/Success , USA/i)).toBeInTheDocument();
});
