"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nojob from "../../assets/images/NoJob.svg";
import { categories, jobsData } from "@/utils/jobData";
import BgImage from "../../../public/images/job.webp";

/**
 * Represents the structure and required fields of a job listing.
 * @property {string} title - The title or position of the job.
 * @property {string} description - A brief description of the job.
 * @property {string} category - The category that the job falls under.
 * @property {string} postedTime - The time or date when the job was posted.
 */
interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  postedTime: string;
  icon: string;
}

/**
 * Style object for the JobCard component.
 * Utilizes React's CSSProperties for consistent styling and type safety.
 * Defines the background image and layout properties of the job card.
 */

const cardStyle: React.CSSProperties = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

/**
 * CategoryButton component.
 * Renders a button for each job category.
 * @param {string} label - The text label of the button.
 * @returns {JSX.Element} - A styled button element.
 */

const CategoryButton: React.FC<{ label: string }> = ({ label }) => (
  <p className="btn mx-1 rounded-2xl bg-primary px-3 py-1.5">{label}</p>
);

/**
 * JobCard component.
 * Renders a card displaying information about a job.
 * Includes an image, title, description, and category labels.
 * @param {Job} props - Props containing job details.
 * @returns {JSX.Element} - A styled div element representing a job card.
 */

const JobCard: React.FC<Job> = ({
  id,
  title,
  description,
  postedTime,
  icon,
}) => (
  <div
    style={cardStyle}
    className="mb-[3.5em] flex justify-between rounded-[1em] p-3 before:absolute before:inset-0 before:rounded-[1em] before:bg-black before:opacity-70 md:w-[42rem] md:p-7"
  >
    <div className="relative z-10">
      <div className="flex justify-between">
        <Image
          src={icon}
          alt="job icon"
          className="h-[2.1685rem] w-[2.1685rem] md:h-[4.6685rem] md:w-[4.6685rem]"
        />
        <p className="miniText text-gray-300">{postedTime}</p>
      </div>
      <h2 className="header-4 text-primary">{title}</h2>
      <p className="subtitle-2 mb-4 mt-2 text-gray-300">{description}</p>
      <p className="subtitle-1 text-white">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <div className="mt-6 flex justify-between">
        <div className="flex gap-1">
          {categories.map((category, index) => (
            <CategoryButton key={index} label={category} />
          ))}
        </div>
        <Link
          href={`../jobs/${id}`}
          className="btn-2 flex items-center whitespace-nowrap text-primary"
        >
          اطلاعات بیشتر
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="11"
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

/**
 * Jobs component.
 * Renders a list of job cards based on provided job data.
 * @returns {JSX.Element} - A div containing multiple JobCard components.
 */
const Jobs: React.FC = () => {
  return (
    <div className="select-none flex-col ">
      <div className="flex w-full flex-col justify-center bg-job-image bg-cover bg-no-repeat bg-center pb-5 pt-16 text-center text-white md:h-[500px] md:pt-0">
        <h2 className="header-1">فرصت های شغلی</h2>
        <div className="title-3 flex justify-center">
          <p>
            <Link href="/">خانه- </Link>
          </p>
          <p className="text-primary">
            <Link href="/jobs"> فرصت های شغلی</Link>
          </p>
        </div>
      </div>
      <div className="my-5 flex flex-wrap justify-center gap-5 p-[3em] md:justify-around">
        {jobsData.length > 0 ? (
          jobsData.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              category={job.category}
              postedTime={job.postedTime}
              icon={job.icon}
            />
          ))
        ) : (
          <div className="title-2 flex w-[40%] flex-wrap items-center justify-center text-center">
            <Image src={Nojob} alt="Job Position" width={250} height={250} />
            <p>
              با تشکر از علاقه شما, <br /> هم‌اکنون فرصت شغلی جدیدی موجود نیست.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
