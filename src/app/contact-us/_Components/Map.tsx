"use client";
import React, { useState } from "react";

/**
 * Enum for supported navigation services.
 */
enum NavigationService {
  Mapir = "mapir",
  Neshan = "neshan",
  Google = "google",
}

/**
 * Interface for environment variables.
 */
interface Env {
  NEXT_PUBLIC_MAP_URL?: string;
}

/**
 * Global declaration for accessing environment variables.
 */
declare const process: {
  env: Env;
};

// Default and environment-based URL for the map
const DEFAULT_MAP_URL =
  "https://map.ir/lat/35.803776/lng/51.472840/z/16/p/%D9%85%D8%A7%D8%A7%DB%8C%D9%86%D8%AC%D8%A7%DB%8C%DB%8C%D9%85";
const MAP_URL: string = process.env.NEXT_PUBLIC_MAP_URL || DEFAULT_MAP_URL;

/**
 * Map component for displaying location on an interactive map.
 * This component checks the device type and opens an appropriate navigation service.
 * It also includes a modal for desktop users to choose the navigation service.
 *
 * @component
 * @returns {React.ReactElement} Interactive map component with navigation options.
 */
const Map: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Detects if the device is mobile.
   * @returns {boolean} True if the device is mobile, otherwise false.
   */
  const isMobile = (): boolean =>
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  /**
   * Closes the modal when clicked outside of it.
   * @param {React.MouseEvent<HTMLDivElement>} e - The mouse event.
   */
  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  /**
   * Handles map click event.
   * Opens navigation service for mobile or shows modal for desktop.
   */
  const handleMapClick = (): void => {
    if (isMobile()) {
      openNavigation(NavigationService.Google);
    } else {
      setShowModal(true);
    }
  };

  /**
   * Opens a URL based on the selected navigation service.
   * @param {NavigationService} service - The navigation service to be used.
   */
  const openNavigation = (service: NavigationService): void => {
    let url: string;

    switch (service) {
      case NavigationService.Mapir:
        url = "https://map.ir/lat/35.803851/lng/51.472974/z/18";
        break;
      case NavigationService.Neshan:
        url =
          "https://neshan.org/maps/@35.803719,51.473093,19.3z,0p/places/_bvfZp_xRdsZ1";
        break;
      case NavigationService.Google:
      default:
        if (isMobile()) {
          url = "geo:35.803776,51.472840";
        } else {
          url = "https://www.google.com/maps?q=35.803776,51.472840";
        }
        break;
    }
    setShowModal(false);
    window.open(url, "_blank");
  };

  return (
    <div className="relative inset-0 mt-4 h-[450px] w-full md:h-[430px]">
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
            className="h-56 w-[20rem] rounded bg-white p-5 md:h-[19rem] md:w-[36rem]"
          >
            <button
              className="btn-2 rounded-lg bg-gray-50 px-5 py-2.5 text-primary shadow-2xl duration-300 hover:bg-gray-200"
              onClick={() => setShowModal(false)}
            >
              بستن
            </button>
            <div className="mb-[2.5em] mt-[1.5em] select-none">
              <p className="title-4">
                از کدام سرویس مسیریابی می‌خواهید استفاده کنید؟
              </p>
              <p className="miniText flex">
                <svg
                  className="ml-1 mt-[0.4em] h-2 w-2 text-gray-800 dark:text-gray-800 md:mt-[0.1em] md:h-4 md:w-4"
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
                className="subtitle-2 rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200"
                onClick={() => openNavigation(NavigationService.Mapir)}
              >
                map.ir
              </button>
              <button
                className="subtitle-2 rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200"
                onClick={() => openNavigation(NavigationService.Neshan)}
              >
                نشان
              </button>
              <button
                className="subtitle-2 rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200"
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
