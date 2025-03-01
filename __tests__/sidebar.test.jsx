import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../app/components/sidebar";

describe("Sidebar Component", () => {
  const setIsNavOpenFunc = jest.fn();
  const setIsDirectionActiveFunc = jest.fn();
  const setIsMouseMoveActiveFunc = jest.fn();
  const setIsMouseTimeActiveFunc = jest.fn();

  const initialProps = {
    isNavOpen: false,
    setIsNavOpenFunc,
    isDirectionActive: false,
    setIsDirectionActiveFunc,
    isMouseMoveActive: false,
    setIsMouseMoveActiveFunc,
    isMouseTimeActive: false,
    setIsMouseTimeActiveFunc,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders hamburger icon when nav is closed", () => {
    render(<Sidebar {...initialProps} />);
    expect(screen.getByTestId("hamburger-icon")).toBeInTheDocument();
  });

  test("toggles nav open state on sidebar click", () => {
    render(<Sidebar {...initialProps} />);
    fireEvent.click(screen.getByTestId("hamburger-icon"));
    expect(setIsNavOpenFunc).toHaveBeenCalledWith(expect.any(Function));
  });

  test("renders buttons when nav is open", () => {
    render(<Sidebar {...initialProps} isNavOpen={true} />);
    expect(screen.getByText("Turn Direction Off")).toBeInTheDocument();
    expect(screen.getByText("Turn MouseMove Off")).toBeInTheDocument();
    expect(screen.getByText("Turn MouseTime Off")).toBeInTheDocument();
  });

  test("toggles direction active state on button click", () => {
    render(<Sidebar {...initialProps} isNavOpen={true} />);
    fireEvent.click(screen.getByText("Turn Direction Off"));
    expect(setIsDirectionActiveFunc).toHaveBeenCalledWith(expect.any(Function));
  });

  test("toggles mouse move active state on button click", () => {
    render(<Sidebar {...initialProps} isNavOpen={true} />);
    fireEvent.click(screen.getByText("Turn MouseMove Off"));
    expect(setIsMouseMoveActiveFunc).toHaveBeenCalledWith(expect.any(Function));
  });

  test("toggles mouse time active state on button click", () => {
    render(<Sidebar {...initialProps} isNavOpen={true} />);
    fireEvent.click(screen.getByText("Turn MouseTime Off"));
    expect(setIsMouseTimeActiveFunc).toHaveBeenCalledWith(expect.any(Function));
  });
});
