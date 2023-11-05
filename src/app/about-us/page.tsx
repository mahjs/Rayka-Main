import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Honers from "@/components/about-us/Honers";
import React from "react";
import Persons from "@/components/about-us/Persons";
import Comments from "@/components/about-us/Comments";

interface Props {}

const page: React.FC<Props> = ({}) => {
  return (
    <div className="flex-col">
      <HeroSection
        heading="درباره ی ما"
        subHeading="خانه -"
        childHeading="درباره ما"
      />
      <div className="relative mb-10 mt-10 flex justify-center md:mb-[6.69rem] md:mt-[6.69rem]">
        <div className="absolute h-[15rem] w-[90.1%] -rotate-[2deg] rounded-lg bg-[#FEA918] md:w-[80.1%] md:rounded-3xl" />
        <div
          style={{
            backgroundSize: "100%",
          }}
          className="relative h-[22rem] w-[90%] flex-col items-center justify-center rounded-lg bg-main-image md:h-[50dvh] md:w-[80%] md:rounded-3xl"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        </div>
        <div className="absolute z-20 h-[22rem] w-[90%] flex-col items-center  justify-center p-12 md:w-[80%] md:rounded-3xl">
          <Image
            src="/images/rayka-icon.svg"
            width="50"
            height="50"
            alt="rayka icon"
            className="w-12 md:w-16 "
          />
          <p className="  title-2 text-5xl font-bold	text-primary">درباه‌ما </p>
          <p className="  Body mt-3	 text-justify text-[1rem] font-medium	text-white">
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
        </div>
      </div>

      <Honers />
      <Persons />
      <Comments />
    </div>
  );
};

export default page;
