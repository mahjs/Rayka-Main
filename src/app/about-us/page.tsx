/**
 * Page component for displaying information about the company.
 *
 * This component uses several sub-components to structure the about us page.
 * It includes a hero section, an image with description of the company, and
 * sections for honors, persons, and comments. A checkbox is used to toggle
 * additional information in the company description.
 * 
 * The `useState` hook is used for managing the state of the `showMore` boolean,
 * which controls the display of extended company information.
 *

 * Sub-Components:
 *  - `HeroSection`: Displays the main heading and subheadings of the page.
 *  - `Image`: Renders the company's icon.
 *  - `Honers`: Component to display the company's honors.
 *  - `Persons`: Component to display key personnel in the company.
 *  - `Comments`: Component to display comments or testimonials.

 * Usage:
 * ```jsx
 * <Page />
 * ```
 */

"use client";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Honers from "@/components/about-us/Honers";
import React, { useEffect, useState } from "react";
import Persons from "@/components/about-us/Persons";
import Comments from "@/components/about-us/Comments";

import RaykaIcon from "@/assets/images/rayka-icon.svg";

interface Props {}

const AboutUS: React.FC<Props> = ({}) => {
  const [showMore, setShowMore] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Use NodeJS.Timeout for Node environment

  const handleShowMoreChange = () => {
    if (!showMore) {
      setShowMore(true);
    } else {
      const newTimer = setTimeout(() => {
        setShowMore(false);
      }, 600);
      setTimer(newTimer);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);
  return (
    <main className="flex flex-col  gap-36 ">
      <HeroSection
        heading="درباره ما"
        subHeading="خانه -"
        childHeading="درباره ما"
        image="about-us"
      />
      {/* <div className="absolute mx-auto h-[15rem] w-full -rotate-[2deg] items-center rounded-lg bg-[#FEA918] md:w-[80.1%] md:rounded-3xl"> */}

      {/* </div> */}
      <div className=" subtitle-1 flex w-full justify-center">
        <article className="h-[100%] max-h-full w-[90%] flex-col items-center justify-start rounded-lg bg-honors-image bg-cover bg-center bg-no-repeat px-8 py-12 backdrop-brightness-50 md:rounded-3xl md:px-24">
          <Image
            src={RaykaIcon}
            width="50"
            height="50"
            alt="rayka icon"
            className="w-12 md:w-16 "
          />
          <p className="about-5 	text-primary">درباره ما </p>
          <p className="mt-3 text-white">
            شرکت ماورای ابعاد رایکا، در سال 1401 توسط یک تیم 6 نفره متشکل از
            متخصصان جوان و فعالان شبکه، کامپیوتر و ارتباط زیرساختی و
            تکنولوژی‌هایی مانند بلاک‌چین، AI و NFT تاسیس شد و از آن زمان تاکنون
            به یکی از پیشروترین شرکت‌های ارائه‌دهنده خدمات در زمینه توسعه
            زیرساخت‌های اینترنتی کشور، اینترنت اشیا و امور سروری از قبیل کانفیگ
            کردن VDS در ایران تبدیل شده است. &nbsp;
            {!showMore && (
              <label htmlFor="read-more-check-1" className="read-more-label">
                ادامه ...
              </label>
            )}
          </p>
          <input
            id="read-more-check-1"
            type="checkbox"
            className="read-more-check"
            onChange={handleShowMoreChange} // Attach the event handler
          />
          <p className="read-more 	">
            رایکا قبل از اینکه به شرکت تبدیل شود در حوزه‌های مختلف از قبیل بهبود
            زیرساخت‌های شبکه، کلودگیمینگ و ... فعالیت می‌کرد؛ زمانی که به یک سری
            محصولات قابل‌استفاده و چند میلیون کاربر دست پیدا کرد، تصمیم گرفت به
            صورت کاملا رسمی و قانونی با هلدینگ بزرگ تابا تلکام که یکی از
            بزرگترین هلدنیگ‌های زیرساخت ارتباط کشور است، همکاری کند. حاصل این
            همکاری، پیاده‌سازی تمام پروژه‌های توسعه زیرساخت اینترنت در کشور و
            آوردن عصر جدید تکنولوژی به ایران است. در نتیجه امکان استفاده بدون
            محدودیت و امن از سرویس‌های بین‌المللی در شبکه محلی کشور، برای
            کاربران فراهم می‌شود. شرکت رایکا، طیف گسترده‌ای از خدمات را در حوزه
            توسعه زیرساخت‌های اینترنتی ارائه می‌کند. این محصولات و خدمات شامل
            موارد زیر می‌شوند: کلود کامپیوتینگ، ریموت گیمینگ-کلودگیمینگ،
            پروژه‌های تحت‌شبکه مانند سرویس‌های کاهش پینگ، سرویس‌های CDN، بهبود
            زیرساخت‌های شبکه، طراحی فایروال کاملا بومی، دسترسی به فریمورهای
            سرورها، ساخت سیستم‌عامل تلفن همراه بر پایه کرنل لینوکس و اندروید،
            ساخت و ویرایش سیستم‌عامل ویندوز برای کامپیوترها، اینکیریپشن و
            دیکیریپشن (رمزنگاری و رمزشکنی)، راه‌اندازی سرویس‌های ابری مثل
            سرویس‌های کلود و ساخت و ویرایش نرم‌افزارهای بومی روی سخت‌افزارهای
            مدرن مثل کارت‌های گرافیک، بومی‌سازی یک سری از تجهیزات سرور. تعهد به
            کیفیت، نوآوری، مشتری‌مداری و راحتی کاربران برای این سازمان در اولویت
            قرار دارند. ماموریت مجموعه ما این است که به مردم کشورمان کمک کنیم تا
            به راحتی به اینترنت دسترسی داشته باشند، علی الخصوص در دنیای امروز که
            اینترنت بخشی جدایی‌ناپذیر از زندگی‌ها است. ما مفتخریم که تیمی متشکل
            از 50-30 نفر از متخصصان مجرب و متعهد در اختیار داریم تا بتوانیم در
            حوزه عملکرد کامپیوتر، فناوری اطلاعات و اینترنت، دسترسی راحت‌تر و
            بازدهی چند ده برابر بیشتر و البته با قیمتی پایین‌تر نسبت به
            فناوری‌های موجود در کشور به کاربران ارائه دهیم.
            {showMore && (
              <label htmlFor="read-more-check-1" className="read-more-label">
                کم ...
              </label>
            )}
          </p>
        </article>
      </div>

      <Honers />
      {/* <Persons /> */}
      {/* <Comments /> */}
    </main>
  );
};

export default AboutUS;
