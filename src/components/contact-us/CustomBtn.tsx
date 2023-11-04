import React from "react";

interface CustomBtnProps {
  sendText: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ sendText }) => {
  return (
    <div className="mt-6 flex">
      <button type="submit" className="btn-send">
        {sendText}
        <span className="btn-shadow"></span>
      </button>
    </div>
  );
};

export default CustomBtn;
