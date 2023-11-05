"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  onClick?: () => void;
  href: string;
  text: string;
}

const NavbarItem: FC<Props> = ({ onClick, href, text }) => {
  const pathname = usePathname();
  return (
    <li
      onClick={onClick}
      className={`${
        pathname === href ? "text-[#FEA918]" : "text-white"
      } flex-col text-center text-[1.8rem]`}
    >
      <Link href={href}>{text}</Link>
      {pathname === href && <p className="text-inherit -mt-7">.</p>}
    </li>
  );
};

export default NavbarItem;
