import Image from "next/image";
import { FC } from "react";
import Arrow from "@/assets/images/arrow.svg";

interface Props {
  index: number;
  title: string;
  name: string;
  desc: string;
  iconPath: string;
  handleClickClose: () => void;
  arrayLength: number;
}

/**
 * Expert detail card when selecting one of the expert cards.
 *
 * @param index - Index of the card in the card list..
 * @param title - Title of the details expert card.
 * @param iconPath - Icon path for the card.
 * @param name  - The name of the card for showing the the header
 * @param handleClickClose - Click handler for closing the detail card.
 */

const ExpertDetailsCard: FC<Props> = ({
  index,
  title,
  iconPath,
  name,
  desc,
  handleClickClose,
  arrayLength,
}) => {
  return (
    <section className="container relative mx-auto flex h-[100%] w-[90%] flex-col items-center justify-center gap-5 rounded-xl p-5 pt-16 md:mt-[2rem] md:p-8 lg:mt-0 lg:flex-row">
      <div className=" relative ml-auto flex h-[140px] w-[100%] items-center gap-2 overflow-hidden rounded-xl bg-primary p-5 pt-8 md:h-[240px] md:w-[260px] md:flex-col md:items-start lg:h-[12rem] lg:min-w-[14rem]">
        <div>
          <Image
            src={iconPath}
            width={50}
            height={50}
            alt={`icon for ${title}`}
            className="mb-1 h-[70px] w-[70px] md:h-[50px] md:w-[50px]"
          />
        </div>
        <p className="title-detail">{title}</p>
        <span className="number-2 absolute -left-10 -top-12 text-[5rem] font-bold text-white opacity-[.1] md:-left-14 md:-top-16 md:text-[12rem]">
          {String(index).padStart(2, "0")}
        </span>
        <div className="absolute -left-[33%] -top-[40%] h-full w-[50%] rotate-[35deg] bg-black opacity-10  md:-left-[20%] md:-top-[35%]" />
      </div>

      <div className="flex-col text-white">
        <div className="flex justify-between">
          <h3 className="header-4 mb-3">{name}</h3>
        </div>
        <p className="change-2 max-w-[100%] text-sm">{desc}</p>
      </div>
      <button
        onClick={handleClickClose}
        className="absolute left-1 top-8 flex items-center gap-3 md:left-6 md:top-4"
      >
        <p className="btn-2 text-white">بازگشت</p>
        <Image src={Arrow} width={15} height={15} alt="arrow icon" />
      </button>
    </section>
  );
};

export default ExpertDetailsCard;
