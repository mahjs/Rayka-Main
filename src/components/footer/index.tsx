import Image from "next/image";
import PageNavigation from "../dashboard/PageNavigation";
import RaykaIcon from "@/assets/images/rayka-icon.svg";
import Call from "@/assets/images/call.svg";
import Phone from "@/assets/images/phone.svg";
import Letter from "@/assets/images/letter.svg";
import Location from "@/assets/images/location.svg";

/**
 * Footer for the whole app.
 */

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="relative z-0 flex w-full gap-5 bg-footer-image bg-no-repeat object-contain px-6 pb-[2rem] pt-[6rem] md:items-start md:pb-[5rem] md:pt-[8rem]">
        <div className="flex flex-col gap-2 md:ml-auto md:mr-[14%] md:gap-5">
          <Image
            src={RaykaIcon}
            alt="Rayka icon"
            width={50}
            height={50}
            className="h-[25px] w-[25px] md:h-[50px] md:w-[50px] "
          />
          <p className="title-4 max-w-[18rem] text-white md:max-w-[25rem]">
            ما در خانواده سخت‌کوش و خستگی‌ناپذیر شرکت ماورای ابعاد رایکا، برای
            تحقق رویاهایمان می‌جنگیم؛ در کنار هم می‌سازیم و از تماشای آنچه روزی
            تصور کرده بودیم و حالا به آن تجسم بخشیده‌ایم لذت می‌بریم.
          </p>
        </div>

        <div className="hidden flex-col gap-6 text-center text-white lg:flex ">
          <h3 className="header-6">صفحات دیگر</h3>
          <PageNavigation />
        </div>

        <div className="flex flex-col gap-2 text-white md:ml-[12%] md:mr-auto md:gap-6">
          <h3 className="header-6">راه‌های ارتباطی</h3>
          <div className="Body-3 flex flex-col gap-2 md:gap-9">
            {/* <div className="flex items-center gap-1 md:gap-3 ">
              <Image
                src={Call}
                alt="call icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <a href="tel:+989305471279">
                <p
                  style={{
                    direction: "ltr",
                  }}
                  className="subtitle-1"
                >
                  +98 930 547 12 79
                </p>
              </a>
            </div> */}
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src={Phone}
                alt="phone icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <a href="tel:02137454112">
                <p
                  style={{
                    direction: "ltr",
                  }}
                  className="subtitle-1"
                >
                  +21 3745 41 12
                </p>
              </a>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                src={Letter}
                alt="letter icon"
                width={25}
                height={25}
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
              />
              <a href="mailto:support@raikaco.org">
                <p className="subtitle-2">support@raikaco.org</p>
              </a>
            </div>
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                className="h-[10px] w-[10px] md:h-[25px] md:w-[25px]"
                src={Location}
                alt="location icon"
                width={25}
                height={25}
              />
              <p className="subtitle-2 max-w-[28rem]">
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
