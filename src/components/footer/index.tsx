import Image from "next/image";
import PageNavigation from "../dashboard/PageNavigation";

const Footer = () => {
  return (
    <div className="bg-black">
      <div
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-footer-image relative z-0 mr-auto flex w-full justify-between gap-3 object-contain px-3 pb-[2rem] pt-[6rem] md:items-center md:justify-around md:pb-[5rem] md:pt-[8rem]"
      >
        <div className="flex flex-col gap-2 md:gap-5">
          <Image
            src="/images/rayka-icon.svg"
            alt="Rayka icon"
            width={50}
            height={50}
          />
          <p className="Body-2 max-w-[18rem] text-white md:max-w-[25rem]">
            ما در خانواده ی سخت کوش و خستگی ناپذیر شرکت ماورای ابعاد رایکا ،
            برای تحقق رویاهایمان میجنگیم. در کنار هم میسازیم و از تماشای آنچه
            روزی تصور <br className="hidden md:block" /> کرده بودیم و حالا به آن
            تجسم بخشیده ایم لذت میبریم.
          </p>
        </div>

        <div className="hidden flex-col gap-5 text-center text-white md:flex ">
          <h3 className="header-6">صفحات</h3>
          <PageNavigation />
        </div>

        <div className="flex flex-col gap-5 text-white">
          <h3 className="header-6">راه‌های ارتباطی</h3>
          <div className="Body-3 grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-5">
            <div className="flex items-center gap-1 md:gap-3 ">
              <Image
                src="/images/call.svg"
                alt="call icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <p>+98 930 547 1279</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src="/images/phone.svg"
                alt="phone icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <p>+21 374 54112</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src="/images/letter.svg"
                alt="letter icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <p>Support@Raika.com</p>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
                src="/images/location.svg"
                alt="location icon"
                width={25}
                height={25}
              />
              <p className="subtitle-3 max-w-[28rem]">
                تهرن، خیابان پاسداران، پایین‌تر از اطلس مال، نبش کوچه تنگستان
                سوم، پلاک ۷۴۶ واحد ۲
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
