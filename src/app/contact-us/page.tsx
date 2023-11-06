import Map from "@/app/contact-us/_Components/Map";
import MessagesForm from "@/app/contact-us/_Components/MessagesForm";
import Link from "next/link";
import React from "react";

const ContactUsPage: React.FC = () => {
  return (
    <div className="select-none flex-col">
      <div className="flex w-full flex-col justify-center bg-main-image bg-no-repeat bg-cover pb-5 pt-16 text-center text-white md:h-[500px] md:p-0">
        <h2 className="header-1">ارتباط با ما</h2>
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
      <Map />
    </div>
  );
};

export default ContactUsPage;
