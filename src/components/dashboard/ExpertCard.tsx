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
  const [iconPath, setIconPath] = useState(orangeIconPath);
  const [isHoveredMobile, setIsHoveredMobile] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <section
      onClick={() => {
        // if (mobile) return;
        onClick(index - 1);
      }}
      onTouchStart={() => {
        setIconPath(darkIconPath);
        setIsHoveredMobile(true);
      }}
      onTouchEnd={() => {
        setIconPath(orangeIconPath);
        setIsHoveredMobile(false);
      }}
      onMouseOver={() => {
        setIconPath(darkIconPath);
      }}
      onMouseLeave={() => {
        setIconPath(orangeIconPath);
        setIsHoveredMobile(false);
      }}
      className={`group relative flex h-[130px] w-[140px] cursor-pointer flex-col flex-wrap gap-4 overflow-hidden rounded-lg  bg-[#2E2E2E] py-[1.5rem] pr-[1.2rem] transition-all
       duration-200 hover:scale-110
        hover:bg-primary hover:text-[#232323]
        focus:bg-primary focus:text-[#232323] active:bg-primary active:text-[#23232] md:h-[240px] md:w-[260px] md:gap-10 md:pr-[2.2rem] ${
          isHoveredMobile ? "scale-110 bg-primary text-[#232323]" : "text-white"
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
        className={`number-2 mob absolute -left-10 -top-12 text-white opacity-[.05] transition-all duration-200 group-hover:opacity-[.1] group-focus:opacity-[.1] group-active:opacity-[.1] md:-left-16 md:-top-20 md:opacity-[.1] lg:-left-[4.5rem] lg:-top-[5rem] lg:opacity-[.03]`}
      >
        {String(index).padStart(2, "0")}
      </span>
      <div className="absolute right-0 top-0 h-[120%] w-[120%] bg-black opacity-10 transition-all duration-200 group-hover:-top-[55%] group-hover:right-[60%] group-hover:rotate-[35deg] group-focus:-top-[55%] group-focus:right-[60%] group-focus:rotate-[35deg] group-active:-top-[55%] group-active:right-[60%] group-active:rotate-[35deg]" />
    </section>
  );
};

export default ExpertCard;
