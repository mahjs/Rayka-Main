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
      <div className="relative mb-[10rem] mt-[6.69rem] flex justify-center  ">
        <div className="absolute  h-8 w-11/12  -rotate-[2.5deg] rounded-3xl bg-[#FEA918] md:h-80 md:w-3/5" />
        <div className="relative flex w-11/12 flex-col  gap-2 rounded-3xl bg-black px-[2.69rem] py-[2rem] md:h-96 md:w-3/5 md:gap-4 md:px-[7.8rem]	 md:py-[2.78rem]">
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
      {/* <Persons /> */}
      {/* <Comments /> */}
    </div>
  );
};

export default page;
