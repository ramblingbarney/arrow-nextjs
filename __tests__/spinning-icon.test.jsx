import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SpinningIcon from "../app/components/spinning-icon";

describe("SpinningIcon", () => {
  it("renders the logo and title", () => {
    render(
      <SpinningIcon
        isDirectionActive={false}
        isMouseMoveActive={false}
        isMouseTimeActive={false}
      />,
    );

    expect(screen.getByAltText("React logo")).toBeInTheDocument();
    expect(screen.getByText("Time Mouse Stationary")).toBeInTheDocument();
  });

  it("toggles direction on logo click", () => {
    render(
      <SpinningIcon
        isDirectionActive={true}
        isMouseMoveActive={false}
        isMouseTimeActive={false}
      />,
    );
    const logo = screen.getByAltText("React logo");
    fireEvent.click(logo);
    expect(logo).toHaveClass("logo react logo-anticlockwise");
    fireEvent.click(logo);
    expect(logo).toHaveClass("logo react logo-clockwise");
  });

  it("updates image dimensions on mouse move when isMouseMoveActive is true", () => {
    render(
      <SpinningIcon
        isDirectionActive={false}
        isMouseMoveActive={true}
        isMouseTimeActive={false}
      />,
    );
    const logo = screen.getByAltText("React logo");
    fireEvent.mouseMove(document, { clientX: 100, clientY: 100 });
    expect(logo).toHaveAttribute("width", "50");
    expect(logo).toHaveAttribute("height", "50");
  });
});
