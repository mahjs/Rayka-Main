"use client";
import React, { useState } from "react";

enum NavigationService {
  Mapir = "mapir",
  Neshan = "neshan",
  Google = "google",
}

interface Env {
  NEXT_PUBLIC_MAP_URL?: string;
}

declare const process: {
  env: Env;
};

const DEFAULT_MAP_URL =
  "https://map.ir/lat/35.803776/lng/51.472840/z/16/p/%D9%85%D8%A7%D9%8A%D9%86%D8%AC%D8%A7%DB%8C%DB%8C%D9%85";
const MAP_URL: string = process.env.NEXT_PUBLIC_MAP_URL || DEFAULT_MAP_URL;

const navigationLinks = {
  [NavigationService.Mapir]: "https://map.ir/lat/35.803851/lng/51.472974/z/18",
  [NavigationService.Neshan]:
    "https://neshan.org/maps/@35.803719,51.473093,19.3z,0p/places/_bvfZp_xRdsZ",
  [NavigationService.Google]: "https://maps.app.goo.gl/B2jSX3MbPCfWDPo99",
};

const Map: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const openNavigation = (service: NavigationService) => {
    setShowModal(false);
    window.open(navigationLinks[service], "_blank");
  };

  const handleMapClick = () => {
    setShowModal(true);
  };

  return (
    <div className="relative inset-0 mb-32 mt-12 h-[400px] w-full md:h-[350px]">
      <iframe
        src={MAP_URL}
        width="100%"
        height="450"
        loading="lazy"
        title="نقشه محل ما"
      ></iframe>
      <div
        className="absolute left-0 top-0 h-full w-full cursor-pointer"
        onClick={handleMapClick}
      ></div>

      {showModal && (
        <div
          onClick={handleModalClose}
          className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-56 w-[20rem] md:h-[20rem] md:w-[36rem] rounded bg-white p-5"
          >
            <button
              className="title-2 rounded-lg bg-gray-50 px-5 py-2.5 text-primary shadow-2xl duration-300 hover:bg-gray-200"
              onClick={() => setShowModal(false)}
            >
              بستن
            </button>
            <div className="mb-[2.5em] mt-[1.5em] select-none">
              <p className="title-2">
                از کدام سرویس مسیریابی می‌خواهید استفاده کنید؟
              </p>
              <p className="flex miniText">
                <svg
                  className="ml-1 md:mt-[0.1em] mt-[0.4em] w-2 h-2 md:h-4 md:w-4 text-gray-800 dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                  />
                  <path
                    fill="#FEA918"
                    d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                  />
                </svg>
                پیشنهاد ما به شما استفاده از اپلیکیشن های داخلی است.
              </p>
            </div>
            <div className="flex items-stretch justify-around">
              <button
                className="title-1 rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200"
                onClick={() => openNavigation(NavigationService.Mapir)}
              >
                map.ir
              </button>
              <button
                className="title-1 rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200"
                onClick={() => openNavigation(NavigationService.Neshan)}
              >
                نشان
              </button>
              <button
                className="title-1 rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200"
                onClick={() => openNavigation(NavigationService.Google)}
              >
                گوگل مپ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
