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
    <footer className="max-width-wide bg-black bg-footer-image bg-contain px-5">
      <div className="relative mx-auto flex max-w-[1300px] justify-around gap-5 object-contain pb-[1rem] pt-[1.5rem] md:items-start md:pb-[2rem] md:pt-[3.5rem] lg:pt-[4.5rem]">
        <div className="flex max-w-[40%] flex-col gap-2 md:gap-3 lg:ml-auto">
          <Image src={RaykaIcon} alt="Rayka icon" className="footer-logo" />{" "}
          <p className="title-6 footer-description  text-white">
            {" "}
            ما در خانواده سخت‌کوش و خستگی‌ناپذیر شرکت ماورای ابعاد رایکا، برای
            تحقق رویاهایمان می‌جنگیم؛ در کنار هم می‌سازیم و از تماشای آنچه روزی
            تصور کرده بودیم و حالا به آن تجسم بخشیده‌ایم لذت می‌بریم.{" "}
          </p>{" "}
        </div>{" "}
        <div className="hidden flex-col gap-6 text-center text-white lg:flex ">
          {" "}
          <h3 className="header-7 whitespace-nowrap">صفحات دیگر</h3>{" "}
          <PageNavigation />
        </div>
        <div className="flex flex-col gap-2 text-white md:gap-6 lg:mr-auto">
          <h3 className="header-7">راه‌های ارتباطی</h3>
          <div className="title-6 flex flex-col gap-2 md:flex md:gap-6">
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
                  // className="subtitle-1"
                >
                  021-96660000
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
                <p>support@raikaco.org</p>
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
              <p className="title-6 w-[9rem] md:w-[14rem] lg:w-[25rem]">
                تهران، خیابان پاسداران، پایین‌تر از اطلس مال،{" "}
                <br className="md:hidden" /> نبش کوچه تنگستان سوم، پلاک ۷۴۶ واحد
                ۲
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
