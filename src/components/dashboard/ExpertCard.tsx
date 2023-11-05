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
    <div
      onClick={() => onClick(index - 1)}
      onMouseOver={() => {
        setIconPath(darkIconPath);
      }}
      onMouseOut={() => {
        setIconPath(orangeIconPath);
      }}
      className={`relative flex h-[l00px] w-[150px] cursor-pointer flex-col flex-wrap overflow-hidden rounded-lg ${
        mobile ? "bg-[#FEA918]" : "bg-[#3D3D3D]"
      }  px-[1rem] py-[1.5rem] text-${
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
      <span className="absolute -top-12 text-[7rem] font-bold text-white opacity-5  md:-left-20 md:-top-24 md:text-[15rem]">
        {String(index).padStart(2, "0")}
      </span>
    </div>
  );
};

export default ExpertCard;
