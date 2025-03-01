"use client";
import { useState, useEffect, useRef } from "react";
import reactLogo from "./react.svg";
import Image from "next/image";

import "./spinning-icon.css";

interface SpinningIconProps {
  isDirectionActive: boolean;
  isMouseMoveActive: boolean;
  isMouseTimeActive: boolean;
}

export default function SpinningIcon({
  isDirectionActive,
  isMouseMoveActive,
  isMouseTimeActive,
}: SpinningIconProps) {
  const [direction, setDirection] = useState<boolean>(false);
  const target = useRef<HTMLElement>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    x: number;
    y: number;
  }>({ x: 50, y: 50 });

  const [lastTimeStamp, setLastTimeStamp] = useState<number>(0);
  const [displaySeconds, setDisplaySeconds] = useState<number>(0);

  const handleLogoClick = () => {
    setDirection(!direction);
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

  useEffect(() => {
    target.current = document.querySelector(".container");
    target.current?.addEventListener("mousemove", handleMouseMove);
  });

  return (
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
  );
}
