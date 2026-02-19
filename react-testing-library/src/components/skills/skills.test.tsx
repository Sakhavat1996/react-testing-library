import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import { Skills } from "./skills";
import { skills } from "../../data";

describe("Skills component", () => {
  it("renders the skills list correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("if skills prop is not provided, it should render an empty list", () => {
    render(<Skills />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  test("renders the correct number of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test("renders start learning button after login", () => {
    render(<Skills />);
    const startLearningButton = screen.queryByRole("button", {
      name: /start learning/i,
    });
    console.log({ startLearningButton });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("renders start learning button after login", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByText(
      /start learning/i,
      {},
      { timeout: 2000 },
    );
    expect(startLearningButton).toBeInTheDocument();
  });

  test("manual queries", () => {
    const { container } = render(<Skills skills={skills} />);
    const JS = container.querySelector("li.javascript");
    expect(JS).toBeInTheDocument();
  });

  test('click login button and check if "Start Learning" button appears', async () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    loginButton.click();
    const startLearningButton = await screen.findByText(
      /start learning/i,
      {},
      { timeout: 2000 },
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
