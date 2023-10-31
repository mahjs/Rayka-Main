import Address from "@/components/contact-us/Address";
import Map from "@/components/contact-us/Map";
import MessagesForm from "@/components/contact-us/MessagesForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BG_IMAGE_PROPS = {
  src: "/images/bg-main.webp",
  alt: "contact-us-bg",
  width: 1920,
  height: 1080,
  className: "relative h-[30rem] w-full object-cover object-top"
};

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex-col">
      <Image {...BG_IMAGE_PROPS} />
      <div className="absolute top-40 w-full text-center text-white">
        <h1 className="text-[7.61406rem] font-[700]">ارتباط با ما</h1>
        <div className="flex justify-center text-[1.82563rem]">
          <p><Link href="/">خانه-</Link></p>
          <p className="text-primary"><Link href="/contact-us">ارتباط با ما</Link></p>
        </div>
      </div>
      <MessagesForm />
      <Address />
      <Map />
    </div>
  );
};

export default ContactUsPage;
