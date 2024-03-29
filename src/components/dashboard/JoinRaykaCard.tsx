"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Person from "@/assets/images/person.webp";

/**
 * Component for showing the join us card and some small description for company.
 */

const JoinRaykaCard = () => {
  const router = useRouter();
  return (
    <section className="relative mx-auto flex w-[70%] max-w-[1300px] flex-col rounded-2xl bg-[#FEA918] p-3 md:w-[80%] md:p-8 lg:flex-row lg:items-center lg:gap-5 xl:w-[70%] ">
      <div className="flex flex-col text-[#111]">
        <p className="header-4 whitespace-nowrap">عضو خانواده ما شو!</p>
        <p className="title-4 hidden md:block">اینجا برای همه جا هست!</p>
      </div>
      <div className="ml-[200px] w-[80%] flex-col text-[#111] lg:max-w-[62%]">
        <p className="max-w-[90%] text-[.44rem] md:max-w-[80%] md:text-[.70rem] lg:text-[1rem] ">
          تیم رایکا همواره در حال تلاش برای پیدا کردن استعدادهای این سرزمین و
          به‌کارگیری آن‌ها به‌ صورت حضوری و دورکاری است.
          <br className="hidden lg:block" /> حتما به صفحه فرصت‌های شغلی سر بزنید
          تا از فرصت‌های شغلی شرکت مطلع شوید!
        </p>
        <button
          onClick={() => {
            router.push("/jobs");
          }}
          className="mt-5 hidden items-center justify-start gap-3 rounded-2xl bg-black px-5 py-2.5 lg:flex"
        >
          <p className="btn-2 text-right text-[#FEA918]">
            مشاهده فرصت‌های شغلی
          </p>

          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path
              d="M6.29731 0.589831L6.29721 0.589739C6.1405 0.44229 5.92939 0.360513 5.71054 0.360513C5.49169 0.360513 5.28058 0.44229 5.12387 0.589739L5.12382 0.589785L1.2589 4.23088L1.25885 4.23093C1.10211 4.37877 1.01277 4.58061 1.01277 4.79253C1.01277 5.00445 1.10211 5.20629 1.25885 5.35413L1.2589 5.35418L5.12248 8.99401C5.19884 9.07083 5.29039 9.13212 5.39156 9.17459C5.49335 9.21732 5.60301 9.24021 5.71403 9.24206C5.82505 9.2439 5.93545 9.22467 6.03872 9.18538L6.00002 9.08367L6.03872 9.18538C6.142 9.14608 6.23624 9.08742 6.31566 9.01261C6.39509 8.93777 6.4581 8.84826 6.50056 8.74922C6.54303 8.65016 6.56399 8.54381 6.56198 8.43657C6.55997 8.32934 6.53505 8.22379 6.48893 8.12627C6.44309 8.02937 6.37735 7.94255 6.29592 7.87072L3.02851 4.79253L6.29726 1.71308L6.29731 1.71304C6.45405 1.56519 6.54339 1.36335 6.54339 1.15143C6.54339 0.939517 6.45405 0.737675 6.29731 0.589831Z"
              fill="#FEA918"
              stroke="#FEA918"
              strokeWidth="0.217633"
            />
          </svg>
        </button>
      </div>

      <Image
        className="absolute -bottom-1 -left-5 w-[130px] md:w-[250px] lg:w-[340px]"
        src={Person}
        alt="A smiling person"
      />
    </section>
  );
};

export default JoinRaykaCard;
