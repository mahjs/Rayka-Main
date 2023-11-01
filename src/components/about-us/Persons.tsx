"use client";
import React, { useState } from "react";
import Image from "next/image";
import truePerson from "@/assets/images/truePerson.svg";
import cert from "@/assets/images/cert.jpg";

interface Props {}

const Persons: React.FC<Props> = ({}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const imagesPerPage = 3;
  const transitionDuration = 800; // Increased duration for a slower, more subtle effect

  const data = [
    {
      name: "لیلا",
      surname: "حسب",
      images: truePerson,
    },
    {
      name: "نادری",
      surname: "مکوم",
      images: truePerson,
    },
    {
      name: "نادری",
      surname: "مدیسر",
      images: truePerson,
    },
    {
      name: "نادری",
      surname: "مدیسر",
      images: truePerson,
    },
    {
      name: "نادری",
      surname: "مدیسر",
      images: truePerson,
    },
    {
      name: "نادری",
      surname: "مدیسر",
      images: truePerson,
    },
  ];

  const nextImage = () => {
    if (currentImageIndex < data.length / imagesPerPage - 1) {
      setIsTransitioning(true); // Start the animation
      setTimeout(() => {
        setCurrentImageIndex((prev) => prev + 1);
        setIsTransitioning(false); // End the animation
      }, 300); // Change after 300ms
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setIsTransitioning(true); // Start the animation
      setTimeout(() => {
        setCurrentImageIndex((prev) => prev - 1);
        setIsTransitioning(false); // End the animation
      }, 300); // Change after 300ms
    }
  };

  const visibleData = data.slice(
    currentImageIndex * imagesPerPage,
    (currentImageIndex + 1) * imagesPerPage,
  );

  return (
    <div className="mb-[6.69rem] flex flex-col items-center justify-center">
      <p className="mb-[4rem] text-7xl font-extrabold">خانواده ی رایکا</p>
      <div className="flex items-center justify-center gap-28">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div
            className={`relative flex h-56  w-[300rem] max-w-7xl justify-center gap-20 overflow-hidden rounded-lg transition-all duration-300 md:h-[40rem] ${
              isTransitioning ? "translate-x-[-100%] transform" : ""
            }`}
          >
            {visibleData.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center"
              >
                <Image
                  src={item.images}
                  alt="truePerson"
                  className="mb-9 scale-100 transform rounded-2xl grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
                <p className="text-4xl font-bold">{item.name}</p>
                <p className="text-base font-medium">{item.surname}</p>
              </div>
            ))}
          </div>
          <button
            onClick={prevImage}
            type="button"
            className="group absolute left-0 top-6 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev
          >
            <span className="mb-[10rem]  inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            onClick={nextImage} // Call the nextImage function on button click
          >
            <span className="mb-[7rem]  inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Persons;
