import React from "react";

interface CustomBtnProps {
  sendText: string;
  cancelText: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ sendText, cancelText }) => {
  return (
    <div className="mt-6 flex">
      <button type="submit" className="btn-send">
        {sendText}
        <span className="btn-shadow"></span>
      </button>
      <button type="submit" className="btn-cancel hidden lg:flex">
        {cancelText}
      </button>
    </div>
  );
};

export default CustomBtn;
