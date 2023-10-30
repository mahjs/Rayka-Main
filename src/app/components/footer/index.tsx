import Image from "next/image";
import PageNavigation from "../dashboard/PageNavigation";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="mr-auto flex w-[90%] items-center justify-around rounded-tr-md bg-gray-950 pb-[5rem] pt-[8rem]">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Image
            src="/images/rayka-icon.svg"
            alt="Rayka icon"
            width={50}
            height={50}
          />
          <p className="max-w-[20rem] text-[1.5rem] text-white">
            ما در خانواده ی سخت کوش و خستگی ناپذیر شرکت ماورای ابعاد رایکا ،
            برای تحقق رویاهایمان میجنگیم. در کنار هم میسازیم و از تماشای آنچه
            روزی تصور کرده بودیم و حالا به آن تجسم بخشیده ایم لذت میبریم.{" "}
          </p>
        </div>

        <div
          className="text-center text-white"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <h3 className="text-[2.5rem] font-bold">صفحات</h3>
          <PageNavigation />
        </div>

        <div
          className="text-white"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <h3 className="text-[2.5rem] font-bold">راه‌های ارتباطی</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/call.svg"
                alt="call icon"
                width={25}
                height={25}
              />
              <p>+98 930 547 1279</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/phone.svg"
                alt="phone icon"
                width={25}
                height={25}
              />
              <p>+21 374 54112</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/letter.svg"
                alt="letter icon"
                width={25}
                height={25}
              />
              <p>Support@Raika.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="h-[25px] w-[25px]"
                src="/images/location.svg"
                alt="location icon"
                width={25}
                height={25}
              />
              <p className="max-w-[20rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, accusantium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
