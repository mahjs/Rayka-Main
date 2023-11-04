import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  name: string;
  iconPath: string;
  handleClickClose: () => void;
}

const ExpertDetailsCard: FC<Props> = ({
  title,
  iconPath,
  name,
  handleClickClose,
}) => {
  return (
    <div className="relative mx-auto mt-16 flex h-[100%] w-[90%] items-center justify-center gap-10 rounded-xl bg-primary px-10 py-5">
      <button
        onClick={handleClickClose}
        className="absolute -top-[2rem] right-5 flex items-center gap-3"
      >
        <p className="Btn text-white">بازگشت</p>
        <Image
          src="/images/arrow.svg"
          width={15}
          height={15}
          alt="arrow icon"
        />
      </button>
      <div className="min-w-[12rem] flex-col">
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
      </div>

      <div className="flex-col">
        <h3 className="subtitle-1 mb-3">{name}</h3>
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