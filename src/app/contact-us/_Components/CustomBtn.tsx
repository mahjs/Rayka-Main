import React from "react";

const CustomBtn: React.FC<{ sendText: string }> = ({ sendText }) => {
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
