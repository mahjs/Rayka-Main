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
    <div className="flex w-full flex-col justify-center bg-main-image bg-no-repeat bg-cover pb-5 pt-16 text-center text-white md:h-[500px] md:pt-0">
      <h2 className="header-1">{heading}</h2>
      <div className="title-4 flex justify-center">
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
