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

  it("renders a image with expected dimensions", () => {
    render(<Page />);
    const image = screen.getByRole("img");

    expect(image.width).toBe(10);
    expect(image.height).toBe(10);
  });

  it("renders a image with expected dimensions after mouse event", () => {
    render(<Page />);
    const image = screen.getByRole("img");
    fireEvent.mouseMove(image, {
      clientX: 500,
      clientY: 500,
    });

    expect(image.width).toBe(50);
    expect(image.height).toBe(50);
  });

  it("renders time exlapsed since last mouse move event", async () => {
    render(<Page />);
    const image = screen.getByRole("img");

    const currentTimeStamp = new Date().getTime();
    fireEvent.mouseMove(image, {
      clientX: 500,
      clientY: 500,
    });

    await new Promise((f) => setTimeout(f, 1000));

    fireEvent.mouseMove(image, {
      clientX: 450,
      clientY: 450,
    });

    const text = screen.getByText("1");
    expect(text).toBeInTheDocument();
  });
});
