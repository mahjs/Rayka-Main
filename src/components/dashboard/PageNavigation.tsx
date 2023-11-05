"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PageNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="subtitle flex flex-col gap-4">
      <p className={pathname === "/" ? "text-[#FEA918]" : ""}>
        <Link href="/">خانه</Link>
      </p>
      <p className={pathname === "/about-us" ? "text-[#FEA918]" : ""}>
        <Link href="/about-us">درباه‌ما</Link>
      </p>
      <p className={pathname === "/contact-us" ? "text-[#FEA918]" : ""}>
        <Link href="/contact-us">ارتباط با ما</Link>
      </p>
      <p className={pathname === "/jobs" ? "text-[#FEA918]" : ""}>
        <Link href="/jobs">فرصت‌های شغلی</Link>
      </p>
    </div>
  );
};

export default PageNavigation;
