import React from "react";
import Image from "next/image";
import InfoText from "../dashboard/InfoText";
import honers1 from "@/assets/images/honers1.svg";
import honers2 from "@/assets/images/honers2.svg";
import honers3 from "@/assets/images/honers3.svg";
import honers4 from "@/assets/images/honers4.svg";
import honers5 from "@/assets/images/honers5.svg";
import honers6 from "@/assets/images/honers6.svg";

interface Props {}
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
const images = [
  { src: honers3, alt: "honers3", text: "توسعه شبکه داخلی کشور" },
  {
    src: honers2,
    alt: "honers2",
    text: "توسعه سرویس ها",
  },
  {
    src: honers1,
    alt: "honers1",
    text: "سرویس‌های بین‌المللی در شبکه ملی کشور",
  },
  { src: honers6, alt: "honers6", text: "Liquid Data Storage" },
  { src: honers5, alt: "honers5", text: "تامین اطلاعات با سرعت بالا" },
  { src: honers4, alt: "honers4", text: "3D V- CACHE" },
];
const Honers: React.FC<Props> = ({}) => {
  return (
    <div className="relative mb-[3.63rem] flex  items-start md:mb-[6.63rem] ">
      <Image
        src="/images/bg-main.webp"
        width={800}
        height={800}
        alt="HonersBackground"
        className=" h-[80rem] w-full object-cover  md:h-[94.75rem]"
      />
      <div className="z-1 absolute flex w-full flex-col justify-center gap-y-12 py-24">
        <p className="title my-5 text-center text-6xl	 font-extrabold	 text-white">
          افتخارات ما
        </p>{" "}
        <div className="mx-auto grid grid-cols-2 gap-6 px-7 md:grid-cols-3 md:gap-12">
          {images.map((image, index) => (
            <div className="group relative" key={index}>
              <Image src={image.src} alt={image.alt} />
              <div className="absolute inset-0 mx-auto flex items-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-primary hover:opacity-50">
                <span className=" subtitle-1 mx-auto px-[1.8rem] text-center text-4xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-black">
                  {image.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className=" grid w-full grid-cols-2 justify-evenly gap-5 md:flex ">
          {informationData.map((info) => (
            <InfoText key={info.id} title={info.title} text={info.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Honers;
