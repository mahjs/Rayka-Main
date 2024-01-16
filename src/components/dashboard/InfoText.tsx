"use client";

import React, { FC, use, useEffect, useRef, useState } from "react";

interface Props {
  unit?: string;
  title: number;
  text: string;
}

/**
 * Component for showing the number and its text
 *
 * @param unit - Unit for the number
 * @param title - The value for the text.
 * @param text -  Title for the card. It's description.
 */

const InfoText: FC<Props> = ({ title, text, unit }) => {
  const numberRef = useRef<null | HTMLDivElement>(null);
  const [showValue, setShowValue] = useState(0);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  // Animate the value for the text.
  useEffect(() => {
    if (!startAnimation || showValue === title) return;
    setTimeout(
      () => setShowValue((prevValue) => Math.min(prevValue + 1, title)),
      40,
    );
  }, [showValue, startAnimation, title]);

  // Start animation when the component is fully visible.
  useEffect(() => {
    const refElem = numberRef.current as HTMLDivElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(refElem);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    if (refElem) {
      observer.observe(refElem);
    }

    return () => {
      if (refElem) {
        observer.unobserve(refElem);
      }
    };
  });

  return (
    <div ref={numberRef} className="flex-col items-center justify-center gap-5">
      <p className="number text-center text-[#FEA918]">
        {showValue}
        {unit ? unit : ""}+
      </p>
      <p className="title-3 text-center text-[#fff]">{text}</p>
    </div>
  );
};

export default InfoText;
