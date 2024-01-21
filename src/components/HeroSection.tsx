import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  heading: string;
  subHeading: string;
  childHeading: string;
  image: string;
}

const HeroSection: React.FC<Props> = ({
  heading,
  subHeading,
  childHeading,
  image,
}) => {
  return (
    <div
      className={cn(
        "flex h-[39vh] w-full flex-col justify-center bg-cover bg-center bg-no-repeat pb-5 pt-16 text-center text-white md:h-[60vh] md:pt-0 lg:h-[100vh]",
        {
          "bg-contact-us-image": image === "contact-us",
          "bg-about-us-image": image === "about-us",
          "bg-job-image": image === "job",
        },
      )}
    >
      <h2 className="header-1-plus">{heading}</h2>
      <div className="title-3-plus flex justify-center">
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
