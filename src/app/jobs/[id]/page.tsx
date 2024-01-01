"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ResumeForm from "../_Components/ResumeForm";
import JobCard from "../_Components/JobCard";
import { jobsData } from "@/utils/jobData";
import UserImage from "../../../assets/images/job-user.svg";
import NoJobImage from "../../../assets/images/NoJob.svg";
import Advantages from "../_Components/Advantages";
import Jobduties from "../_Components/Jobduties";

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
    <div className="flex flex-col items-center justify-center gap-y-[7em] overflow-x-hidden bg-[#F5F5F5] px-[2em] pt-14">
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <Image src={UserImage} alt="job image" />
        <div className="text-center lg:ml-[4em] lg:mt-[10em]">
          <h2 className="text-[4rem] font-[800] lg:text-[5.61875rem]">
            {selectedJobTitle}
          </h2>
          <p className="text-[1.65569rem] font-[400] text-[#c3c3c3]">
            توسعه و برنامه نویسی
          </p>
        </div>
      </div>
      <Advantages />
      <Jobduties />
      <div className="w-full p-[1em] md:w-[55rem] md:px-[5em] lg:px-0 xl:w-[76rem]">
        <h2 className="text-[2.5rem] font-[800] lg:text-[3.61788rem]">
          فرم درخواست همکاری
        </h2>
        <p className="text-[1.04688rem] font-[400] text-[#898989]">
          همکاران ما در اسرع وقت رزومه شما را بررسی کرده و با شما تماس خواهند
          گرفت !
        </p>
        <ResumeForm />
        <div className="mt-[5em] flex items-center justify-between">
          <p className="text-[1rem] font-[600] text-[#898989] lg:text-[1.6555rem]">
            موقعیت های شغلی دیگر ...
          </p>
          <Link
            href="/jobs"
            className="flex items-center gap-3 text-[1rem] font-[600] text-primary lg:text-[1.42625rem]"
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
            jobsData
              .slice(0, 3)
              .map((job) => (
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
              <Image
                src={NoJobImage}
                alt="Job Position"
                width={250}
                height={250}
              />
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
