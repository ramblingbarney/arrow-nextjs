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
  }>({ x: 10, y: 10 });

  const handleLogoClick = () => {
    setDirection(!direction);
  };

  const handleMouseMove = (e: MouseEvent) => {
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
    <div className="container">
      <Image
        src={reactLogo}
        width={imageDimensions.x}
        height={imageDimensions.y}
        className={
          direction
            ? "logo react logo-anticlockwise"
            : "logo react logo-clockwise"
        }
        alt="React logo"
        onClick={handleLogoClick}
      />
    </div>
  );
}
