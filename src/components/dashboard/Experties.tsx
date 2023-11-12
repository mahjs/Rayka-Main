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

const expertiesData = [
  {
    id: 1,
    title: "توسعه ارتباطات اینترنتی",
    name: "توسعه ارتباطات به چه معناست؟",
    orangeIconPath: GlobOrange,
    darkIconPath: Glob,
  },
  {
    id: 2,
    title: "کلود کامپیوتینگ (پردازش ابری)",
    name: "کلود کامپیوتینگ چیست؟",
    orangeIconPath: CloudOrange,
    darkIconPath: Cloud,
  },
  {
    id: 3,
    title: "ساخت ابزارهای هوش مصنوعی",
    name: "هوش مصنوعی چیست؟",
    orangeIconPath: AiOrange,
    darkIconPath: Ai,
  },
  {
    id: 4,
    title: "راه‌اندازی دیتاسنتر در پاپ‌های کل کشور",
    name: "دیتا سنتر و راه‌اندازی آن؟",
    orangeIconPath: DataOrange,
    darkIconPath: Data,
  },
];

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
    <section className="absolute z-20 flex h-[18rem] w-[90%] items-center justify-center lg:w-[80%] lg:rounded-3xl">
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
          } header-5 absolute -top-10 left-[50%] my-10 translate-x-[-50%] whitespace-nowrap text-center text-white`}
        >
          حوضه تخصصی رایکا
        </p>
      </Transition>
      <div className="mt-[8rem] grid grid-cols-2 gap-4 md:mt-[25rem] lg:hidden">
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

      <div className="mt-32 hidden max-w-[100vw] lg:block">
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
      <div className="hidden lg:block">
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
            title={expertiesData[selectedIndex!].title}
            name={expertiesData[selectedIndex!].name}
            iconPath={expertiesData[selectedIndex!].darkIconPath}
          />
        </Transition>
      </div>
    </section>
  );
};

export default Experties;
