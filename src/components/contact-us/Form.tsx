"use client";
import React, { useState } from "react";
import CustomBtn from "./CustomBtn";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

interface FloatingInputProps {
  type: string;
  name: string;
  id: string;
  label: string;
  pattern?: string;
}

const commonInputClasses =
  "peer block w-full appearance-none rounded border-0 bg-[#f5f5f5] px-5 py-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-primary dark:text-white dark:focus:border-primary";

const FloatingInput: React.FC<FloatingInputProps> = ({
  type,
  name,
  id,
  label,
  pattern,
}) => {
  return (
    <div className="group relative z-0 w-full ">
      <input
        type={type}
        name={name}
        id={id}
        className={commonInputClasses}
        placeholder={label}
        required
        pattern={pattern}
        autoComplete="off"
      />
    </div>
  );
};

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form from submitting the traditional way
    setIsLoading(true); // Set loading state to true

    // Prepare the promise for the HTTP request (or a simulated one)
    const requestPromise = new Promise((resolve) => setTimeout(resolve, 3000));

    toast.promise(requestPromise, {
      pending: {
        render({ data }) {
          return <div className="Body text-right	 ">...در حال ارسال</div>;
        },
      },
      success: {
        render({ data }) {
          return (
            <div className="Body text-right">
              رایکایی عزیز پیام شما با موفقیت ارسال شد
            </div>
          );
        },
      },

      error: {
        render({ data }) {
          return (
            <div className="Body text-right">
              متاسفانه پیام شما ارسال نشد مجدد تلاش کنید.
            </div>
          );
        },
      },
    });

    try {
      await requestPromise;
      // Handle server response here
    } catch (error) {
      console.error("Error when submitting form", error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <>
      <form className="mt-4 w-full md:mt-7" onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="grid select-none grid-cols-2 gap-4 md:gap-7">
          <FloatingInput
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            label="نام شما"
          />
          <FloatingInput
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            label="پست الکترونیکی"
            pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"
          />
          <FloatingInput
            type="tel"
            name="floating_phone"
            id="floating_phone"
            label="شماره تلفن"
            pattern="\+(?:[0-9] ?){6,14}[0-9]"
          />
          <FloatingInput
            type="text"
            name="floating_company"
            id="floating_company"
            label="موضوع متن"
          />
        </div>
        <textarea
          id="message"
          className="row-span-4 mt-4 block h-40 w-full rounded border-0 bg-[#f5f5f5] p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary md:mt-7 md:h-60"
          placeholder="پیام شما ..."
        ></textarea>
        <CustomBtn sendText={isLoading ? "در حال ارسال..." : "ارسال پیام"} />
      </form>
    </>
  );
};

export default Form;
