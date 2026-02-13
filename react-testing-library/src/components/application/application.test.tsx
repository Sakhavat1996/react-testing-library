import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Application } from ".";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      // name: "Job Application Form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "heading2",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const labelElement = screen.getByLabelText("Name2");
    expect(labelElement).toBeInTheDocument();

    const labelElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(labelElement2).toBeInTheDocument();

    const nameLabelElement = screen.getByLabelText("Name", {
      selector: "select",
    });
    expect(nameLabelElement).toBeInTheDocument();

    const inputPlaceholderElement =
      screen.getByPlaceholderText("Ad daxil edin");
    expect(inputPlaceholderElement).toBeInTheDocument();

    const getByTextElement = screen.getByText("React Test Library", {
      selector: "div",
    });
    expect(getByTextElement).toBeInTheDocument();

    const valueElement = screen.getByDisplayValue("sakhavat", {
      trim: true,
    });
    expect(valueElement).toBeInTheDocument();

    const altElement = screen.getByAltText("person library");
    expect(altElement).toBeInTheDocument();

    const titleElement = screen.getByTitle("heading-title-element");
    expect(titleElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const name2Element = screen.getByRole("textbox", { name: "Name2" });
    expect(name2Element).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
