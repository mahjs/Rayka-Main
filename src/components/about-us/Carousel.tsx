"use client";
import React, { ReactNode, ReactElement } from "react";
import arrowRight from "@/assets/images/arrow-right.svg";
import arrowLeft from "@/assets/images/arrow-left.svg";
import Image from "next/image";

const MAX_VISIBILITY = 3;

interface CarouselProps {
  children: ReactNode;
  active: any;
  setActive: any;
}

const Carousel: React.FC<CarouselProps> = ({ children, active, setActive }) => {
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          type="button"
          aria-label="Next"
          className="nav left"
          onClick={() => setActive((i: number) => i - 1)}
        >
          <Image src={arrowLeft} alt="arrow left" />
        </button>
      )}
      {/* @ts-ignore */}
      {React.Children.map(children, (child: ReactElement, i: number) => (
        <div
          className="card-container"
          style={{
            // @ts-ignore
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          aria-label="Next"
          type="button"
          className="nav right"
          onClick={() => setActive((i: number) => i + 1)}
        >
          <Image src={arrowRight} alt="arrow right" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
