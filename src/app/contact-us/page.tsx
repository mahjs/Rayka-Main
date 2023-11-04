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
      <div className="flex w-full flex-col justify-center bg-main-image pb-5 pt-16 text-center text-white md:h-[500px] md:p-0">
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
