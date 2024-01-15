import React, { useRef, ChangeEvent } from "react";

interface UploadBtnProps {
  onFileSelect: (file: File | null) => void;
  selectedFileName?: string | null;
}


const UploadBtn: React.FC<UploadBtnProps> = ({ onFileSelect, selectedFileName }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    onFileSelect(file);
    if (fileInputRef.current) {
      fileInputRef.current.files = event.dataTransfer.files;
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const clearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      onFileSelect(null);
    }
  };
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
      />
      <div
        ref={dropZoneRef}
        className="mt-6 flex w-full items-center justify-between gap-4 rounded-2xl border border-dashed border-gray-300 p-4 lg:w-[48rem]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <button className="p-1 text-[0.8rem] lg:text-[1.24925rem] font-[600]" onClick={() => fileInputRef.current?.click()}>
          {selectedFileName || 'جهت آپلود فایل کلیک کنید یا آن را اینجا رها کنید ...'}
        </button>
        {selectedFileName && (
          <button onClick={clearFile}>X</button>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M9.33334 15.9998V5.13315L5.86667 8.59982L4 6.66648L10.6667 -0.000183105L17.3333 6.66648L15.4667 8.59982L12 5.13315V15.9998H9.33334ZM2.66667 21.3332C1.93334 21.3332 1.30534 21.0718 0.782669 20.5492C0.260002 20.0265 -0.000886625 19.3989 2.26373e-06 18.6665V14.6665H2.66667V18.6665H18.6667V14.6665H21.3333V18.6665C21.3333 19.3998 21.072 20.0278 20.5493 20.5505C20.0267 21.0732 19.3991 21.334 18.6667 21.3332H2.66667Z"
            fill="#111111"
          />
        </svg>
      </div>
    </>
  );
};

export default UploadBtn;
