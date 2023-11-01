"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import truPerson from "@/assets/images/truePerson.svg";
interface Props {}

const Comments: React.FC<Props> = ({}) => {
  const testimonials = [
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      imageSrc: truPerson,
      name: "محمدرضا علیمردانی",
      title: "مدیریت لورم ایپسوم",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      imageSrc: truPerson,
      name: "محمدرضا علیمردانی",
      title: "مدیریت لورم ",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      imageSrc: truPerson,
      name: "محمدرضا علیمردانی",
      title: "مدیریت لورم ایپسوم",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (currentImageIndex < testimonials.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
        setIsTransitioning(false);
      }, 300); // Assuming 300ms is your transition time
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex - 1);
        setIsTransitioning(false);
      }, 300); // Assuming 300ms is your transition time
    }
  };

  return (
    <div className="relative mb-[14.35rem] flex h-[500px] items-start justify-center ">
      <Image
        src={heroImage}
        alt="Descriptive alt text"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-10 flex flex-col items-center justify-start gap-10">
        <h1 className="text-6xl font-bold text-white">صحبت مدیران</h1>
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="flex justify-center gap-8">
            <div className="relative mt-4 flex w-[30%] flex-col gap-12">
              <div
                className={`rounded-2xl bg-primary p-[1.90rem] text-justify transition-opacity duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <p>{testimonials[currentImageIndex].text}</p>
                <div className="absolute mt-6 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[40px] border-l-transparent border-r-transparent border-t-primary"></div>
              </div>
              <div className="flex items-center justify-start gap-5">
                <div className="h-20 w-20 rounded-full border-4 border-solid border-primary bg-black">
                  <div className="mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent">
                    <Image
                      src={testimonials[currentImageIndex].imageSrc}
                      alt={testimonials[currentImageIndex].name}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-3xl font-bold text-white">
                    {testimonials[currentImageIndex].name}
                  </p>
                  <p className="text-xl font-medium text-[#8C8C8C]">
                    {testimonials[currentImageIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {currentImageIndex > 0 && (
            <button
              onClick={prevImage}
              type="button"
              className="group absolute left-0 top-6 z-30 flex h-full cursor-pointer items-center justify-center pl-[40rem] focus:outline-none"
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
          )}
          {currentImageIndex < testimonials.length - 1 && (
            <button
              type="button"
              className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center pr-[40rem] focus:outline-none"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
