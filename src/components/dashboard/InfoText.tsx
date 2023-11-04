import React, { FC } from "react";

interface Props {
  title: string;
  text: string;
}

const InfoText: FC<Props> = ({ title, text }) => {
  return (
    <div className="flex-col items-center justify-center gap-5">
      <p className="number text-center text-[#FEA918]">{title}</p>
      <p className="subtitle text-center text-white">{text}</p>
    </div>
  );
};

export default InfoText;
