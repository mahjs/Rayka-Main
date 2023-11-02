import Image from "next/image";
import Link from "next/link";
import InfoText from "../components/dashboard/InfoText";
import JoinRaykaCard from "@/components/dashboard/JoinRaykaCard";
import Experties from "@/components/dashboard/Experties";

const informationData = [
  {
    id: 1,
    title: "17",
    text: "پروژه موفقیت‌آمیر",
  },
  {
    id: 2,
    title: "35+",
    text: "پرسنل مجرب",
  },
  {
    id: 3,
    title: "7+",
    text: "همکای‌های بین‌المللی",
  },
  {
    id: 4,
    title: "1M+",
    text: "تعداد کاربران",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Background */}
      <Image
        src="/images/bg-main.webp"
        alt="background image. show a bunch of people sitting around a table"
        layout="fill"
        objectFit="cover"
        draggable="false"
        className="-z-10 hidden md:block md:rounded-br-[40rem]"
      />
      <div className="absolute left-0 right-0 top-0 -z-30 hidden h-full w-full bg-[#FEA918] md:block" />

      {/* Top content */}
      <Image
        src="/images/bg-main.webp"
        width={500}
        height={500}
        alt="background"
        className="absolute top-0 -z-10 min-h-[80vw] w-full md:hidden"
      />
      <div className="flex items-center justify-between md:h-[100vh] md:w-[100vw]">
        <div className="flex-col px-5 pb-5 text-white md:mr-[8rem] md:py-10">
          <p className="header-a hidden md:block">شرکت ماورای ابعاد رایکا</p>
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
          <p className="md:header-4 mt-5 text-right text-white opacity-50 md:mt-0 md:max-w-[50%] md:opacity-100">
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
      <div className="relative flex justify-center md:mb-[10rem]">
        {/* Make the backgrounds */}
        <div className="absolute h-[15rem] w-[90.1%] -rotate-[2deg] rounded-lg bg-[#FEA918] md:w-[80.1%] md:rounded-3xl" />
        <div
          style={{
            backgroundSize: "100%",
          }}
          className="relative h-[24rem] w-[90%] flex-col items-center justify-center rounded-lg bg-main-image md:h-[18rem] md:w-[80%] md:rounded-3xl"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        </div>
        {/* Content */}
        <Experties />
      </div>

      {/* Information Content */}
      <div
        className="relative flex h-[20rem] w-full items-center justify-center bg-main-image md:mb-[5rem]"
        style={{
          backgroundSize: "100%",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        <div className="absolute z-20 grid w-full grid-cols-2 justify-evenly gap-5 md:flex ">
          {informationData.map((info) => (
            <InfoText key={info.id} title={info.title} text={info.text} />
          ))}
        </div>
      </div>

      <div className="-mb-[5rem] ml-[10%] flex items-center justify-center md:mt-[8rem] ">
        <JoinRaykaCard />
      </div>
    </div>
  );
}
