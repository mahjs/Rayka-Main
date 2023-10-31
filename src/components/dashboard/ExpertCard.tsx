"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

interface Props {
  index: number;
  title: string;
  orangeIconPath: string;
  darkIconPath: string;
  onClick: (index: number) => void;
}

const ExpertCard: FC<Props> = ({
  index,
  title,
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
      className="relative flex h-[250px] w-[250px] cursor-pointer flex-wrap overflow-hidden rounded-lg bg-[#3D3D3D] px-[1rem] py-[1.5rem] text-white transition-all duration-200 hover:scale-110 hover:bg-[#FEA918] hover:text-[#232323]"
    >
      <span className="mt-8">
        <Image src={iconPath} alt={title + " icon"} width={50} height={50} />
      </span>
      <p className=" text-[2rem] font-bold text-inherit">{title}</p>
      <span className="absolute  -top-32 text-[18rem] font-bold text-white opacity-5">
        {String(index).padStart(2, "0")}
      </span>
    </div>
  );
};

export default ExpertCard;
