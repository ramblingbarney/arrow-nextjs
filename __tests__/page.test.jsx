import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders a image", () => {
    render(<Page />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image.classList.contains("logo-clockwise")).toBe(true);
  });

  it("click on image changes rotation direction", () => {
    render(<Page />);

    const image = screen.getByRole("img");

    fireEvent.click(image);

    expect(image.classList.contains("logo-anticlockwise")).toBe(true);
  });
});
