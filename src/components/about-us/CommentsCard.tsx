import Image from "next/image";
import truPerson from "@/assets/images/truePerson.svg";
interface CardProps {
  text: string;
  name: string;
  job: string;
}
export const CommentsCard: React.FC<CardProps> = ({ text, name, job }) => (
  <div className=" flex justify-center gap-8">
    <div className="  flex flex-row-reverse justify-center gap-8">
      <div
        className={`relative mt-4 flex w-[20rem] flex-col gap-12 md:w-[32rem] `}
      >
        <div className={`rounded-2xl bg-primary p-[1.90rem] text-justify`}>
          <p>{text}</p>
          <div
            className={`absolute mt-6 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[40px] border-primary border-l-transparent border-r-transparent `}
          ></div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <div className="h-20 w-20 rounded-full border-4 border-solid border-primary bg-black">
            <div className="mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent">
              <Image
                src={truPerson}
                alt="trueperson"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold text-white">{name}</p>
            <p className="text-xl font-medium text-[#8C8C8C]">{job}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
