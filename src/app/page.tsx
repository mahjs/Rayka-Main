import Image from "next/image";
import Link from "next/link";
import InfoText from "../components/dashboard/InfoText";
import JoinRaykaCard from "@/components/dashboard/JoinRaykaCard";
import Experties from "@/components/dashboard/Experties";

const informationData = [
  {
    id: 1,
    title: 17,
    text: "پروژه موفقیت‌آمیز",
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
      <div className="absolute left-0 right-0 top-0 -z-30 hidden bg-[#FEA918] md:block md:h-[60vh] lg:h-[100vh] lg:w-[90vw]" />

      {/* Top content */}
      <div
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="flex w-[100%] items-center  justify-between bg-main-image pt-16 md:h-[60vh] md:rounded-br-[30rem] md:pt-0 lg:h-[100vh]"
      >
        <div className="flex-col px-5 pb-5 text-white md:mr-[9rem] md:py-10">
          <h1 className="header-3 hidden md:block">شرکت ماورای ابعاد رایکا</h1>
          <p className="header-2 hidden md:block">
            همگام با <span className="text-primary">تکنولوژی</span>
          </p>
          <p className="md:header-2 hidden md:block">
            برای <span className="text-primary">آینده‌ای </span> هوشمندتر
          </p>
          <p className="text-[2rem] font-bold md:hidden">
            <span className="text-primary">نوآوری</span> در فناوری
          </p>
          <p className="text-[2rem] font-bold md:hidden">
            <span className="text-primary">هوشمندی</span> در کسب و کار
          </p>
          <p className="text-right text-white opacity-50 md:mt-0 md:text-[1.2rem] md:opacity-100 lg:max-w-[50%]">
            ما در شرکت ماورای ابعاد رایکا به بهبود سرویس‌های موجود در حوزه
            فناوری و ارتباطات اکتفا نمی‌کنیم؛ ما به رویاهای تحقق نیافته جامه‌ی
            عمل می‌پوشانیم و در کنار هم از خلق آینده‌ای هوشمندتر لذت می‌بریم.
          </p>
        </div>
        <div className="-ml-[3rem] hidden -rotate-90  gap-10 text-white md:flex">
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
        <div className="absolute h-[24rem] w-[90%] -rotate-[2deg] rounded-lg bg-[#FEA918] md:h-[40rem] md:w-[80.1%] md:-rotate-[2deg] md:rounded-3xl lg:h-[18rem] lg:w-[90.1%] lg:-rotate-[1deg]" />
        <div
          style={{
            backgroundSize: "100%",
          }}
          className="relative h-[24rem] w-[90%] flex-col items-center justify-center rounded-lg bg-main-image md:h-[40rem] md:w-[80%] md:rounded-3xl lg:h-[18rem] lg:w-[90%]"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        </div>
        {/* Content */}
        <Experties />
      </div>

      {/* Information Content */}
      <div
        className="relative flex h-[20rem] w-full items-center justify-center  bg-main-image md:mb-[5rem]"
        style={{
          backgroundSize: "100%",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        <div className="absolute z-20 grid w-full grid-cols-2 justify-evenly gap-5 md:flex ">
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

      <div className="z-10 -mb-[2rem] ml-[10%] flex items-center justify-center md:-mb-[5rem]">
        <JoinRaykaCard />
      </div>
    </div>
  );
}
