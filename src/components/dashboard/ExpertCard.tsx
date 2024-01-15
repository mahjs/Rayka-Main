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

  return (
    <section
      onClick={() => {
        // if (mobile) return;
        onClick(index - 1);
      }}
      onMouseOver={() => {
        setIconPath(darkIconPath);
      }}
      onMouseOut={() => {
        setIconPath(orangeIconPath);
      }}
      className={`relative flex h-[l20px] w-[150px] cursor-pointer flex-col flex-wrap overflow-hidden rounded-lg ${
        mobile ? "bg-[#FEA918]" : "bg-[#3D3D3D]"
      }  py-[1.5rem] pr-[1.2rem] md:pr-[2.2rem] text-${
        mobile ? "#000" : "white"
      } transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-[#232323] md:h-[250px] md:w-[250px] md:gap-10 ${
        mobile ? "justify-self-center" : ""
      }`}
    >
      <span className="md:mt-8">
        <Image
          src={mobile ? darkIconPath : iconPath}
          alt={title + " icon"}
          width={mobile ? 25 : 50}
          height={mobile ? 25 : 50}
          className="h-[25px] w-[25px] md:h-[50px] md:w-[50px]"
        />
      </span>
      <p className="body text-inherit md:text-[1.5rem] md:font-bold">{title}</p>
      <span className="absolute -left-10 -top-12 text-[7rem] font-extrabold text-white opacity-10 md:-left-20 md:-top-24 md:text-[15rem]">
        {String(index).padStart(2, "0")}
      </span>
      <div className="absolute -left-[20%] -top-[35%] h-full w-[50%] rotate-[35deg]  bg-black opacity-10" />
    </section>
  );
};

export default ExpertCard;
