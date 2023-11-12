import React, { FC } from "react";
import Form from "./Form";
import Image from "next/image";
import insta from "../../../../public/social-img/insta.svg";
import telegram from "../../../../public/social-img/telegram.svg";
import linkedin from "../../../../public/social-img/linkedin.svg";
import Link from "next/link";

/**
 * Represents the structure of a social media link.
 * @interface
 * @property {string} src - The image source URL for the social media icon.
 * @property {string} alt - The alternative text for the social media icon.
 * @property {string} href - The URL to the social media page.
 */
interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

/**
 * A constant array containing objects with information about social media links.
 */
const socialLinks: SocialLink[] = [
  { src: insta, alt: "Instagram logo", href: "https://www.instagram.com" },
  { src: telegram, alt: "Telegram logo", href: "https://www.telegram.me" },
  { src: linkedin, alt: "LinkedIn logo", href: "https://www.linkedin.com" },
];

/**
 * Renders a clickable social media icon that links to a social media page.
 * Utilizes Next.js's Image and Link components for optimized images and routing.
 *
 * @component
 * @param {SocialLink} props.link - The social link details to be rendered.
 * @returns {React.ReactElement} A React Element containing the clickable icon.
 */
const SocialLinkComponent: React.FC<{ link: SocialLink }> = ({ link }) => (
  <Link
    href={link.href}
    passHref
    target="_blank"
    rel="noopener noreferrer"
    className={link.alt === "Telegram logo" ? "mx-3" : ""}
  >
    <Image src={link.src} alt={link.alt} width={25} height={25} />
  </Link>
);

/**
 * The MessagesForm component is responsible for rendering a form where users can submit their messages.
 * It also displays a set of social media links for additional ways to contact.
 *
 * @component
 * @returns {React.ReactElement} A React Element that includes a title, description, social links, and the form.
 */
const MessagesForm: FC = () => {
  return (
    <div className="mt-10 grid select-none place-items-center p-[1em] md:p-[2.5em] lg:grid-cols-2 lg:p-[5em]">
      <div className="h-full w-full">
        <p className="header-3 text-center text-semiBlack md:text-right">
          دوست داریم صدای <span className="text-primary">شما</span> را بشنویم !
        </p>
        <p className="title-4 mr-1 mt-3 hidden text-semiBlack md:flex">
          جهت ارتباط با تیم رایکا فرم زیر را تکمیل کنید. <br /> تیم پشتیبانی در
          اسروع وقت با شما تماس خواهند گرفت !
        </p>
        <p className="title-3 mr-1 mt-3 text-center text-semiBlack md:hidden">
          جهت ارتباط با تیم رایکا فرم زیر را تکمیل کنید. <br /> تیم پشتیبانی در
          اسروع وقت با شما تماس خواهند گرفت !
        </p>
        <div className="mt-[3em] hidden items-center lg:flex ">
          <p className="title-3 ml-3 text-semiBlack">
            سوالی دارید؟ به ما پیام دهید
          </p>
          {socialLinks.map((link) => (
            <SocialLinkComponent key={link.href} link={link} />
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default MessagesForm;
