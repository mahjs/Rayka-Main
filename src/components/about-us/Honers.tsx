import React from "react";
import Image from "next/image";
import InfoText from "../dashboard/InfoText";
import honers1 from "@/assets/images/honers1.png";
import honers2 from "@/assets/images/honers2.png";
import honers3 from "@/assets/images/honers3.png";
import honers4 from "@/assets/images/honers4.png";
import honers5 from "@/assets/images/honers5.png";
import honers6 from "@/assets/images/honers6.png";

interface Props {}
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
    <div
      className="relative mb-14 flex w-full flex-col items-center justify-center  bg-main-image py-12 md:mb-[5rem]"
      style={{
        backgroundSize: "100%",
      }}
    >
      <p className="title my-5 text-center text-6xl	 font-extrabold	 text-white">
        افتخارات ما
      </p>{" "}
      <div className="mx-auto grid grid-cols-2 gap-4 px-7  md:grid-cols-3 md:gap-8">
        {images.map((image, index) => (
          <div className="group relative " key={index}>
            <Image src={image.src} alt={image.alt} />
            <div className="absolute inset-0 mx-auto flex items-center rounded-2xl transition-all duration-300 ease-in-out hover:bg-primary hover:opacity-50 focus:bg-primary focus:opacity-50">
              <span className=" subtitle-1 mx-auto px-[1.8rem] text-center text-4xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-black group-focus:text-black">
                {image.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-9 grid w-full grid-cols-2 justify-evenly gap-5 md:flex ">
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

    // <div className="relative mb-[3.63rem] flex h-[81rem] w-full items-start bg-main-image bg-cover  bg-no-repeat md:mb-[6.63rem] md:h-[94.75rem] ">
    //   <div className="z-1 absolute flex w-full flex-col justify-center gap-y-12 py-6">
    //     <p className="title my-5 text-center text-6xl	 font-extrabold	 text-white">
    //       افتخارات ما
    //     </p>{" "}
    //     <div className="mx-auto grid grid-cols-2 gap-4 px-7  md:grid-cols-3 md:gap-8">
    //       {images.map((image, index) => (
    //         <div className="group relative " key={index}>
    //           <Image src={image.src} alt={image.alt} />
    //           <div className="absolute inset-0 mx-auto flex items-center rounded-2xl transition-all duration-300 ease-in-out hover:bg-primary hover:opacity-50 focus:bg-primary focus:opacity-50">
    //             <span className=" subtitle-1 mx-auto px-[1.8rem] text-center text-4xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-black group-focus:text-black">
    //               {image.text}
    //             </span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className=" grid w-full grid-cols-2 justify-evenly gap-5 md:flex ">
    //       {informationData.map((info) => (
    //         <InfoText key={info.id} title={info.title} text={info.text} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Honers;
