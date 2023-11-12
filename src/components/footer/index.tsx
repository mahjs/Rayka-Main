import Image from "next/image";
import PageNavigation from "../dashboard/PageNavigation";
import RaykaIcon from "@/assets/images/rayka-icon.svg";
import Call from "@/assets/images/call.svg";
import Phone from "@/assets/images/phone.svg";
import Letter from "@/assets/images/letter.svg";
import Location from "@/assets/images/location.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="relative z-0 mr-auto flex w-full justify-between gap-3 bg-footer-image object-contain px-3 pb-[2rem] pt-[6rem] md:items-start md:justify-around md:pb-[5rem] md:pt-[8rem]"
      >
        <div className="flex flex-col gap-2 md:gap-5">
          <Image
            src={RaykaIcon}
            alt="Rayka icon"
            width={50}
            height={50}
            className="h-[25px] w-[25px] md:h-[50px] md:w-[50px] "
          />
          <p className="title-4 max-w-[18rem] text-white md:max-w-[25rem]">
            ما در خانواده ی سخت کوش و خستگی ناپذیر شرکت ماورای ابعاد رایکا ،
            برای تحقق رویاهایمان میجنگیم. در کنار هم میسازیم و از تماشای آنچه
            روزی تصور <br className="hidden md:block" /> کرده بودیم و حالا به آن
            تجسم بخشیده ایم لذت میبریم.
          </p>
        </div>

        <div className="hidden flex-col gap-5 text-center text-white lg:flex ">
          <h3 className="header-6">صفحات</h3>
          <PageNavigation />
        </div>

        <div className="flex flex-col gap-5 text-white">
          <h3 className="header-6">راه‌های ارتباطی</h3>
          <div className="Body-3 grid grid-cols-2 gap-2 md:flex md:flex-col lg:gap-5">
            <div className="flex items-center gap-1 md:gap-3 ">
              <Image
                src={Call}
                alt="call icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <p className="subtitle-1">+98 930 547 1279</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src={Phone}
                alt="phone icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <p className="subtitle-1">+21 374 54112</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src={Letter}
                alt="letter icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <p className="subtitle-1">support@raikaco.org</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
                src={Location}
                alt="location icon"
                width={25}
                height={25}
              />
              <p className="subtitle-1 max-w-[28rem]">
                تهران، خیابان پاسداران، پایین‌تر از اطلس مال، نبش کوچه تنگستان
                سوم، پلاک ۷۴۶ واحد ۲
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
