"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * Page navigation on the footer. a simple list of links
 *
 */

const PageNavigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="title-4 flex flex-col gap-8">
        {/* <li>
          <Link className={pathname === "/" ? "text-[#FEA918]" : ""} href="/">
            خانه
          </Link>
        </li> */}
        <li>
          <Link
            className={pathname === "/about-us" ? "text-[#FEA918]" : ""}
            href="/about-us"
          >
            درباره‌ما
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/contact-us" ? "text-[#FEA918]" : ""}
            href="/contact-us"
          >
            ارتباط با ما
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/jobs" ? "text-[#FEA918]" : ""}
            href="/jobs"
          >
            فرصت‌های شغلی
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
