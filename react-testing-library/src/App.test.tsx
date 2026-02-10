import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("App component", () => {
  test.skip("renders hello text", () => {
    render(<App />);
    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });

  describe("App-component-footer", () => {
    test("app-footer", () => {
      render(<App />);
      expect(screen.getByText(/footer/i)).toBeInTheDocument();
    });
  });
});
