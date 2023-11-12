"use client";
import React, { useState, useEffect, ReactNode, ReactElement } from "react";
import styles from "./Carousel.module.css";
import arrowRight from "@/assets/images/arrow-right.svg";
import arrowLeft from "@/assets/images/arrow-left.svg";
import Image from "next/image";

const MAX_VISIBILITY = 3;

interface CarouselProps {
  children: ReactElement | ReactElement[]; // Corrected type
  active: number; // Should probably have a more specific type
  setActive: (index: number) => void; // More specific type for setActive
}

const Carousel: React.FC<CarouselProps> = ({ children, active, setActive }) => {
  const count = React.Children.count(children);

  return (
    <div className="carousel flex h-full  items-center justify-evenly gap-[7rem]">
      <div className="md:w-[23rem]">
        <button
          aria-label="Next"
          type="button"
          className={`nav right ${active < count - 1 ? "" : "disabled"}`}
          onClick={() => setActive((i) => i + 1)}
          disabled={active >= count - 1}
        >
          <Image src={arrowRight} alt="arrow right" />
        </button>
      </div>

      {React.Children.map(children, (child: ReactElement, i: number) => (
        <div
          className="card-container"
          style={{
            // @ts-ignore
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}

      <div>
        <button
          type="button"
          aria-label="Previous"
          className={`nav left ${active > 0 ? "" : "disabled"}`}
          onClick={() => setActive((i) => i - 1)}
          disabled={active <= 0}
        >
          <Image src={arrowLeft} alt="arrow left" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
