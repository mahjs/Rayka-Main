"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PageNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="subtitle flex flex-col gap-4">
        <Link className={pathname === "/" ? "text-[#FEA918]" : ""} href="/">خانه</Link>
        <Link className={pathname === "/about-us" ? "text-[#FEA918]" : ""} href="/about-us">درباه‌ما</Link>
        <Link className={pathname === "/contact-us" ? "text-[#FEA918]" : ""} href="/contact-us">ارتباط با ما</Link>
        <Link className={pathname === "/jobs" ? "text-[#FEA918]" : ""}href="/jobs">فرصت‌های شغلی</Link>
    </nav>
  );
};

export default PageNavigation;
