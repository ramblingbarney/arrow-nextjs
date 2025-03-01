"use client";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import "./page.css";
import SpinningIcon from "./components/spinning-icon";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDirectionActive, setIsDirectionActive] = useState(false);
  const [isMouseMoveActive, setIsMouseMoveActive] = useState(false);
  const [isMouseTimeActive, setIsMouseTimeActive] = useState(false);

  return (
    <div className="container">
      <Sidebar
        isNavOpen={isNavOpen}
        isDirectionActive={isDirectionActive}
        isMouseMoveActive={isMouseMoveActive}
        isMouseTimeActive={isMouseTimeActive}
        setIsNavOpenFunc={setIsNavOpen}
        setIsDirectionActiveFunc={setIsDirectionActive}
        setIsMouseMoveActiveFunc={setIsMouseMoveActive}
        setIsMouseTimeActiveFunc={setIsMouseTimeActive}
      />
      <SpinningIcon
        isDirectionActive={isDirectionActive}
        isMouseMoveActive={isMouseMoveActive}
        isMouseTimeActive={isMouseTimeActive}
      />
    </div>
  );
}
