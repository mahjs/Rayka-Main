/**
 * Honers Component
 *
 * This component displays a set of images and information related to the achievements and honors of a company.
 * It makes use of the `useState` hook from React to manage hover state over the images to toggle between
 * showing the title and detailed text of each honor.
 *
 * The component is structured into two main sections:
 * 1. A grid display of images representing different honors.
 * 2. A list of textual information data highlighting key statistics or achievements.
 *
 * Methods:
 *  - `handleMouseEnter`: Sets the `textHover` state to the index of the hovered image.
 *  - `handleMouseLeave`: Resets the `textHover` state to null.
 *
 * Usage:
 * ```jsx
 * <Honers />
 * ```
 *
 * The component renders a series of images (sourced from the `images` array) in a grid layout. Each image can be hovered over to reveal additional information. Below the images, key statistics or achievements (sourced from the `informationData` array) are displayed.
 */

"use client";
import React, { useEffect, useRef, useState } from "react";
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
    text: "تامین محتوای حیاتی از قبیل آپدیت‌ها و اطلاعات دیتابیسی و  اطلاعات کتابخانه‌های مهم برای برنامه ‌نویس‌ها و دانشگاه‌ها تا ۲۳۰ گیگابیت بر ثانیه",
  },
  {
    src: honers4,
    alt: "honers4",
    title: "Liquid Data Storage",
    text: "اولین کمپانی استفاده کننده از تکنولوژی ذخیره‌سازی مایع (Liquid Data Storage)",
  },
];
const Honers: React.FC<Props> = ({}) => {
  const [textHover, setTextHover] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setTextHover(index);
  };

  const handleMouseLeave = () => {
    setTextHover(null);
  };

  return (
    <div
      className={`bg-coverjustify-center  relative flex w-full flex-col items-center bg-main-image bg-cover bg-no-repeat  py-12 `}
      style={{
        transition: "margin-top 0.5s ease-in-out",
      }}
    >
      <p className="title my-5 text-center text-6xl	 font-extrabold	 text-white">
        افتخارات ما
      </p>{" "}
      <div className="mx-auto grid grid-cols-2 gap-4 px-7  md:grid-cols-3 md:gap-8">
        {images.map((image, index) => (
          <div
            className="group relative"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={image.src} alt={image.alt} />
            <div className="absolute inset-0 mx-auto flex items-center justify-center rounded-2xl hover:bg-[rgba(241,121,10,0.5)] focus:bg-[rgba(241,121,10,0.5)]">
              <span
                className={`subtitle-3 mx-auto px-[1.8rem] text-center  transition-all duration-500 ease-in-out ${
                  textHover === index ? "animate-fadeIn" : "text-primary"
                } hover:text-black`}
              >
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
  );
};

export default Honers;

{
  /* <div className="absolute inset-0 mx-auto flex items-center justify-center rounded-2xl hover:bg-[rgba(241,121,10,0.2)] focus:bg-[rgba(241,121,10,0.5)]">
  <span
    className={`subtitle-3 mx-auto px-[1.8rem] text-center text-4xl font-semibold transition-all duration-500 ease-in-out ${
      textHover === index ? "animate-fadeIn" : "text-primary"
    } hover:text-black`}
  >
    {textHover === index ? image.text : image.title}
  </span>
</div>; */
}
