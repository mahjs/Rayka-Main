import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";

interface Props {}

const Comments: React.FC<Props> = ({}) => {
  return (
    <div className="relative flex h-[500px] items-start justify-center ">
      <Image
        src={heroImage}
        alt="Descriptive alt text"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-10 flex flex-col justify-start py-14">
        <h1 className="	 text-6xl	 font-bold text-white">صحبت مدیران</h1>
      </div>
    </div>
  );
};

export default Comments;
