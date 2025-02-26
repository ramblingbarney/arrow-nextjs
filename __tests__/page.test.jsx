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

  it("renders a hamburger", () => {
    render(<Page />);
    const hamburger = screen.getByTestId("hamburger-icon");

    expect(hamburger).toBeInTheDocument();
    expect(hamburger.classList.contains("HAMBURGER-ICON")).toBe(true);
  });

  it("click on hamburger to get menu", () => {
    render(<Page />);
    const hamburger = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburger);
    const activateDirection = screen.getByText("Turn Direction Off");

    expect(activateDirection).toBeInTheDocument();
  });

  it("click on menu item changes text", () => {
    render(<Page />);
    const hamburger = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburger);

    const activateDirection = screen.getByText("Turn Direction Off");
    fireEvent.click(activateDirection);
    const activateDirectionOn = screen.getByText("Turn Direction On");

    const activateMouseMove = screen.getByText("Turn MouseMove Off");
    fireEvent.click(activateMouseMove);
    const activateMouseMoveOn = screen.getByText("Turn MouseMove On");

    const activateMouseTime = screen.getByText("Turn MouseTime Off");
    fireEvent.click(activateMouseTime);
    const activateMouseTimeOn = screen.getByText("Turn MouseTime On");

    expect(activateDirectionOn).toBeInTheDocument();
    expect(activateMouseMoveOn).toBeInTheDocument();
    expect(activateMouseTimeOn).toBeInTheDocument();
  });

  it("click on image changes rotation direction", () => {
    render(<Page />);
    const image = screen.getByRole("img");
    const hamburger = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburger);
    const activateDirection = screen.getByText("Turn Direction Off");
    fireEvent.click(activateDirection);
    fireEvent.click(image);

    expect(image.classList.contains("logo-anticlockwise")).toBe(true);
  });

  it("renders a image with expected dimensions", () => {
    render(<Page />);
    const image = screen.getByRole("img");
    expect(image.width).toBe(50);
    expect(image.height).toBe(50);
  });

  it("renders a image with expected dimensions after mouse event", () => {
    render(<Page />);
    const image = screen.getByRole("img");
    const hamburger = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburger);
    const activateMouseMove = screen.getByText("Turn MouseMove Off");
    fireEvent.click(activateMouseMove);
    fireEvent.mouseMove(image, {
      clientX: 600,
      clientY: 600,
    });

    expect(image.width).toBe(60);
    expect(image.height).toBe(60);
  });

  it("renders time elapsed since last mouse move event", async () => {
    render(<Page />);
    const image = screen.getByRole("img");
    const hamburger = screen.getByTestId("hamburger-icon");
    fireEvent.click(hamburger);
    const activateMouseTime = screen.getByText("Turn MouseTime Off");
    fireEvent.click(activateMouseTime);

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
