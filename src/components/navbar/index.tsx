"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const pathname = usePathname();
  const RenderNavItem: FC<{ href: string; text: string }> = ({
    href,
    text,
  }) => {
    return (
      <li
        className={`${
          pathname === href ? "text-[#FEA918]" : "text-white"
        } flex-col text-center text-[1.8rem]`}
      >
        <Link href={href}>{text}</Link>
        {pathname === href && <p className="text-inherit -mt-7">.</p>}
      </li>
    );
  };

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

  return (
    <div
      className={`navbar fixed left-0 right-0 top-0 z-50 flex w-full justify-between px-5 py-5 transition-all  duration-500 
       md:pr-20 ${isScrolled ? "bg-[#00000099]" : ""}`}
    >
      <ul className="hidden gap-16 md:flex">
        <RenderNavItem href="/" text="خانه" />
        <RenderNavItem href="/about-us" text="درباره‌ما" />
        <RenderNavItem href="/contact-us" text="ارتباط با ما" />
        <RenderNavItem href="/jobs" text="فرصت‌های شغلی" />
      </ul>
      <ul
        className={`fixed ${
          showNavbar ? "left-0" : "left-full"
        }  top-0  flex h-full w-full flex-col justify-center gap-10 bg-[#000000cc] backdrop-blur-md transition-all duration-500 md:hidden`}
      >
        <button
          onClick={() => setShowNavbar(false)}
          className="absolute left-5 top-2 flex items-center gap-3"
        >
          <p className="miniText text-white">بازگشت</p>
          <Image
            src="/images/arrow.svg"
            width={15}
            height={15}
            alt="arrow icon"
          />
        </button>
        <RenderNavItem href="/" text="خانه" />
        <RenderNavItem href="/about-us" text="درباره‌ما" />
        <RenderNavItem href="/contact-us" text="ارتباط با ما" />
        <RenderNavItem href="/jobs" text="فرصت‌های شغلی" />
      </ul>
      <Image
        onClick={() => setShowNavbar(!showNavbar)}
        className="md:hidden"
        src="/images/menu.svg"
        width={25}
        height={17}
        alt="menu icon"
      />
      <Link href="/" className="mr-auto">
        <Image
          src="/images/rayka-icon.svg"
          width="50"
          height="50"
          alt="rayka icon"
        />
      </Link>
    </div>
  );
};

export default Navbar;