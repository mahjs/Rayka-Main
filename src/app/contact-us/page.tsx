import Address from "@/components/contact-us/Address";
import Map from "@/components/contact-us/Map";
import MessagesForm from "@/components/contact-us/MessagesForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BgImage from "../../../public/images/bg-main.webp";

const ContactUsPage: React.FC = () => {
  return (
    <div className="select-none flex-col">
      <Image
        src={BgImage}
        alt="contact-us-bg"
        className="h-[31.3rem] w-full  object-cover"
      />
      <div className="absolute top-40 w-full text-center text-white">
        <h1 className="header-1">ارتباط با ما</h1>
        <div className="subtitle flex justify-center">
          <p>
            <Link href="/">خانه-</Link>
          </p>
          <p className="text-primary">
            <Link href="/contact-us">ارتباط با ما</Link>
          </p>
        </div>
      </div>
      <MessagesForm />
      <Address />
      <Map />
    </div>
  );
};

export default ContactUsPage;
