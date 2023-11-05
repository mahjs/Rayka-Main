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
  "peer block w-full text-right appearance-none rounded border-0 bg-[#f5f5f5] px-5 py-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-primary dark:text-white dark:focus:border-primary";

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
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const body = {
      name: formData.get("floating_name"),
      email: formData.get("floating_email"),
      phone: formData.get("floating_phone"),
      title: formData.get("floating_title"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/form", {
        // Update this URL to match your server route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Show success toast
      toast.success("پیام شما با موفقیت ارسال شد");
    } catch (error) {
      console.error("Error when submitting form", error);
      toast.error("متاسفانه پیام شما ارسال نشد مجدد تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="mt-4 w-full md:mt-7" onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="grid select-none grid-cols-2 gap-4 md:gap-7">
          <FloatingInput
            type="text"
            name="floating_name"
            id="floating_name"
            label="نام شما"
          />
          <FloatingInput
            type="text"
            name="floating_email"
            id="floating_email"
            label="پست الکترونیکی"
            pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
          />
          <FloatingInput
            type="tel"
            name="floating_phone"
            id="floating_phone"
            label="شماره تلفن"
            pattern="(\+989|09)\d{9}"
          />
          <FloatingInput
            type="text"
            name="floating_title"
            id="floating_title"
            label="موضوع متن"
          />
        </div>
        <textarea
          name="message"
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
