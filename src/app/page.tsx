import Image from "next/image";
import Link from "next/link";
import ExpertCard from "../components/dashboard/ExpertCard";
import InfoText from "../components/dashboard/InfoText";
import JoinRaykaCard from "@/components/dashboard/JoinRaykaCard";

const expertiesData = [
  {
    id: 1,
    title: "توسعه ارتباطات اینترنتی",
    orangeIconPath: "/images/glob-orange.svg",
    darkIconPath: "/images/glob.svg",
  },
  {
    id: 2,
    title: "کلود کامپیوتینگ (پردازش ابری)",
    orangeIconPath: "/images/cloud-orange.svg",
    darkIconPath: "/images/cloud.svg",
  },
  {
    id: 3,
    title: "ساخت ابزارهای هوش مصنوعی",
    orangeIconPath: "/images/ai-orange.svg",
    darkIconPath: "/images/ai.svg",
  },
  {
    id: 4,
    title: "راه‌اندازی دیتاسنتر در پاپ‌های کل کشور",
    orangeIconPath: "/images/data-orange.svg",
    darkIconPath: "/images/data.svg",
  },
];

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
          <p className="text-[2.5rem] ">شرکت ماورای ابعاد رایکا</p>
          <p className="text-[5.2rem]  font-bold">
            همگام با <span className="text-[#FEA918]">تکنولوژی</span>
          </p>
          <p className="text-[5.2rem] font-bold">
            برای <span className="text-[#FEA918]">آینده‌ای </span>هوشمندتر
          </p>
          <p className="g max-w-[50%] text-right text-[1.5rem]">
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
        <div className="absolute z-20 h-[18rem] w-[80%] flex-col items-center justify-center rounded-3xl">
          <p className="my-5 text-center text-[2.3rem] font-[790] text-white">
            حوضه تخصصی رایکا
          </p>
          <div className="flex w-full justify-center gap-10">
            {expertiesData.map((expert, index) => (
              <ExpertCard
                key={expert.id}
                index={index + 1}
                title={expert.title}
                orangeIconPath={expert.orangeIconPath}
                darkIconPath={expert.darkIconPath}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Information Content */}
      <div className="justify-centerjjj relative mb-[5rem] flex h-[20rem] w-full items-center bg-main-image">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        <div className="absolute z-20 flex w-full justify-evenly">
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
