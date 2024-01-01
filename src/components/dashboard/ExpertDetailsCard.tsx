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
  const isLastItem = index === arrayLength - 1;
  const descStyle = isLastItem ? "subtitle-1 max-w-[100%] text-justify text-sm" : "subtitle-2 max-w-[100%] text-justify";
  return (
    <section className="relative mx-auto flex h-[100%] w-[90%] flex-col items-center justify-center gap-5 rounded-xl p-5 md:mt-[2rem] md:p-8 lg:mt-0 lg:flex-row">
      <div className="relative ml-auto h-[9rem] w-[12rem] flex-col overflow-hidden rounded-xl bg-primary p-5 md:h-[14rem] md:w-[18rem] lg:h-[14rem] lg:w-[32rem]">
        <div>
          <Image
            src={iconPath}
            width={50}
            height={50}
            alt={`icon for ${title}`}
            className="mb-1 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
          />
        </div>
        <p className="title-3 ">{title}</p>
        <span
          style={{
            textShadow:
              "-3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff",
          }}
          className="absolute -top-8 right-[7.5rem] text-[5rem] font-bold text-white opacity-20 md:-top-20 md:text-[12rem]"
        >
          {String(index).padStart(2, "0")}
        </span>
        <div className="absolute -left-[20%] -top-[35%] h-full w-[50%] rotate-[35deg]  bg-black opacity-10" />
      </div>

      <div className="flex-col text-white">
        <div className="flex justify-between">
          <h3 className="title mb-3">{name}</h3>
        </div>
        <p className={descStyle}>
          {desc}
        </p>
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
