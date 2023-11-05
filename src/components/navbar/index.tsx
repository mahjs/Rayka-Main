"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import NavbarItem from "./components/NavbarItem";

const Navbar: FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Make menu close after choosing one page.
  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  // Make body not scrollable after menu opened
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNavbar]);

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <div
      className={`navbar fixed left-0 right-0 top-0 z-50 flex w-full justify-between px-5 py-5 transition-all  duration-500 
       md:pr-20 ${isScrolled ? "bg-[#00000099]" : ""}`}
    >
      <ul className="hidden gap-16 md:flex">
        <NavbarItem href="/" text="خانه" />
        <NavbarItem href="/about-us" text="درباره‌ما" />
        <NavbarItem href="/contact-us" text="ارتباط با ما" />
        <NavbarItem href="/jobs" text="فرصت‌های شغلی" />
      </ul>
      <ul
        className={`fixed ${
          showNavbar ? "left-0" : "left-full"
        }  top-0  flex h-full w-full flex-col justify-center gap-10 bg-[#000000cc] backdrop-blur-md transition-all duration-500 md:hidden`}
      >
        <button
          onClick={() => setShowNavbar(false)}
          className="absolute left-9 top-8 flex items-center gap-3"
        >
          <p className="body-3 text-white">بازگشت</p>
          <Image
            src="/images/arrow.svg"
            width={15}
            height={15}
            className="h-[15px] w-[15px]"
            alt="arrow icon"
          />
        </button>
        <NavbarItem onClick={handleLinkClick} href="/" text="خانه" />
        <NavbarItem
          onClick={handleLinkClick}
          href="/about-us"
          text="درباره‌ما"
        />
        <NavbarItem
          onClick={handleLinkClick}
          href="/contact-us"
          text="ارتباط با ما"
        />
        <NavbarItem
          onClick={handleLinkClick}
          href="/jobs"
          text="فرصت‌های شغلی"
        />
      </ul>
      <Image
        onClick={() => setShowNavbar(!showNavbar)}
        className="h-[17px] w-[25px] md:hidden"
        src="/images/menu.svg"
        width={25}
        height={17}
        alt="menu icon"
      />
      <Link href="/" className="mr-auto">
        <Image
          src="/images/rayka-icon.svg"
          width={50}
          height={50}
          alt="rayka icon"
          className="h-[50px] w-[50px]"
        />
      </Link>
    </div>
  );
};

export default Navbar;
