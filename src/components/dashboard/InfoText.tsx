import React, { FC } from "react";

interface Props {
  title: string;
  text: string;
}

const InfoText: FC<Props> = ({ title, text }) => {
  return (
    <div className="flex-col items-center justify-center gap-5">
      <p className="text-center text-[3rem] font-bold text-[#FEA918] md:text-[6rem]">
        {title}
      </p>
      <p className="body text-center font-bold text-white md:text-[2rem]">
        {text}
      </p>
    </div>
  );
};

export default InfoText;
