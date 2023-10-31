import Address from "@/components/contact-us/Address";
import Map from "@/components/contact-us/Map";
import MessagesForm from "@/components/contact-us/MessagesForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BgImage from "../../../public/images/bg-main.webp";

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex-col">
      <Image
        src={BgImage}
        alt="contact-us-bg"
        sizes="100vw"
        style={{
          width: "100%",
          height: "30rem",
          objectFit: "cover",
        }}
      />
      <div className="absolute top-40 w-full text-center text-white">
        <h1 className="text-[7.61406rem] font-[700]">ارتباط با ما</h1>
        <div className="flex justify-center text-[1.82563rem]">
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
