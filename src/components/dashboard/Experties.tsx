"use client";

import { useState } from "react";
import ExpertCard from "./ExpertCard";
import ExpertDetailsCard from "./ExpertDetailsCard";
import { Transition } from "@headlessui/react";

const expertiesData = [
  {
    id: 1,
    title: "توسعه ارتباطات اینترنتی",
    name: "توسعه ارتباطات به چه معناست؟",
    orangeIconPath: "/images/glob-orange.svg",
    darkIconPath: "/images/glob.svg",
  },
  {
    id: 2,
    title: "کلود کامپیوتینگ (پردازش ابری)",
    name: "کلود کامپیوتینگ چیست؟",
    orangeIconPath: "/images/cloud-orange.svg",
    darkIconPath: "/images/cloud.svg",
  },
  {
    id: 3,
    title: "ساخت ابزارهای هوش مصنوعی",
    name: "هوش مصنوعی چیست؟",
    orangeIconPath: "/images/ai-orange.svg",
    darkIconPath: "/images/ai.svg",
  },
  {
    id: 4,
    title: "راه‌اندازی دیتاسنتر در پاپ‌های کل کشور",
    name: "دیتا سنتر و راه‌اندازی آن؟",
    orangeIconPath: "/images/data-orange.svg",
    darkIconPath: "/images/data.svg",
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
    <div className="absolute z-20 h-[18rem] w-[80%] flex-col items-center justify-center rounded-3xl">
      <p className="title-2 my-5 text-center text-white">حوضه تخصصی رایکا</p>
      <Transition
        show={showExperties}
        enter="transition-all duration-500 "
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-1 translate-y-0"
        leave="transition-all duration-500"
        leaveFrom="opacity-1 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <div className="flex w-full justify-center gap-10">
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
          handleClickClose={handleCloseButtonClick}
          key={selectedIndex}
          title={expertiesData[selectedIndex!].title}
          name={expertiesData[selectedIndex!].name}
          iconPath={expertiesData[selectedIndex!].darkIconPath}
        />
      </Transition>
    </div>
  );
};

export default Experties;
