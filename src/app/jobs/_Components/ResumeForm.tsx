"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import CustomBtn from "@/app/contact-us/_Components/CustomBtn";
import UploadBtn from "./UploadBtn";

/**
 * Props for the FloatingInput component.
 * @interface
 * @property {string} type - The input type (e.g., text, email, tel).
 * @property {string} name - The name attribute for the input element.
 * @property {string} id - The id attribute for the input element.
 * @property {string} label - The label text for the input element.
 * @property {string} [pattern] - The regex pattern for the input validation (optional).
 */
interface FloatingInputProps {
  type: string;
  name: string;
  id: string;
  label: string;
  pattern?: string;
}

const commonInputClasses =
  "peer block w-full text-right appearance-none rounded-[1.0625rem] border-0 bg-[#E7E7E7] px-5 py-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-primary dark:border-primary dark:text-white dark:focus:border-primary";

/**
 * FloatingInput - A custom input component with floating label effect.
 * It uses common styles for consistency across different input types.
 *
 * @component
 * @param {FloatingInputProps} props - The props for the component.
 * @returns {React.ReactElement} A styled input element with floating label effect.
 */
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

/**
 * Form - A component for handling user input and submissions.
 * It utilizes custom FloatingInput components for various input fields
 * and integrates toast notifications for submission feedback.
 *
 * @component
 * @returns {React.ReactElement} A form with input fields and custom button for submission.
 */
const ResumeForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    if (selectedFile) {
      formData.append("resume", selectedFile);
    }
    const body = {
      name: formData.get("floating_name"),
      email: formData.get("floating_email"),
      phone: formData.get("floating_phone"),
      title: formData.get("floating_title"),
      message: formData.get("message"),
    };

    const requestPromise = fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    toast.promise(
      requestPromise,
      {
        pending: {
          render({ data }) {
            return <div className="subtitle-2 text-right">...در حال ارسال</div>;
          },
        },
        success: {
          render({ data }) {
            // You can use the response data if needed
            setIsLoading(false);
            return (
              <div className="subtitle-2 text-right">
                رایکایی عزیز رزومه شما با موفقیت ارسال شد
              </div>
            );
          },
        },
        error: {
          render({ data }) {
            // You can use the error data if needed
            setIsLoading(false);
            return (
              <div className="subtitle-2 text-right">
                متاسفانه رزومه شما ارسال نشد مجدد تلاش کنید.
              </div>
            );
          },
        },
      },
      {
        toastId: "form-request",
      },
    );
  };

  return (
    <>
      <form className="mt-4 w-full md:mt-7" onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="grid select-none grid-cols-3 gap-4 md:gap-7">
          <FloatingInput
            type="text"
            name="floating_name"
            id="floating_name"
            label="نام و نام خانوادگی"
          />
          <FloatingInput
            type="email"
            name="floating_email"
            id="floating_email"
            label="پست الکترونیکی"
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          />
          <FloatingInput
            type="tel"
            name="floating_phone"
            id="floating_phone"
            label="شماره تلفن"
            pattern="(\+989|09)\d{9}"
          />
        </div>
        <textarea
          name="message"
          id="message"
          className="row-span-4 mt-4 block h-40 w-full rounded-[1.0625rem] border-0 bg-[#E7E7E7] p-2.5 pr-[1.4em] text-sm text-gray-900 focus:ring-primary  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 md:mt-7 md:h-60"
          placeholder="توضیحات بیشتر ..."
        ></textarea>
        <UploadBtn onFileSelect={handleFileSelect} />
        <CustomBtn sendText={isLoading ? "در حال ارسال..." : "ارسال رزومه"} />
      </form>
    </>
  );
};

export default ResumeForm;
