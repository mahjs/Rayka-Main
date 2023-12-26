"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import User from "../../../assets/images/job-user.svg";
import Link from "next/link";
import headphone from "@/assets/images/headphone.svg";
import Nojob from "../../../assets/images/NoJob.svg";
import ResumeForm from "../_Components/ResumeForm";

interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  postedTime: string;
}

/**
 * Style object for the JobCard component.
 * Utilizes React's CSSProperties for consistent styling and type safety.
 * Defines the background image and layout properties of the job card.
 */

const cardStyle: React.CSSProperties = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

// Array of categories, potentially fetched or static as per use case.
const categories = ["دورکاری", "حضوری", "آموزشی"];

/**
 * CategoryButton component.
 * Renders a button for each job category.
 * @param {string} label - The text label of the button.
 * @returns {JSX.Element} - A styled button element.
 */
const CategoryButton: React.FC<{ label: string }> = ({ label }) => (
  <p className=" rounded-2xl bg-primary px-3.5 py-1.5">{label}</p>
);

const jobsData: Job[] = [
  {
    id: "1",
    title: "پشتیبان سایت",
    description: "شروع دستمزد از  12 میلیون تومان...",
    category: "دورکاری",
    postedTime: "چند دقیقه پیش",
  },
  {
    id: "2",
    title: "پشتیبان سایت",
    description: "شروع دستمزد از  12 میلیون تومان...",
    category: "حضوری",
    postedTime: "چند دقیقه پیش",
  },
  {
    id: "3",
    title: "برنامه نویس فرانت اند",
    description: "شروع دستمزد از  12 میلیون تومان...",
    category: "دورکاری",
    postedTime: "چند دقیقه پیش",
  },
  {
    id: "4",
    title: "برنامه نویس فرانت اند",
    description: "شروع دستمزد از  12 میلیون تومان...",
    category: "حضوری",
    postedTime: "چند دقیقه پیش",
  },
  {
    id: "5",
    title: "برنامه نویس وردپرس",
    description: "شروع دستمزد از  12 میلیون تومان...",
    category: "دورکاری",
    postedTime: "چند دقیقه پیش",
  },
  {
    id: "6",
    title: "برنامه‌نویس اندروید",
    description: "شروع دستمزد از  12 میلیون تومان...",
    category: "حضوری",
    postedTime: "چند دقیقه پیش",
  },
];

