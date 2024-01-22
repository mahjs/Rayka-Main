import InfoText from "../components/dashboard/InfoText";
import JoinRaykaCard from "@/components/dashboard/JoinRaykaCard";
import Experties from "@/components/dashboard/Experties";

// Information data for showing the company project and description.
const informationData = [
  {
    id: 1,
    title: 17,
    text: "پروژه موفقیت‌آمیز",
  },
  {
    id: 2,
    title: 35,
    text: "پرسنل مجرب",
  },
  {
    id: 3,
    title: 7,
    text: "همکاری‌های بین‌المللی",
  },
  {
    id: 4,
    title: 1,
    unit: "M",
    text: "تعداد کاربران",
  },
];

/**
 * The main root component for showing the root address page ('/').
 */

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 md:gap-20">
      {/* Background */}
      <div className="absolute left-0 right-0 top-0 -z-30 hidden bg-[#FEA918] md:block md:h-[60vh] lg:h-[100vh] lg:w-[90vw]" />

      {/* Top content */}
      <section
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="flex h-[39vh] w-[100%] items-center justify-between bg-main-image pt-16 md:h-[60vh] md:rounded-br-[30rem] md:pt-0 lg:h-[100vh] "
      >
        <div className="flex-col overflow-x-hidden px-5 pb-5 text-white md:mr-[11rem] md:py-10">
          <h1 className="header-6 hidden tracking-normal	 md:block">
            شرکت ماورای ابعاد رایکا
          </h1>
          <p className="header-2 whitespace-nowrap ">
            همگام با <span className="text-primary">تکنولوژی</span>
          </p>
          <p className="header-2 whitespace-nowrap ">
            برای <span className="text-primary">آینده‌ای </span> هوشمندتر
          </p>
          {/* <p className="text-[1.8rem] font-bold md:hidden">
            <span className="text-primary">نوآوری</span> در فناوری
          </p> */}
          {/* <p className="text-[2rem] font-bold md:hidden">
            <span className="text-primary">هوشمندی</span> در کسب و کار
          </p> */}
          <p className="subtitle-1 hidden text-right text-white  md:mt-0 md:block md:opacity-100 lg:max-w-[50%]">
            ما در شرکت ماورای ابعاد رایکا به بهبود سرویس‌های موجود در حوزه
            فناوری و ارتباطات اکتفا نمی‌کنیم؛ ما به رویاهای تحقق‌نیافته جامه‌
            عمل می‌پوشانیم و در کنار هم از خلق آینده‌ای هوشمندتر لذت می‌بریم.
          </p>
          <p className="subtitle-1-change mt-3 block text-right text-white  md:hidden">
            ما در خانواده ی سخت کوش و خستگی ناپذیر شرکت ماورای ابعاد رایکا ،
            برای تحقق
            <br /> رویاهایمان میجنگیم. در کنار هم میسازیم و از تماشای آنچه روزی
            تصور کرده بودیم و <br />
            حالا به آن تجسم بخشیده ایم لذت میبریم.
          </p>
        </div>

        {/* <div className="-ml-[3rem] hidden -rotate-90  gap-10 text-white md:flex">
          <div>
            <Link href="#">INSTAGRAM</Link>
          </div>
          <div>
            <Link href="#">LINKEDIN</Link>
          </div>
        </div> */}
      </section>

      {/* Experties Content */}
      <section className="relative flex justify-center md:mb-5">
        {/* Make the backgrounds */}
        <div className="absolute h-[27rem] w-[90%] max-w-[1680px] -rotate-[2deg] rounded-lg bg-[#FEA918] md:h-[43rem] md:w-[80.1%] md:-rotate-[2deg] md:rounded-3xl lg:h-[18rem] lg:w-[90.1%] lg:-rotate-[1deg]" />
        <div className="relative h-[27rem] w-[90%] max-w-[1680px] flex-col items-center justify-center rounded-lg bg-work-plans-image bg-cover bg-no-repeat md:h-[43rem] md:w-[80%] md:rounded-3xl lg:h-[18rem] lg:w-[90%]" />
        {/* Content */}
        <Experties />
      </section>

      {/* Information Content */}
      <section className="relative flex h-[20rem] w-full items-center justify-center bg-statistics-image bg-cover bg-center bg-no-repeat md:mb-[5rem] lg:mt-16">
        <div className="rounded-3x absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full" />
        <div className="absolute z-30 grid w-full max-w-[1900px] grid-cols-2 justify-evenly gap-5 md:flex ">
          {informationData.map((info) => (
            <InfoText
              key={info.id}
              unit={info.unit}
              title={info.title}
              text={info.text}
            />
          ))}
        </div>
      </section>

      <div className="z-10 -mb-[1rem] flex items-center justify-center  md:-mb-[2.5rem]">
        <JoinRaykaCard />
      </div>
    </main>
  );
}
