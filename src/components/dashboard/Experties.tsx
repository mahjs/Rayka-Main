"use client";

import { useState } from "react";
import ExpertCard from "./ExpertCard";
import ExpertDetailsCard from "./ExpertDetailsCard";
import { Transition } from "@headlessui/react";
import GlobOrange from "@/assets/images/glob-orange.svg";
import Glob from "@/assets/images/glob.svg";
import CloudOrange from "@/assets/images/cloud-orange.svg";
import Cloud from "@/assets/images/cloud.svg";
import AiOrange from "@/assets/images/ai-orange.svg";
import Ai from "@/assets/images/ai.svg";
import DataOrange from "@/assets/images/data-orange.svg";
import Data from "@/assets/images/data.svg";

// Experts details for showing the expert cards
const expertiesData = [
  {
    id: 1,
    title: "توسعه ارتباطات اینترنتی",
    name: "توسعه ارتباطات به چه معناست؟",
    desc: "توسعه ارتباطات اینترنتی به بهبود و گسترش زیرساخت‌ها و تکنولوژی‌های اینترنت برای دسترسی بهتر کاربران جهانی اشاره دارد. این شامل ارتقاء شبکه‌ها، گسترش شبکه‌های بی‌سیم و ماهواره‌ای، و تقویت فناوری‌های نوظهور مانند 5G می‌شود. این توسعه امکانات جدیدی را در زمینه‌هایی مانند تجارت الکترونیک، آموزش آنلاین و دورکاری فراهم می‌کند و به تسهیل ارتباطات جهانی و تبادل اطلاعات کمک می‌کند.",
    orangeIconPath: GlobOrange,
    darkIconPath: Glob,
  },
  {
    id: 2,
    title: "کلود کامپیوتینگ (پردازش ابری)",
    name: "کلود کامپیوتینگ چیست؟",
    desc: "کلود کامپیوتینگ یا پردازش ابری یک مدل است که به کاربران اجازه می‌دهد از طریق اینترنت به منابع کامپیوتری مانند سرورها، ذخیره‌سازی، پایگاه‌داده‌ها و نرم‌افزارها دسترسی پیدا کنند. به جای اینکه شرکت‌ها و افراد نیاز به خرید و نگهداری سخت‌افزار و نرم‌افزار خود داشته باشند، می‌توانند این منابع را به صورت آنلاین و بر اساس نیاز و مصرف، از ارائه‌دهندگان خدمات کلود اجاره کنند. این رویکرد به کاهش هزینه‌ها، افزایش مقیاس‌پذیری، و دسترسی آسان به فناوری‌های جدید کمک می‌کند.",
    orangeIconPath: CloudOrange,
    darkIconPath: Cloud,
  },
  {
    id: 3,
    title: "ساخت ابزارهای هوش مصنوعی",
    name: "هوش مصنوعی چیست؟",
    desc: "هوش مصنوعی  (AI)به مجموعه‌ای از فناوری‌ها اشاره دارد که به ماشین‌ها توانایی انجام وظایفی را می‌دهد که معمولاً نیازمند توانایی‌های انسانی مانند تشخیص گفتار، تصمیم‌گیری، ترجمه زبان‌ها و شناسایی الگوها هستند. ساخت ابزارهای هوش مصنوعی معمولاً شامل برنامه‌نویسی پیچیده، استفاده از الگوریتم‌های پیشرفته مانند شبکه‌های عصبی مصنوعی، و یادگیری ماشین است که به سیستم‌ها اجازه می‌دهد از داده‌ها یاد بگیرند و بر اساس آن‌ها بهبود یابند.",
    orangeIconPath: AiOrange,
    darkIconPath: Ai,
  },
  {
    id: 4,
    title: "راه‌اندازی دیتاسنتر در پاپ‌های کل کشور",
    title2: "راه‌اندازی دیتاسنتر ",
    name: "دیتا سنتر و راه‌اندازی آن؟",
    desc: "دیتاسنتر، مرکزی است که در آن تجهیزات ارتباطی و رایانه‌ای مانند سرورها، سیستم‌های ذخیره‌سازی داده و کامپوننت‌های شبکه جمع‌آوری شده‌اند تا داده‌ها را پردازش، ذخیره و منتقل کنند. این مراکز برای اطمینان از دسترسی مداوم و امنیت بالای داده‌ها و خدمات اینترنتی حیاتی هستند. از سوی دیگر، نقطه حضور فیزیکی (Point of Presence - POP) مکانی است که در آن دو یا چند شبکه مختلف به یکدیگر متصل می‌شوند و کاربران می‌توانند به شبکه‌های وسیع‌تر دسترسی پیدا کنند. دیتاسنترها و POPها به‌طور مشترک زیرساخت‌های اصلی لازم برای پشتیبانی از حجم عظیم داده‌ها و ترافیک اینترنتی در سراسر جهان را فراهم می‌آورند.",
    orangeIconPath: DataOrange,
    darkIconPath: Data,
  },
];

