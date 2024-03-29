import Map from "@/app/contact-us/_Components/Map";
import MessagesForm from "@/app/contact-us/_Components/MessagesForm";
import Link from "next/link";
import React from "react";
import Address from "./_Components/Address";

/**
 * Represents the Contact Us page of the application.
 * This page includes a main banner with navigation links, a message submission form,
 * and a map component for location information.
 *
 * The page is structured with a main banner section at the top followed by the MessagesForm
 * and Map components. The banner section provides quick navigation back to the homepage
 * and highlights the current page - Contact Us.
 *
 * @returns {React.ReactElement} The Contact Us page with a form and map components.
 */
const ContactUsPage: React.FC = () => {
  return (
    <main className="max-width-wide select-none flex-col">
      {/* Main banner section with navigation links */}
      <div className="flex h-[230px] w-full flex-col justify-center bg-contact-us-image bg-cover bg-center bg-no-repeat text-center text-white md:h-[400px] md:p-0 lg:h-[600px]">
        <h2 className="header-1-plus">ارتباط با ما</h2>
        <div className="title-3-plus flex justify-center">
          <p>
            <Link href="/">خانه-</Link>
          </p>
          <p className="text-primary">
            <Link href="/contact-us">ارتباط با ما</Link>
          </p>
        </div>
      </div>
      {/* Message form for user inquiries */}
      <MessagesForm />

      <Address />
      {/* Map component showing location */}
      <Map />
    </main>
  );
};

export default ContactUsPage;
