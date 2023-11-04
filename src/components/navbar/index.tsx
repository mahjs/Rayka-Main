"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const Navbar = () => {
  const RenderNavItem: FC<{ href: string; text: string }> = ({
    href,
    text,
  }) => {
    const pathname = usePathname();

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

  return (
    <div
      className={`navbar fixed left-0 right-0 top-0 z-50 flex w-full justify-between px-5 py-5 transition-all  duration-500 
       md:pr-20 ${isScrolled ? "bg-[#00000099]" : ""}`}
    >
      <ul className="subtitle flex gap-16">
        <RenderNavItem href="/" text="خانه" />
        <RenderNavItem href="/about-us" text="درباه‌ما" />
        <RenderNavItem href="/contact-us" text="ارتباط با ما" />
        <RenderNavItem href="/jobs" text="فرصت‌های شغلی" />
      </ul>
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
