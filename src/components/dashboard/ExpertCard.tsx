"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

interface Props {
  index: number;
  mobile?: boolean;
  title: string;
  orangeIconPath: string;
  darkIconPath: string;
  onClick: (index: number) => void;
}

/**
 * Show the expert details and make it like a card.
 *
 * @param index - The index of every card in the list.
 * @param title - Title for the card. A brief explanation.
 * @param mobile - Is this card showing on the mobile or not.
 * @param orangeIconPath - The icon in orange color for hover effect
 * @param darkIconPath - The icon in dark color for regular show.
 * @param onClick - onClick handler when clicking on the card.
 */

const ExpertCard: FC<Props> = ({
  index,
  title,
  mobile = false,
  orangeIconPath,
  darkIconPath,
  onClick,
}) => {
  const [iconPath, setIconPath] = useState(
    mobile ? darkIconPath : orangeIconPath,
  );
  return (
    <section
      onClick={() => {
        // if (mobile) return;
        onClick(index - 1);
      }}
      onTouchStart={() => {
        setIconPath(mobile ? orangeIconPath : darkIconPath);
      }}
      onMouseOver={() => {
        setIconPath(mobile ? orangeIconPath : darkIconPath);
      }}
      onMouseOut={() => {
        setIconPath(mobile ? darkIconPath : orangeIconPath);
      }}
      onFocus={() => {
        setIconPath(mobile ? darkIconPath : orangeIconPath);
      }}
      className={`group relative flex h-[130px] w-[140px] cursor-pointer flex-col flex-wrap gap-4 overflow-hidden rounded-lg bg-primary py-[1.5rem] pr-[1.2rem] text-[#232323] transition-all duration-200 hover:scale-110
       hover:bg-[#2E2E2E] hover:text-white 
        focus:scale-110 focus:bg-[#2E2E2E] focus:text-white
        active:scale-110 active:bg-[#2E2E2E] active:text-white
       md:h-[240px] md:w-[260px]
        md:gap-10 md:pr-[2.2rem]
        lg:bg-[#2E2E2E] lg:text-white lg:hover:bg-primary lg:hover:text-[#232323] lg:focus:bg-primary lg:focus:text-[#232323] lg:active:bg-primary lg:active:text-[#232323] ${
          mobile ? "" : ""
        }`}
    >
      <span className="md:mt-8">
        <Image
          src={iconPath}
          alt={title + " icon"}
          width={mobile ? 25 : 50}
          height={mobile ? 25 : 50}
          className="h-[25px] w-[25px] md:h-[50px] md:w-[50px]"
        />
      </span>
      <p
        className="text-inherit text-[.98rem] md:text-[1.5rem] md:font-bold lg:text-[1.6rem]"
        style={{
          fontFamily: "KalamehBold",
          lineHeight: "130%",
        }}
      >
        {title}
      </p>
      <span
        className={`number-2 mob absolute -left-10 -top-12 text-white opacity-[.1] transition-all duration-200 group-hover:opacity-[.1] group-focus:opacity-[.1] group-active:opacity-[.1] md:-left-16 md:-top-20 md:opacity-[.1] lg:-left-[4.5rem] lg:-top-[5rem] lg:opacity-[.03]`}
      >
        {String(index).padStart(2, "0")}
      </span>
      <div className="absolute right-0 top-0 h-[120%] w-[120%] bg-black opacity-10 transition-all duration-200 group-hover:-top-[55%] group-hover:right-[60%] group-hover:rotate-[35deg] group-focus:-top-[55%] group-focus:right-[60%] group-focus:rotate-[35deg] group-active:-top-[55%] group-active:right-[60%] group-active:rotate-[35deg]" />
    </section>
  );
};

export default ExpertCard;
