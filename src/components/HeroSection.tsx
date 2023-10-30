import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";

interface Props {
  heading: string;
  subHeading: string;
  childHeading: string;
}

const HeroSection: React.FC<Props> = ({
  heading,
  subHeading,
  childHeading,
}) => {
  return (
    <div className="relative flex h-[500px] items-center justify-center">
      <Image
        src={heroImage}
        alt="Descriptive alt text"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-10 text-center">
        <h1 className="mb-4 text-8xl font-extrabold		 text-white	">{heading}</h1>
        <h2 className="text-3xl font-medium text-gray-400	">
          {subHeading}{" "}
          <span className="text-3xl font-medium text-primary">
            {childHeading}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
