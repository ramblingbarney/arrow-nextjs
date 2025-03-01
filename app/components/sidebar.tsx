"use client";
import "./sidebar.css";

type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

interface SidebarProps {
  isNavOpen: boolean;
  setIsNavOpenFunc: SetStateFunction<boolean>;
  isDirectionActive: boolean;
  setIsDirectionActiveFunc: SetStateFunction<boolean>;
  isMouseMoveActive: boolean;
  setIsMouseMoveActiveFunc: SetStateFunction<boolean>;
  isMouseTimeActive: boolean;
  setIsMouseTimeActiveFunc: SetStateFunction<boolean>;
}

export default function SideBar({
  isNavOpen,
  setIsNavOpenFunc,
  isDirectionActive,
  setIsDirectionActiveFunc,
  isMouseMoveActive,
  setIsMouseMoveActiveFunc,
  isMouseTimeActive,
  setIsMouseTimeActiveFunc,
}: SidebarProps) {
  return (
    <div className="sidebar" onClick={() => setIsNavOpenFunc((prev) => !prev)}>
      <div
        className={isNavOpen ? "hidden" : "HAMBURGER-ICON space-y-2"}
        data-testid="hamburger-icon"
      >
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>
      <div
        className={isNavOpen ? "" : "hidden"}
        onClick={() => setIsNavOpenFunc((prev: boolean) => !prev)}
      >
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-600 my-8 uppercase">
            <button
              onClick={() => setIsDirectionActiveFunc((prev: boolean) => !prev)}
              className="nav-text"
            >
              Turn Direction {isDirectionActive ? "On" : "Off"}
            </button>
          </li>
          <li className="border-b border-gray-600 my-8 uppercase">
            <button
              onClick={() => setIsMouseMoveActiveFunc((prev: boolean) => !prev)}
              className="nav-text"
            >
              Turn MouseMove {isMouseMoveActive ? "On" : "Off"}
            </button>
          </li>
          <li className="border-b border-gray-600 my-8 uppercase">
            <button
              onClick={() => setIsMouseTimeActiveFunc((prev: boolean) => !prev)}
              className="nav-text"
            >
              Turn MouseTime {isMouseTimeActive ? "On" : "Off"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
