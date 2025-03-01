"use client";
import React from "react";
import Sidebar from "./components/sidebar";
import "./page.css";
import SpinningIcon from "./components/spinning-icon";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isDirectionActive, setIsDirectionActive] = React.useState(false);
  const [isMouseMoveActive, setIsMouseMoveActive] = React.useState(false);
  const [isMouseTimeActive, setIsMouseTimeActive] = React.useState(false);

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
