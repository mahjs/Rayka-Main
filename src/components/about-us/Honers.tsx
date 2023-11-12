"use client";
import React, { useState } from "react";
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
  {
    src: honers3,
    alt: "honers3",
    title: "سرویس‌های بین‌المللی در شبکه ملی کشور",
    text: "استفاده امن و بدون محدودیت از سرویس‌های بین‌المللی در داخل شبکه ملی کشور  برای کاربران",
  },
  {
    src: honers2,
    alt: "honers2",
    title: "CDN",
    text: "انتقال CDN (شبکه تحویل محتوا) بسیاری از پلتفرم‌ها به داخل کشور",
  },
  {
    src: honers1,
    alt: "honers1",
    title: "توسعه شبکه داخلی کشور",
    text: "توسعه شبکه داخلی کشور با استفاده از سرویس‌های بین‌المللی",
  },
  {
    src: honers6,
    alt: "honers6",
    title: "3D V- CACHE",
    text: "اولین کمپانی استفاده کننده از تکنولوژی ذخیره سازی موقت پردازش در ارایه‌های سه بعدی (3D V- CACHE)",
  },
  {
    src: honers5,
    alt: "honers5",
    title: "تامین اطلاعات با سرعت بالا",
    text: "تامین محتوای حیاطی از قبیل آپدیت‌ها و اطلاعات دیتابیسی و  اطلاعات کتابخانه‌های مهم برای برنامه ‌نویس‌ها و دانشگاه‌ها تا ۲۳۰ گیگابیت بر ثانیه",
  },
  {
    src: honers4,
    alt: "honers4",
    title: "Liquid Data Storage",
    text: "اولین کمپانی استفاده کننده از تکنولوژی ذخیره‌سازی مایع (Liquid Data Storage)",
  },
];
const Honers: React.FC<Props> = ({}) => {
  const [textHover, setTextHover] = useState(false);
  const handleMouseEnter = (index) => {
    setTextHover(index);
  };

  const handleMouseLeave = () => {
    setTextHover(null);
  };
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center bg-main-image  py-12 md:mt-[17rem] lg:mt-[8rem]"
      style={{
        backgroundSize: "100%",
      }}
    >
      <p className="title my-5 text-center text-6xl	 font-extrabold	 text-white">
        افتخارات ما
      </p>{" "}
      <div className="mx-auto grid grid-cols-2 gap-4 px-7  md:grid-cols-3 md:gap-8">
        {images.map((image, index) => (
          <div
            className="group relative transition duration-700 ease-in-out hover:text-xl" // Add 'group' class here
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={image.src} alt={image.alt} />
            <div className="absolute inset-0 mx-auto flex items-center rounded-2xl transition-all  duration-300 ease-in-out hover:bg-[#F1790A] hover:text-xl  hover:opacity-50 focus:bg-[#F1790A] focus:opacity-50">
              <span className="subtitle-3 mx-auto px-[1.8rem] text-center text-4xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-xl group-hover:text-black group-focus:text-black">
                {textHover === index ? image.text : image.title}
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
