"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PageNavigation = () => {
  const pathname = usePathname();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <p className={pathname === "/" ? "text-[#FEA918]" : ""}>
        <Link href="/">خانه</Link>
      </p>
      <p className={pathname === "/about" ? "text-[#FEA918]" : ""}>
        <Link href="/about">درباه‌ما</Link>
      </p>
      <p className={pathname === "/contact" ? "text-[#FEA918]" : ""}>
        <Link href="/contact">ارتباط با ما</Link>
      </p>
      <p className={pathname === "/career" ? "text-[#FEA918]" : ""}>
        <Link href="/career">فرصت‌های شغلی</Link>
      </p>
    </div>
  );
};

export default PageNavigation;
