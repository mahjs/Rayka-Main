import Image from "next/image";
import React from "react";
import BgImage from "../../../public/images/bg-main.webp";
import Link from "next/link";
import headphone from "@/assets/images/headphone.svg";

interface Job {
  title: string;
  description: string;
  category: string;
  postedTime: string;
}

const cardStyle: React.CSSProperties = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const categories = ["دورکاری", "حضوری", "آموزشی"];

const JobCard: React.FC<Job> = ({ title, description, postedTime }) => {
  return (
    <div
      style={cardStyle}
      className="justify-between rounded-lg p-5 before:absolute before:inset-0 before:rounded-lg before:bg-black before:opacity-70 md:w-[36rem] md:p-10"
    >
      <div className="relative z-10">
        <div className="flex justify-between">
          <Image
            src={headphone}
            alt="headphone"
            className="h-[4.6685rem] w-[4.6685rem]"
          />
          <p className="miniText text-gray-300">{postedTime}</p>
        </div>
        <h2 className="subtitle-2 text-primary">{title}</h2>
        <p className="title-1 mb-4 mt-2 text-gray-300">{description}</p>
        <p className="title-1 text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
        <div className="mt-3 flex justify-between">
          <div className="Body flex gap-2 md:gap-5">
            {categories.map((item, index) => (
              <p
                className={`btn rounded-2xl bg-primary p-1 md:p-2 ${
                  index !== categories.length / 1 ? "mx-1" : ""
                }`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <Link
            className="btn flex items-center whitespace-nowrap text-primary"
            href="/contact-us"
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
};

const Jobs: React.FC = () => {
  const jobsData: Job[] = [
    {
      title: "پشتیبان سایت",
      description: "شروع دستمزد از  8 میلیون تومان...",
      category: "دورکاری",
      postedTime: "چند دقیقه پیش",
    },
    {
      title: "پشتیبان سایت",
      description: "شروع دستمزد از  8 میلیون تومان...",
      category: "حضوری",
      postedTime: "چند دقیقه پیش",
    },
  ];

  return (
    <div className="select-none flex-col ">
      <div className="flex w-full flex-col justify-center bg-main-image bg-cover bg-no-repeat pb-5 pt-16 text-center text-white md:h-[500px] md:pt-0">
        <h2 className="header-1">فرصت های شغلی</h2>
        <div className="subtitle flex justify-center">
          <p>
            <Link href="/">خانه- </Link>
          </p>
          <p className="text-primary">
            <Link href="/jobs"> فرصت های شغلی</Link>
          </p>
        </div>
      </div>
      <div className="my-5 flex flex-wrap justify-center gap-5 p-[3em] md:justify-around">
        {jobsData.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            description={job.description}
            category={job.category}
            postedTime={job.postedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
