"use client";

import React, { FC, use, useEffect, useRef, useState } from "react";

interface Props {
  unit?: string;
  title: number;
  text: string;
}

const InfoText: FC<Props> = ({ title, text, unit }) => {
  const numberRef = useRef<null | HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [showValue, setShowValue] = useState(0);

  useEffect(() => {
    if (!startAnimation || showValue === title) return;
    setTimeout(
      () => setShowValue((prevValue) => Math.min(prevValue + 1, title)),
      22,
    );
  }, [showValue, startAnimation, title]);

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
      <p className="number text-center font-bold text-[#FEA918] md:text-[6rem]">
        {showValue}
        {unit ? unit : ""}+
      </p>
      <p className="body text-center font-bold text-white md:text-[2rem]">
        {text}
      </p>
    </div>
  );
};

export default InfoText;