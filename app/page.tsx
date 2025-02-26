"use client";
import { useState, useEffect, useRef } from "react";
import reactLogo from "./react.svg";
import Image from "next/image";
import "./page.css";

export default function Home() {
  const [direction, setDirection] = useState<boolean>(false);
  const target = useRef<HTMLElement>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    x: number;
    y: number;
  }>({ x: 50, y: 50 });

  const [lastTimeStamp, setLastTimeStamp] = useState<number>(0);
  const [displaySeconds, setDisplaySeconds] = useState<number>(0);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDirectionActive, setIsDirectionActive] = useState(false);
  const [isMouseMoveActive, setIsMouseMoveActive] = useState(false);
  const [isMouseTimeActive, setIsMouseTimeActive] = useState(false);

  const handleLogoClick = () => {
    setDirection(!direction);
  };

  const handleDirectionActive = () => {
    setIsDirectionActive(!isDirectionActive);
  };

  const handleMouseTimeActive = () => {
    setIsMouseTimeActive(!isMouseTimeActive);
  };

  const calculateDisplaySeconds = () => {
    const currentTimeStamp = new Date().getTime();
    const timeDifference = currentTimeStamp - lastTimeStamp;
    const seconds = Math.floor(timeDifference / 1000);
    setDisplaySeconds(seconds);
    setLastTimeStamp(currentTimeStamp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    calculateDisplaySeconds();
    if (target.current) {
      const rect = target.current.getBoundingClientRect();
      setImageDimensions({
        x: (rect.left + e.clientX) / 10,
        y: (rect.top + e.clientY) / 10,
      });
    }
  };

  const handleMouseMoveActive = () => {
    setIsMouseMoveActive(!isMouseMoveActive);
  };

  useEffect(() => {
    target.current = document.querySelector(".container");
    target.current?.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="container">
      <div className="sidebar" onClick={() => setIsNavOpen((prev) => !prev)}>
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
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-600 my-8 uppercase">
              <button onClick={handleDirectionActive} className="nav-text">
                Turn Direction {isDirectionActive ? "On" : "Off"}
              </button>
            </li>
            <li className="border-b border-gray-600 my-8 uppercase">
              <button onClick={handleMouseMoveActive} className="nav-text">
                Turn MouseMove {isMouseMoveActive ? "On" : "Off"}
              </button>
            </li>
            <li className="border-b border-gray-600 my-8 uppercase">
              <button onClick={handleMouseTimeActive} className="nav-text">
                Turn MouseTime {isMouseTimeActive ? "On" : "Off"}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo">
        {isMouseMoveActive ? (
          <Image
            src={reactLogo}
            width={imageDimensions.x}
            height={imageDimensions.y}
            className={
              direction && isDirectionActive
                ? "logo react logo-anticlockwise"
                : "logo react logo-clockwise"
            }
            alt="React logo"
            onClick={handleLogoClick}
          />
        ) : (
          <Image
            src={reactLogo}
            width={50}
            height={50}
            className={
              direction && isDirectionActive
                ? "logo react logo-anticlockwise"
                : "logo react logo-clockwise"
            }
            alt="React logo"
            onClick={handleLogoClick}
          />
        )}
        <h1 className="title">
          Time Mouse Stationary{" "}
          <span>{isMouseTimeActive ? displaySeconds : 0}</span>
        </h1>
      </div>
    </div>
  );
}