const JobCard: React.FC<Job> = ({ id, title, description }) => (
  <div
    style={cardStyle}
    className="mb-[3.5em] flex justify-between rounded-[1em] border border-gray-200 bg-[#fff] p-3 md:w-[24.5rem] md:p-7"
  >
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={headphone}
          alt="headphone"
          className="h-[1.66838rem] w-[1.66863rem]"
        />
        <h2 className="text-[2.11275rem] font-[800] text-primary">{title}</h2>
      </div>
      <p className="mb-4 mt-2 text-[0.76119rem] font-[500] text-[#000] opacity-50">
        {description}
      </p>
      <p className="text-[0.90125rem] font-[500] text-[#000]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <div className="mt-6 flex justify-between">
        <div className="flex gap-1 text-[0.6725rem] text-[#fff]">
          {categories.map((category, index) => (
            <CategoryButton key={index} label={category} />
          ))}
        </div>
        <Link
          href={`../jobs/${id}`}
          className="flex items-center whitespace-nowrap text-[0.74138rem] font-[600] text-primary"
        >
          اطلاعات بیشتر
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="9"
            viewBox="0 0 7 11"
            fill="none"
            className="mr-[.5em]"
          >
            <path
              d="M6.47631 0.744077L6.47621 0.743979C6.3104 0.587967 6.08703 0.501441 5.85547 0.501441C5.6239 0.501441 5.40053 0.587967 5.23473 0.743979L5.23467 0.744028L1.14529 4.59658L1.14524 4.59663C0.9794 4.75306 0.884864 4.96663 0.884864 5.19085C0.884864 5.41507 0.9794 5.62864 1.14524 5.78507L1.14529 5.78512L5.23325 9.63633C5.31404 9.71761 5.41091 9.78247 5.51796 9.82741L5.56253 9.72124L5.51796 9.82741C5.62567 9.87261 5.74169 9.89683 5.85915 9.89878C5.97662 9.90074 6.09344 9.88039 6.20271 9.83881L6.16176 9.7312L6.20271 9.83881C6.31198 9.79723 6.41169 9.73517 6.49572 9.65601C6.57977 9.57683 6.64644 9.48212 6.69137 9.37733C6.73631 9.27252 6.75847 9.15999 6.75635 9.04653C6.75422 8.93307 6.72786 8.82138 6.67906 8.7182C6.63056 8.61567 6.561 8.52381 6.47485 8.4478L3.01768 5.19085L6.47626 1.93256L6.47631 1.93251C6.64215 1.77608 6.73669 1.56252 6.73669 1.3383C6.73669 1.11407 6.64215 0.900507 6.47631 0.744077Z"
              fill="#FEA918"
              stroke="#FEA918"
              strokeWidth="0.230272"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const JobDetails: React.FC = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  useEffect(() => {
    const jobId = window.location.pathname.split("/").pop();
    const job = jobsData.find((job) => job.id === jobId);

    if (job) {
      setSelectedJobTitle(job.title);
    }
  }, [window.location.pathname]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-y-[7em] overflow-x-hidden bg-[#F5F5F5] pt-14">
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <Image src={User} alt="job image" />
        <div className="mt-[10em] text-center lg:ml-[4em]">
          <h2 className="text-[5.61875rem] font-[800]">{selectedJobTitle}</h2>
          <p className="text-[1.65569rem] font-[400] text-[#c3c3c3]">
            توسعه و برنامه نویسی
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-[4em] md:justify-evenly">
        <li className="flex items-center justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="49"
            viewBox="0 0 60 49"
            fill="none"
          >
            <path
              d="M35.419 20.4139L22.0066 10.8375C20.1289 9.49623 17.6342 9.49623 15.7833 10.8375L2.37095 20.4139C0.949242 21.4332 0.117676 23.0427 0.117676 24.7863V46.1656C0.117676 47.641 1.32479 48.8481 2.80015 48.8481H13.53V32.7533H24.2599V48.8481H34.9898C36.4652 48.8481 37.6723 47.641 37.6723 46.1656V24.7863C37.6723 23.0427 36.8407 21.4332 35.419 20.4139Z"
              fill="#FEA918"
            />
            <path
              d="M53.8479 0.563721H29.5447C26.6208 0.563721 24.2603 2.92429 24.2603 5.84819L24.5017 6.08961C24.7163 6.22373 24.9309 6.33103 25.1455 6.46516L38.5578 16.0416C40.5965 17.4901 42.045 19.6361 42.6888 22.0235H48.4025V27.3884H43.0376V32.7534H48.4025V38.1183H43.0376V48.8482H53.8479C56.7718 48.8482 59.1324 46.4876 59.1324 43.5637V5.84819C59.1324 2.92429 56.7718 0.563721 53.8479 0.563721ZM48.4025 16.6585H43.0376V11.2936H48.4025V16.6585Z"
              fill="#111111"
            />
          </svg>
          <p className="mr-4 text-[2.08513rem] font-[600]">امکان دورکاری</p>
        </li>
        <span className="hidden h-10 w-[0.1rem] rounded-xl bg-[#000] opacity-5 lg:flex"></span>
        <li className="flex items-center justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="49"
            viewBox="0 0 55 49"
            fill="none"
          >
            <path
              d="M40.3758 0.563721C42.3896 0.563721 44.2785 0.93738 46.0428 1.6847C47.807 2.43202 49.3396 3.46403 50.6405 4.78073C51.9414 6.09744 52.975 7.63656 53.7413 9.39809C54.5076 11.1596 54.8907 13.0457 54.8907 15.0564C54.8907 16.0884 54.7838 17.1115 54.57 18.1257C54.3561 19.1399 54.0353 20.1186 53.6076 21.0616H41.2312L36.0989 15.7236L27.545 24.2644L15.5695 12.3073L7.01561 21.0616H1.4823C1.05461 20.1186 0.733838 19.1399 0.51999 18.1257C0.306143 17.1115 0.199219 16.0884 0.199219 15.0564C0.199219 13.0457 0.573452 11.1596 1.32192 9.39809C2.07038 7.63656 3.10398 6.10633 4.42271 4.80742C5.74143 3.50851 7.28292 2.4765 9.04716 1.71139C10.8114 0.946277 12.7004 0.563721 14.7141 0.563721C16.6566 0.563721 18.5099 0.928483 20.2742 1.65801C22.0384 2.38753 23.6155 3.43734 25.0055 4.80742L27.545 7.36966L30.0844 4.80742C31.4566 3.43734 33.0248 2.38753 34.7891 1.65801C36.5533 0.928483 38.4156 0.563721 40.3758 0.563721ZM37.8097 24.4779H51.4424L51.0682 24.9049C50.9435 25.0473 50.8098 25.1985 50.6672 25.3587L27.545 48.4188L4.42271 25.3587C4.28014 25.2163 4.14649 25.074 4.02174 24.9316C3.897 24.7893 3.77225 24.6381 3.64751 24.4779H10.4372L15.5695 19.567L27.545 31.5241L36.0989 22.9833L37.8097 24.4779Z"
              fill="#FEA918"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51.4424 24.4778H37.8096L36.0988 22.9832L27.5449 31.524L15.5695 19.5669L10.4371 24.4778H3.64746C3.77221 24.638 3.89695 24.7892 4.02169 24.9316C4.14644 25.0739 4.28009 25.2163 4.42266 25.3586L27.5449 48.4187L50.6672 25.3586C50.8098 25.1985 50.9434 25.0472 51.0681 24.9049L51.4424 24.4778Z"
              fill="black"
            />
          </svg>
          <p className="mr-4 text-[2.08513rem] font-[600]">بیمه تکمیلی</p>
        </li>
        <span className="hidden h-10 w-[0.1rem] rounded-xl bg-[#000] opacity-5 lg:flex"></span>
        <li className="flex items-center justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="49"
            viewBox="0 0 58 49"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.0224 0.563721C31.9539 0.563721 30.9292 0.983875 30.1737 1.73176C29.4182 2.47964 28.9938 3.49398 28.9938 4.55164V6.42198H31.0081C33.9463 6.42198 36.7642 7.5774 38.8419 9.63408C40.9196 11.6907 42.0868 14.4802 42.0868 17.3888V18.0109H57.1941V4.55164C57.1941 3.49398 56.7696 2.47964 56.0141 1.73176C55.2586 0.983875 54.2339 0.563721 53.1655 0.563721H33.0224ZM32.5833 47.9043C33.005 46.6958 33.1266 45.4046 32.9378 44.1397C35.5016 43.6908 37.8238 42.3624 39.4968 40.3876C41.1698 38.4128 42.0868 35.9178 42.0868 33.3405V22.9958H57.1941V44.4309C57.1941 45.4885 56.7696 46.5029 56.0141 47.2507C55.2586 47.9986 54.2339 48.4188 53.1655 48.4188H35.0367C34.1914 48.4202 33.3554 48.2449 32.5833 47.9043ZM51.84 9.28531C51.8614 9.69906 51.7976 10.1128 51.6523 10.5013C51.5071 10.8899 51.2835 11.2451 50.9953 11.5455C50.707 11.8458 50.36 12.085 49.9754 12.2484C49.5908 12.4118 49.1767 12.4961 48.7582 12.4961C48.3396 12.4961 47.9255 12.4118 47.5409 12.2484C47.1563 12.085 46.8093 11.8458 46.521 11.5455C46.2328 11.2451 46.0092 10.8899 45.864 10.5013C45.7188 10.1128 45.6549 9.69906 45.6763 9.28531C45.7167 8.50317 46.059 7.76628 46.6325 7.22683C47.2061 6.68738 47.967 6.3866 48.7582 6.3866C49.5493 6.3866 50.3102 6.68738 50.8838 7.22683C51.4573 7.76628 51.7996 8.50317 51.84 9.28531ZM0.793457 17.3927C0.793457 15.8063 1.43012 14.2847 2.56339 13.1629C3.69666 12.0411 5.2337 11.4109 6.83638 11.4109H31.0081C32.6108 11.4109 34.1478 12.0411 35.2811 13.1629C36.4143 14.2847 37.051 15.8063 37.051 17.3927V33.3444C37.051 34.9309 36.4143 36.4524 35.2811 37.5743C34.1478 38.6961 32.6108 39.3263 31.0081 39.3263H21.9437V42.3173H24.9651C25.7665 42.3173 26.535 42.6324 27.1016 43.1933C27.6683 43.7542 27.9866 44.515 27.9866 45.3082C27.9866 46.1015 27.6683 46.8622 27.1016 47.4231C26.535 47.984 25.7665 48.2991 24.9651 48.2991H12.8793C12.078 48.2991 11.3094 47.984 10.7428 47.4231C10.1762 46.8622 9.85784 46.1015 9.85784 45.3082C9.85784 44.515 10.1762 43.7542 10.7428 43.1933C11.3094 42.6324 12.078 42.3173 12.8793 42.3173H15.9008V39.3263H6.83638C5.2337 39.3263 3.69666 38.6961 2.56339 37.5743C1.43012 36.4524 0.793457 34.9309 0.793457 33.3444L0.793457 17.3927Z"
              fill="#FEA918"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.56339 2.16294C1.43012 3.28476 0.793457 4.80628 0.793457 6.39277V22.3445C0.793457 23.931 1.43012 25.4525 2.56339 26.5743C3.69666 27.6961 5.2337 28.3263 6.83638 28.3263H15.9008V31.3173H12.8793C12.078 31.3173 11.3094 31.6324 10.7428 32.1933C10.1762 32.7542 9.85784 33.515 9.85784 34.3082C9.85784 35.1015 10.1762 35.8622 10.7428 36.4231C11.3094 36.984 12.078 37.2992 12.8793 37.2992H24.9652C25.7665 37.2992 26.535 36.984 27.1016 36.4231C27.6683 35.8622 27.9866 35.1015 27.9866 34.3082C27.9866 33.515 27.6683 32.7542 27.1016 32.1933C26.535 31.6324 25.7665 31.3173 24.9652 31.3173H21.9437V28.3263H31.0081C32.6108 28.3263 34.1478 27.6961 35.2811 26.5743C36.4143 25.4525 37.051 23.931 37.051 22.3445V6.39277C37.051 4.80628 36.4143 3.28476 35.2811 2.16294C34.1478 1.04112 32.6108 0.410889 31.0081 0.410889H6.83638C5.2337 0.410889 3.69666 1.04112 2.56339 2.16294Z"
              fill="black"
            />
          </svg>
          <p className="mr-4 text-[2.08513rem] font-[600]">تجهیزات کامل</p>
        </li>
        <span className="hidden h-10 w-[0.1rem] rounded-xl bg-[#000] opacity-5 lg:flex"></span>
        <li className="flex items-center justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="49"
            viewBox="0 0 58 49"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.0224 0.563721C31.9539 0.563721 30.9292 0.983875 30.1737 1.73176C29.4182 2.47964 28.9938 3.49398 28.9938 4.55164V6.42198H31.0081C33.9463 6.42198 36.7642 7.5774 38.8419 9.63408C40.9196 11.6907 42.0868 14.4802 42.0868 17.3888V18.0109H57.1941V4.55164C57.1941 3.49398 56.7696 2.47964 56.0141 1.73176C55.2586 0.983875 54.2339 0.563721 53.1655 0.563721H33.0224ZM32.5833 47.9043C33.005 46.6958 33.1266 45.4046 32.9378 44.1397C35.5016 43.6908 37.8238 42.3624 39.4968 40.3876C41.1698 38.4128 42.0868 35.9178 42.0868 33.3405V22.9958H57.1941V44.4309C57.1941 45.4885 56.7696 46.5029 56.0141 47.2507C55.2586 47.9986 54.2339 48.4188 53.1655 48.4188H35.0367C34.1914 48.4202 33.3554 48.2449 32.5833 47.9043ZM51.84 9.28531C51.8614 9.69906 51.7976 10.1128 51.6523 10.5013C51.5071 10.8899 51.2835 11.2451 50.9953 11.5455C50.707 11.8458 50.36 12.085 49.9754 12.2484C49.5908 12.4118 49.1767 12.4961 48.7582 12.4961C48.3396 12.4961 47.9255 12.4118 47.5409 12.2484C47.1563 12.085 46.8093 11.8458 46.521 11.5455C46.2328 11.2451 46.0092 10.8899 45.864 10.5013C45.7188 10.1128 45.6549 9.69906 45.6763 9.28531C45.7167 8.50317 46.059 7.76628 46.6325 7.22683C47.2061 6.68738 47.967 6.3866 48.7582 6.3866C49.5493 6.3866 50.3102 6.68738 50.8838 7.22683C51.4573 7.76628 51.7996 8.50317 51.84 9.28531ZM0.793457 17.3927C0.793457 15.8063 1.43012 14.2847 2.56339 13.1629C3.69666 12.0411 5.2337 11.4109 6.83638 11.4109H31.0081C32.6108 11.4109 34.1478 12.0411 35.2811 13.1629C36.4143 14.2847 37.051 15.8063 37.051 17.3927V33.3444C37.051 34.9309 36.4143 36.4524 35.2811 37.5743C34.1478 38.6961 32.6108 39.3263 31.0081 39.3263H21.9437V42.3173H24.9651C25.7665 42.3173 26.535 42.6324 27.1016 43.1933C27.6683 43.7542 27.9866 44.515 27.9866 45.3082C27.9866 46.1015 27.6683 46.8622 27.1016 47.4231C26.535 47.984 25.7665 48.2991 24.9651 48.2991H12.8793C12.078 48.2991 11.3094 47.984 10.7428 47.4231C10.1762 46.8622 9.85784 46.1015 9.85784 45.3082C9.85784 44.515 10.1762 43.7542 10.7428 43.1933C11.3094 42.6324 12.078 42.3173 12.8793 42.3173H15.9008V39.3263H6.83638C5.2337 39.3263 3.69666 38.6961 2.56339 37.5743C1.43012 36.4524 0.793457 34.9309 0.793457 33.3444L0.793457 17.3927Z"
              fill="#FEA918"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.56339 2.16294C1.43012 3.28476 0.793457 4.80628 0.793457 6.39277V22.3445C0.793457 23.931 1.43012 25.4525 2.56339 26.5743C3.69666 27.6961 5.2337 28.3263 6.83638 28.3263H15.9008V31.3173H12.8793C12.078 31.3173 11.3094 31.6324 10.7428 32.1933C10.1762 32.7542 9.85784 33.515 9.85784 34.3082C9.85784 35.1015 10.1762 35.8622 10.7428 36.4231C11.3094 36.984 12.078 37.2992 12.8793 37.2992H24.9652C25.7665 37.2992 26.535 36.984 27.1016 36.4231C27.6683 35.8622 27.9866 35.1015 27.9866 34.3082C27.9866 33.515 27.6683 32.7542 27.1016 32.1933C26.535 31.6324 25.7665 31.3173 24.9652 31.3173H21.9437V28.3263H31.0081C32.6108 28.3263 34.1478 27.6961 35.2811 26.5743C36.4143 25.4525 37.051 23.931 37.051 22.3445V6.39277C37.051 4.80628 36.4143 3.28476 35.2811 2.16294C34.1478 1.04112 32.6108 0.410889 31.0081 0.410889H6.83638C5.2337 0.410889 3.69666 1.04112 2.56339 2.16294Z"
              fill="black"
            />
          </svg>
          <p className="mr-4 text-[2.08513rem] font-[600]">تجهیزات کامل</p>
        </li>
      </ul>
      <ul className="flex flex-wrap items-center justify-center gap-y-5 text-[#898989]">
        <li className="w-[25rem] md:w-[87rem] ">
          <h3 className="text-[1.88438rem] font-[600]">موقعیت:</h3>
          <p className="text-[1.61938rem] font-[500] ">
            • لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه <br /> روزنامه و
            مجله در ستون و سطرآنچنان که لازم است.
          </p>
          <p className="text-[1.61938rem] font-[500] ">
            • لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <p className="text-[1.61938rem] font-[500] ">
            • طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است.
          </p>
        </li>
        <li className="w-[25rem] md:w-[87rem] ">
          <h3 className="text-[1.88438rem] font-[600]">شرح وظایف:</h3>
          <p className="text-[1.61938rem] font-[500]">
            • لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه <br /> روزنامه و
            مجله در ستون و سطرآنچنان که لازم است.
          </p>
          <p className="text-[1.61938rem] font-[500]">
            • لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <p className="text-[1.61938rem] font-[500]">
            • طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است.
          </p>
        </li>
        <li className="w-[25rem] md:w-[87rem] ">
          <h3 className="text-[1.88438rem] font-[600]">انتظارات:</h3>
          <p className="text-[1.61938rem] font-[500]">
            • لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه <br /> روزنامه و
            مجله در ستون و سطرآنچنان که لازم است.
          </p>
          <p className="text-[1.61938rem] font-[500]">
            • لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <p className="text-[1.61938rem] font-[500]">
            • طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است.
          </p>
        </li>
      </ul>
      <div className="w-[65%]">
        <h2 className="text-[3.61788rem] font-[800]">فرم درخواست همکاری</h2>
        <p className="text-[1.04688rem] font-[400] text-[#898989]">
          همکاران ما در اسرع وقت رزومه شما را بررسی کرده و با شما تماس خواهند
          گرفت !
        </p>
        <ResumeForm />
        <div className="mt-[5em] flex items-center justify-between">
          <p className="text-[1.6555rem] font-[600] text-[#898989]">
            موقعیت های شغلی دیگر ...
          </p>
          <Link
            href="/jobs"
            className="flex items-center gap-3 text-[1.42625rem] font-[600] text-primary"
          >
            مشاهده همه
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="14"
              viewBox="0 0 9 16"
              fill="none"
            >
              <path
                d="M8.53673 0.448041C8.76384 0.671138 8.89141 0.973555 8.89141 1.28887C8.89141 1.60417 8.76384 1.90659 8.53673 2.12969L2.92572 7.6347L8.53673 13.1397C8.65589 13.2487 8.75145 13.38 8.81774 13.526C8.88402 13.6719 8.91967 13.8295 8.92254 13.9892C8.92541 14.149 8.89546 14.3077 8.83446 14.4558C8.77347 14.604 8.68268 14.7386 8.56752 14.8516C8.45236 14.9646 8.31518 15.0536 8.16417 15.1135C8.01316 15.1733 7.85141 15.2027 7.68858 15.1999C7.52574 15.1971 7.36515 15.1621 7.21639 15.0971C7.06762 15.032 6.93373 14.9383 6.82271 14.8214L0.354675 8.47553C0.127566 8.25243 0 7.95001 0 7.6347C0 7.31939 0.127566 7.01698 0.354675 6.79388L6.82271 0.448041C7.0501 0.225222 7.35834 0.100067 7.67972 0.100067C8.0011 0.100067 8.30934 0.225222 8.53673 0.448041Z"
                fill="#FEA918"
              />
              <path
                d="M8.53673 0.448041C8.76384 0.671138 8.89141 0.973555 8.89141 1.28887C8.89141 1.60417 8.76384 1.90659 8.53673 2.12969L2.92572 7.6347L8.53673 13.1397C8.65589 13.2487 8.75145 13.38 8.81774 13.526C8.88402 13.6719 8.91967 13.8295 8.92254 13.9892C8.92541 14.149 8.89546 14.3077 8.83446 14.4558C8.77347 14.604 8.68268 14.7386 8.56752 14.8516C8.45236 14.9646 8.31518 15.0536 8.16417 15.1135C8.01316 15.1733 7.85141 15.2027 7.68858 15.1999C7.52574 15.1971 7.36515 15.1621 7.21639 15.0971C7.06762 15.032 6.93373 14.9383 6.82271 14.8214L0.354675 8.47553C0.127566 8.25243 0 7.95001 0 7.6347C0 7.31939 0.127566 7.01698 0.354675 6.79388L6.82271 0.448041C7.0501 0.225222 7.35834 0.100067 7.67972 0.100067C8.0011 0.100067 8.30934 0.225222 8.53673 0.448041Z"
                stroke="#FEA918"
              />
            </svg>
          </Link>
        </div>
        <div className="my-5 mt-[2em] flex flex-wrap justify-center md:justify-between">
          {jobsData.length > 0 ? (
            jobsData.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                description={job.description}
                category={job.category}
                postedTime={job.postedTime}
              />
            ))
          ) : (
            <div className="title-2 flex w-[40%] flex-wrap items-center justify-center text-center">
              <Image src={Nojob} alt="Job Position" width={250} height={250} />
              <p>
                با تشکر از علاقه شما, <br /> هم‌اکنون فرصت شغلی جدیدی موجود
                نیست.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
