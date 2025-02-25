"use client";
import { useState } from "react";
import reactLogo from "./react.svg";
import Image from "next/image";
import "./page.css";

export default function Home() {
  const [direction, setDirection] = useState<boolean>(false);

  const handleLogoClick = () => {
    setDirection(!direction);
  };

  return (
    <div>
      <Image
        src={reactLogo}
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
