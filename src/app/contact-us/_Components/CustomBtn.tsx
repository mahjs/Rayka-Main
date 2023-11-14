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
        }
        .btn::before {
          transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          content: "";
          width: 12%;
          height: 100%;
          background: #1818186c;
          position: absolute;
          top: 0;
          right: -14px;
          transform: skewX(-25deg);
        }

        .btn:hover::before {
          background: #111111;
          width: 115%;
          transform: skewX(-25deg);
          opacity: 0.4;
        }
      `}</style>

      <div className="mt-6 flex">
        <button
          type="submit"
          className="btn ml-6 overflow-hidden rounded-lg bg-primary px-14 py-3.5 text-center text-black focus:outline-none focus:ring-4 focus:ring-primary"
        >
          {sendText}
        </button>
      </div>
    </>
  );
};

export default CustomBtn;
