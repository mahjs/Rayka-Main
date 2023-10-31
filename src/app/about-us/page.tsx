import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import AboutUs from "@/assets/images/about-us.svg";
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
        <div className="absolute h-[80%] w-[70.3%] -rotate-[2.5deg]  rounded-3xl bg-[#FEA918]" />
        <Image
          src={AboutUs}
          alt="About us"
          className="relative h-[80%] w-[70%]  rounded-3xl"
        />
        <div className="absolute z-20 flex  h-[80%] w-[70%] flex-col	 gap-y-4	 rounded-3xl px-[7.8rem] pt-[2.78rem]">
          <Image
            src="/images/rayka-icon.svg"
            width="50"
            height="50"
            alt="rayka icon"
          />
          <p className="  text-5xl font-bold text-primary	">درباه‌ما </p>
          <p className="  text-[1rem] font-medium	 text-white">
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
          </p>
        </div>
      </div>
      <Honers />
      <Persons />
      <Comments />
    </div>
  );
};

export default page;
