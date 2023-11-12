"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import Carousel from "@/components/about-us/Carousel";
import { CommentsCard } from "./CommentsCard";

interface Props {}

const Comments: React.FC<Props> = ({}) => {
  const [active, setActive] = useState<number>(1);

  const cardsData = [
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      name: "امیرحسین",
      job: "فرانت-اند",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      name: "مهدی",
      job: "فرانت-اند",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
      name: "مهدی",
      job: "فرانت-اند",
    },
  ];

  return (
    <div className="relative mb-[2.51rem] flex h-[550px] items-start justify-center bg-main-image ">
      <div className="z-10 flex w-full flex-col items-center justify-start gap-2 py-16 md:py-2">
        <h3 className="header-3 text-white">صحبت مدیران</h3>

        <Carousel active={active} setActive={setActive}>
          {cardsData.map((card, i) => (
            <CommentsCard
              key={i}
              text={card.text}
              name={card.name}
              job={card.job}
              isActive={i === active ? true : false} // Pass the isActive prop
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Comments;
