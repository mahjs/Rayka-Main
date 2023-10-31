"use client";
import React, { useState } from "react";
import Image from "next/image";
import truePerson from "@/assets/images/truePerson.svg";
import cert from "@/assets/images/cert.jpg";

interface Props {}

const Persons: React.FC<Props> = ({}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [truePerson, truePerson, truePerson];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-[4rem] text-7xl font-extrabold">خانواده ی رایکا</p>
      <div className="flex items-center justify-center gap-28">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative  flex h-56 w-[78rem] justify-center gap-9 overflow-hidden rounded-lg md:h-[40rem]">
            <div className="group relative flex flex-col items-center justify-center ">
              <Image
                src={images[currentImageIndex]}
                alt="truePerson"
                className="mb-9 scale-100 transform rounded-2xl grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <p className="text-4xl font-bold">لیلا نادری</p>
              <p className="text-base font-medium">مدیر</p>
            </div>{" "}
            <div className="group relative flex flex-col items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt="truePerson"
                className="mb-9 scale-100 transform rounded-2xl  grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <p className="text-4xl font-bold">لیلا نادری</p>
              <p className="text-base font-medium">مدیر</p>
            </div>{" "}
            <div className="group relative flex flex-col items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt="truePerson"
                className="mb-9 scale-100 transform rounded-2xl  grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <p className="text-4xl font-bold">لیلا نادری</p>
              <p className="text-base font-medium">مدیر</p>
            </div>
          </div>
          <button
            onClick={prevImage}
            type="button"
            className="group absolute left-0 top-6 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev
          >
            <span className="mb-[10rem] ml-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
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
            <span className="mb-[6rem] mr-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
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
