import React from "react";

/**
 * Props interface for CustomBtn component.
 * @property {string} sendText - The text to display on the button.
 */
interface CustomBtnProps {
  sendText: string;
}

/**
 * CustomBtn component.
 * Renders a stylized button with a unique hover effect.
 * The button receives its text from the sendText prop.
 *
 * The component uses a local <style> tag for custom CSS, which defines
 * the appearance and hover effect of the button. The use of local styles
 * ensures that these styles are scoped to this component only.
 *
 * @param {CustomBtnProps} props - Props containing the text for the button.
 * @returns {JSX.Element} - A button within a flex container.
 */
const CustomBtn: React.FC<CustomBtnProps> = ({ sendText }) => {
  return (
    <>
      <style jsx>{`
        .btn {
          border: none;
          position: relative;
          cursor: pointer;
          transition: color 2.2s ease;
        }
        .btn::before {
          transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          content: "";
          width: 12%;
          height: 100%;
          background: #000;
          position: absolute;
          top: 0;
          right: -14px;
          transform: skewX(-25deg);
        }

        .btn:hover::before {
          background: #000;
          width: 115%;
          transform: skewX(-25deg);
          // opacity: 0.6;
        }
        .btn:hover {
          color: #fff;
        }
      `}</style>

      <div className="mt-6 flex">
        <button
          type="submit"
          className="btn ml-6 overflow-hidden rounded-lg bg-primary px-14 py-3.5 text-center font-[100] text-black focus:outline-none focus:ring-4 focus:ring-primary"
        >
          <p className="absolute font-[100]">{sendText}</p>
          {sendText}
        </button>
      </div>
    </>
  );
};

export default CustomBtn;
