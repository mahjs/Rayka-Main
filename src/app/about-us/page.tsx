import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Honers from "@/components/about-us/Honers";
import React from "react";
import Persons from "@/components/about-us/Persons";
import Comments from "@/components/about-us/Comments";
import Carousel from "./Carousel";
import heroImage from "@/assets/images/hero-image.webp";
import truPerson from "@/assets/images/truePerson.svg";

interface Props {}

const CARDS = 10;
interface CardProps {
  title: string;
  content: string;
}

const testimonials = [
  {
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
    imageSrc: truPerson,
    name: "محمدرضا علیمردانی",
    title: "مدیریت لورم ایپسوم",
  },
  {
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
    imageSrc: truPerson,
    name: "محمدرضا علیمردانی",
    title: "مدیریت لورم ",
  },
  {
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
    imageSrc: truPerson,
    name: "محمدرضا علیمردانی",
    title: "مدیریت لورم ایپسوم",
  },
];

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const page: React.FC<Props> = ({}) => {
  return (
    <div className="flex-col">
      <HeroSection
        heading="درباره ی ما"
        subHeading="خانه -"
        childHeading="درباره ما"
      />
      <div className="relative flex md:m-[8rem]">
        {/* Make the backgrounds */}
        <div className="absolute h-[18rem] -rotate-[2deg] rounded-lg bg-[#FEA918] md:w-[100.2%] md:rounded-3xl" />
        <div
          style={{
            backgroundSize: "100%",
            flexGrow: "1",
          }}
          className="relative flex-col items-center justify-center rounded-lg bg-main-image md:h-[20rem] md:w-[80%] md:rounded-3xl"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" />
        </div>
        {/* Content */}
        <div className="absolute z-20 flex w-full flex-col gap-y-4 rounded-3xl px-[7.8rem] py-[1rem]">
          <Image
            src="/images/rayka-icon.svg"
            width="50"
            height="50"
            alt="rayka icon"
          />
          <p className="text-5xl font-bold text-primary	">درباه‌ما </p>
          <p className="Body font-medium text-white">
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
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center">
        <Image
          src={heroImage}
          alt="Descriptive alt text"
          className="absolute h-full w-full object-cover"
        />
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <Card
              key={i}
              title={"Card " + (i + 1)}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default page;
