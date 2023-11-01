import React from "react";
import CustomBtn from "./CustomBtn";

interface FloatingInputProps {
  type: string;
  name: string;
  id: string;
  label: string;
  pattern?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  type,
  name,
  id,
  label,
  pattern,
}) => {
  const commonInputClasses =
    "peer block w-full appearance-none rounded border-0 bg-[#f5f5f5] px-5 py-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-primary dark:text-white dark:focus:border-primary";
  const commonLabelClasses =
    "absolute top-[1.4em] origin-[0] scale-75 pr-5 text-sm text-gray-500 peer-placeholder-shown:opacity-1 peer-placeholder-shown:scale-100 peer-focus:-right-2 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900 peer-focus:opacity-0";

  return (
    <div className="group relative z-0 w-full ">
      <input
        type={type}
        name={name}
        id={id}
        className={commonInputClasses}
        placeholder=" "
        required
        pattern={pattern}
      />
      <label htmlFor={id} className={commonLabelClasses}>
        {label}
      </label>
    </div>
  );
};

const Form: React.FC = () => {
  return (
    <form className="w-full">
      <div className="grid select-none md:grid-cols-2 md:gap-7">
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
        />
        <FloatingInput
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          label="شماره تلفن"
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
        className="row-span-4 mt-7 block h-60 w-full rounded border-0 bg-[#f5f5f5] p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary"
        placeholder="پیام شما ..."
      ></textarea>
      <CustomBtn sendText="ارسال پیام" cancelText="لغو پیام" />
    </form>
  );
};

export default Form;
