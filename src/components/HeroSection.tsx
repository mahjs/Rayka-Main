import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp"

interface Props {
  heading: string;
  subHeading: string;
}

const HeroSection: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <div className="relative flex h-[500px] items-center justify-center">
      <Image 
        src={heroImage}
        alt="Descriptive alt text" 
        className="absolute h-full w-full object-cover"
      />
      <div className="text-center z-10">
        <h1 className="text-white mb-4 text-6xl">{heading}</h1>
        <h2 className="text-gray-400 text-4xl">{subHeading}</h2>
      </div>
    </div>
  );
};

export default HeroSection;
