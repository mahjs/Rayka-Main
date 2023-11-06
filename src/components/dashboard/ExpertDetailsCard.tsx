import Image from "next/image";
import { FC } from "react";

interface Props {
  index: number;
  title: string;
  name: string;
  iconPath: string;
  handleClickClose: () => void;
}

const ExpertDetailsCard: FC<Props> = ({
  index,
  title,
  iconPath,
  name,
  handleClickClose,
}) => {
  return (
    <div className="relative mx-auto flex h-[100%] w-[90%] items-center justify-center gap-10 rounded-xl px-10 py-5">
      <div className="relative min-h-[14rem] min-w-[14rem] flex-col overflow-hidden rounded-xl bg-primary p-5">
        <div>
          <Image
            src={iconPath}
            width={50}
            height={50}
            alt={`icon for ${title}`}
            className="mb-3 h-[50px] w-[50px]"
          />
        </div>
        <p className="subtitle">{title}</p>
        <span className="absolute -top-24 right-14 text-[6rem] font-bold text-white opacity-20 md:text-[14rem]">
          {String(index).padStart(2, "0")}
        </span>
        <div className="absolute -left-[20%] -top-[35%] h-full w-[50%] rotate-[35deg]  bg-black opacity-10" />
      </div>

      <div className="flex-col text-white">
        <div className="flex justify-between">
          <h3 className="subtitle-1 mb-3">{name}</h3>
          <button
            onClick={handleClickClose}
            className="flex items-center gap-3"
          >
            <p className="Btn-2 text-white">بازگشت</p>
            <Image
              src="/images/arrow.svg"
              width={15}
              height={15}
              alt="arrow icon"
            />
          </button>
        </div>
        <p className="Body max-w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          beatae ipsum voluptatibus saepe id earum minima voluptatem est iusto,
          laborum aut. Repellat tenetur temporibus quod alias dolore assumenda
          non aperiam. Dolores dolor alias culpa corporis!
        </p>
      </div>
    </div>
  );
};

export default ExpertDetailsCard;
