"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import Carousel from "@/components/about-us/Carousel";
import { CommentsCard } from "./CommentsCard";

interface Props {}

const Comments: React.FC<Props> = ({}) => {
  const cardsData = [
    {
      text: "dhsaskjli",
      name: "hossein",
      job: "backend",
    },
    {
      text: "amitkhodaaa",
      name: "reza",
      job: "ui/ux",
    },
    {
      text: "kdmlkdlk",
      name: "sina",
      job: "devops",
    },
  ];

  return (
    <div className="relative mb-[14.35rem] flex h-[500px] items-start justify-center ">
      <Image
        src={heroImage}
        alt="Descriptive alt text"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-10 flex w-full flex-col items-center justify-start gap-10 py-5">
        <h1 className="title text-white">صحبت مدیران</h1>

        <Carousel>
          {cardsData.map((card, i) => (
            <CommentsCard
              key={i}
              text={card.text}
              name={card.name}
              job={card.job}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Comments;
