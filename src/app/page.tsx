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
    <div className="flex-col">
      {/* Background */}
      <Image
        src="/images/bg-main.webp"
        alt="background image. show a bunch of people sitting around a table"
        layout="fill"
        draggable="false"
        className="-z-10 h-[100vh] w-[100vw] rounded-br-[40rem]"
      />
      <div className="absolute left-0 right-0 top-0 -z-30 h-full w-full bg-[#FEA918]" />

      {/* Top content */}
      <div className="flex h-[100vh] w-[100vw] items-center justify-between">
        <div className="mr-[8rem] flex-col text-white">
          <p className="header-3">شرکت ماورای ابعاد رایکا</p>
          <p className="header-2">
            همگام با <span className="text-[#FEA918]">تکنولوژی</span>
          </p>
          <p className="header-2">
            برای <span className="text-[#FEA918]">آینده‌ای </span>هوشمندتر
          </p>
          <p className="g header-4 max-w-[50%] text-right">
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
      <div className="relative mb-[10rem] mt-[5rem] flex justify-center">
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
        <div className="absolute  z-20 flex w-full justify-evenly">
          {informationData.map((info) => (
            <InfoText key={info.id} title={info.title} text={info.text} />
          ))}
        </div>
      </div>
      <div className="-mb-[5rem] ml-[10%] mt-[8rem] flex items-center justify-center ">
        <JoinRaykaCard />
      </div>
    </div>
  );
}
