import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import truPerson from "@/assets/images/truePerson.svg";
interface Props {}

const Comments: React.FC<Props> = ({}) => {
  return (
    <div className="relative mb-[14.35rem] flex h-[500px] items-start justify-center ">
      <Image
        src={heroImage}
        alt="Descriptive alt text"
        className="absolute h-full w-full object-cover"
      />
      <div className="z-10  flex flex-col	 items-center justify-start gap-10 ">
        <h1 className="	 text-6xl	 font-bold text-white">صحبت مدیران</h1>

        <div className="flex justify-center gap-8">
          <div className="relative mt-4 flex w-[30%] flex-col  gap-12">
            <div className="  rounded-2xl  bg-primary p-[1.90rem] text-justify	">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
              <div className="absolute mt-6 h-0  w-0 border-l-[22px] border-r-[22px] border-t-[40px] border-l-transparent border-r-transparent border-t-primary"></div>
            </div>
            <div className=" flex  items-center justify-start gap-5">
              <div className="h-20 w-20 rounded-full border-4 border-solid	 border-primary bg-black">
                <div className="mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent">
                  {" "}
                  {/* Add overflow-hidden */}
                  <Image
                    src={truPerson}
                    alt="truPerson"
                    className="rounded-full object-cover"
                  />{" "}
                  {/* Add rounded-full and object-cover */}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold	text-white">
                  محمدرضا علیمردانی
                </p>
                <p className="text-xl font-medium text-[#8C8C8C]">
                  مدیریت لورم ایپسوم
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="relative mt-4 flex w-[30%] flex-col  gap-12">
            <div className="  rounded-2xl  bg-primary p-[1.90rem] text-justify	">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
              <div className="absolute mt-6 h-0  w-0 border-l-[22px] border-r-[22px] border-t-[40px] border-l-transparent border-r-transparent border-t-primary"></div>
            </div>
            <div className=" flex  items-center justify-start gap-5">
              <div className="h-20 w-20 rounded-full border-4 border-solid	 border-primary bg-black">
                <div className="mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent">
                  {" "}
                  {/* Add overflow-hidden */}
                  <Image
                    src={truPerson}
                    alt="truPerson"
                    className="rounded-full object-cover"
                  />{" "}
                  {/* Add rounded-full and object-cover */}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold	text-white">
                  محمدرضا علیمردانی
                </p>
                <p className="text-xl font-medium text-[#8C8C8C]">
                  مدیریت لورم ایپسوم
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="relative mt-4 flex w-[30%] flex-col  gap-12">
            <div className="  rounded-2xl  bg-primary p-[1.90rem] text-justify	">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
              <div className="absolute mt-6 h-0  w-0 border-l-[22px] border-r-[22px] border-t-[40px] border-l-transparent border-r-transparent border-t-primary"></div>
            </div>
            <div className=" flex  items-center justify-start gap-5">
              <div className="h-20 w-20 rounded-full border-4 border-solid	 border-primary bg-black">
                <div className="mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent">
                  {" "}
                  {/* Add overflow-hidden */}
                  <Image
                    src={truPerson}
                    alt="truPerson"
                    className="rounded-full object-cover"
                  />{" "}
                  {/* Add rounded-full and object-cover */}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold	text-white">
                  محمدرضا علیمردانی
                </p>
                <p className="text-xl font-medium text-[#8C8C8C]">
                  مدیریت لورم ایپسوم
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Comments;
