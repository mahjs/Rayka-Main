import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import Link from "next/link";

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
    <div className="flex w-full flex-col justify-center bg-main-image pb-5 pt-16 text-center text-white md:h-[500px] md:pt-0">
      <h1 className="header-1">{heading}</h1>
      <div className="subtitle flex justify-center">
        <p>
          <Link href="/">{subHeading}</Link>
        </p>
        <p className="text-primary">
          <Link href="/jobs">{childHeading}</Link>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
