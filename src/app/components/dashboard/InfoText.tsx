import React, { FC } from "react";

interface Props {
  title: string;
  text: string;
}

const InfoText: FC<Props> = ({ title, text }) => {
  return (
    <div className="flex-col items-center justify-center gap-5">
      <p className="text-center text-[8rem] text-[#FEA918]">{title}</p>
      <p className="text-center text-[1.5rem] text-white">{text}</p>
    </div>
  );
};

export default InfoText;
