import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Honers from "@/components/about-us/Honers";
import React from "react";
import Persons from "@/components/about-us/Persons";
import Comments from "@/components/about-us/Comments";

import RaykaIcon from "@/assets/images/rayka-icon.svg";

interface Props {}

const page: React.FC<Props> = ({}) => {
  return (
    <div className=" flex flex-col gap-36 ">
      <HeroSection
        heading="درباره ی ما"
        subHeading="خانه -"
        childHeading="درباره ما"
      />
      <div className="  relative mx-auto  h-[15rem] w-[90.1%] -rotate-[2deg] items-center rounded-lg bg-[#FEA918]  md:w-[80.1%] md:rounded-3xl">
        <div
          style={{
            backgroundSize: "100%",
          }}
          className="absolute  w-full -rotate-[-2deg] flex-col items-center justify-center rounded-lg bg-main-image p-12  md:rounded-3xl"
        >
          <Image
            src={RaykaIcon}
            width="50"
            height="50"
            alt="rayka icon"
            className="w-12 md:w-16 "
          />
          <p className="title-3 text-5xl font-bold	text-primary">درباه‌ما </p>
          <p className="title-1 mt-3 text-justify font-medium	text-white">
            ما در خانواده ی سخت کوش و خستگی ناپذیر شرکت ماورای ابعاد رایکا ،
            برای تحقق رویاهایمان میجنگیم. در کنار هم میسازیم و از تماشای آنچه
            روزی تصور کرده بودیم و حالا به آن تجسم بخشیده ایم لذت میبریم. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>{" "}
        </article>
      </div>

      <Honers />
      <Persons />
      <Comments />
    </main>
  );
};

export default page;