/**
 * The component wrapper for showing the expert cards.
 */
const Experties = () => {
  const [showExperties, setShowExperties] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const handleSelectedIndex = (index: number) => {
    setShowExperties(false);

    setTimeout(() => {
      setShowDetails(true);
      setSelectedIndex(index);
    }, 460);
  };

  const handleCloseButtonClick = () => {
    setSelectedIndex(selectedIndex);
    setShowDetails(false);

    setTimeout(() => {
      setShowExperties(true);
    }, 460);
  };

  return (
    <section className="absolute z-20 flex w-[90%] items-center justify-center lg:w-[80%] lg:rounded-3xl">
      <Transition
        show={!showDetails}
        enter="transition-all duration-500 delay-500"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transition-all duration-500 delay-500"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
      >
        <p
          className={`${
            showDetails ? "hidden" : ""
          } header-5 absolute -top-12 left-[50%] my-20 translate-x-[-50%] whitespace-nowrap text-center text-white`}
        >
          حوضه تخصصی رایکا
        </p>
      </Transition>
      <Transition
        show={showExperties}
        enter="transition-all duration-500 "
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-1 translate-y-0"
        leave="transition-all duration-500"
        leaveFrom="opacity-1 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <div className="mt-[6rem] grid grid-cols-2 gap-4 lg:hidden">
          {expertiesData.map((expert) => (
            <ExpertCard
              mobile
              onClick={handleSelectedIndex}
              key={expert.id}
              index={expert.id}
              title={expert.title}
              orangeIconPath={expert.orangeIconPath}
              darkIconPath={expert.darkIconPath}
            />
          ))}
        </div>
      </Transition>

      <div className="mt-36 hidden max-w-[100vw] px-1 lg:block">
        <Transition
          show={showExperties}
          enter="transition-all duration-500 "
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-1 translate-y-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-1 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div className="flex w-full justify-center gap-5 2xl:gap-20">
            {expertiesData.map((expert, index) => (
              <ExpertCard
                onClick={handleSelectedIndex}
                key={expert.id}
                index={index + 1}
                title={expert.title}
                orangeIconPath={expert.orangeIconPath}
                darkIconPath={expert.darkIconPath}
              />
            ))}
          </div>
        </Transition>
      </div>
      <Transition
        show={showDetails}
        enter="transition-all duration-500 "
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-1 translate-y-0"
        leave="transition-all duration-500"
        leaveFrom="opacity-1 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <ExpertDetailsCard
          index={selectedIndex! + 1}
          handleClickClose={handleCloseButtonClick}
          key={selectedIndex}
          title={
            expertiesData[selectedIndex!].title2 ||
            expertiesData[selectedIndex!].title
          }
          name={expertiesData[selectedIndex!].name}
          desc={expertiesData[selectedIndex!].desc}
          iconPath={expertiesData[selectedIndex!].darkIconPath}
          arrayLength={expertiesData.length}
        />
      </Transition>
    </section>
  );
};

export default Experties;
