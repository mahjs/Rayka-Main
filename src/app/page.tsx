import Image from "next/image";
import Link from "next/link";
import InfoText from "../components/dashboard/InfoText";
import JoinRaykaCard from "@/components/dashboard/JoinRaykaCard";
import Experties from "@/components/dashboard/Experties";

const informationData = [
  {
    id: 1,
    title: 17,
    text: "پروژه موفقیت‌آمیر",
  },
  {
    id: 2,
    title: 35,
    text: "پرسنل مجرب",
  },
  {
    id: 3,
    title: 7,
    text: "همکای‌های بین‌المللی",
  },
  {
    id: 4,
    title: 1,
    unit: "M",
    text: "تعداد کاربران",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col gap-10 md:gap-20">
      {/* Background */}
      <div className="absolute left-0 right-0 top-0 -z-30 hidden w-full bg-[#FEA918] md:block md:h-[80vh]" />

      {/* Top content */}
      <div
        style={{
          // backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center justify-between bg-main-image bg-[20%] pt-16 md:h-[80vh] md:rounded-br-[30rem] md:pt-0"
      >
        <div className="flex-col px-5 pb-5 text-white md:mr-[8rem] md:py-10">
          <p className="header-a hidden md:block">شرکت ماورای ابعاد رایکا</p>
          <p className="header-2 hidden md:block">
            همگام با <span className="text-primary">تکنولوژی</span>
          </p>
          <p className="header-2">
            برای <span className="text-[#FEA918]">آینده‌ای </span>هوشمندتر
          </p>
          <p className="text-[2rem] font-bold md:hidden">
            <span className="text-primary">نوآوری</span> در فناوری
          </p>
          <p className="text-[2rem] font-bold md:hidden">
            <span className="text-primary">هوشمندی</span> در کسب و کار
          </p>
          <p className="text-right text-white opacity-50 md:mt-0 md:max-w-[50%] md:text-[1.2rem] md:opacity-100">
            ما در شرکت ماورای ابعاد رایکا به بهبود سرویس‌های موجود در حوزه
            فناوری و ارتباطات اکتفا نمی‌کنیم؛ ما به رویاهای تحقق نیافته جامه‌ی
            عمل می‌پوشانیم و در کنار هم از خلق آینده‌ای هوشمندتر لذت می‌بریم.
          </p>
        </div>
        <div className="-ml-[3rem] flex -rotate-90 gap-10 text-white">
          <div>
            <Link href="#">INSTAGRAM</Link>
          </div>
          <div>
            <Link href="#">LINKEDIN</Link>
          </div>
        </div>
      </div>

      {/* Experties Content */}
      <div className="relative flex justify-center md:mb-5">
        {/* Make the backgrounds */}
        <div className="absolute h-[15rem] w-[80.1%] -rotate-[2deg] rounded-3xl bg-[#FEA918]" />
        <div className="relative h-[18rem] w-[80%] flex-col items-center justify-center rounded-3xl bg-main-image">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        </div>

        {/* Content */}
        <Experties />
      </div>

      {/* Information Content */}
      <div className="justify-centerjjj relative mb-[5rem] flex h-[20rem] w-full items-center bg-main-image">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        <div className="absolute z-20 flex w-full justify-evenly ">
          {informationData.map((info) => (
            <InfoText
              key={info.id}
              unit={info.unit}
              title={info.title}
              text={info.text}
            />
          ))}
        </div>
      </div>

      <div className="-mb-[2rem] ml-[10%] flex items-center justify-center md:-mb-[5rem]">
        <JoinRaykaCard />
      </div>
    </div>
  );
}
