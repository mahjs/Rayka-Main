import React from "react";

interface Env {
  NEXT_PUBLIC_MAP_URL?: string;
}

declare const process: {
  env: Env;
};

const DEFAULT_MAP_URL =
  "https://map.ir/lat/35.803776/lng/51.472840/z/16/p/%D9%85%D8%A7%D8%A7%DB%8C%D9%86%D8%AC%D8%A7%DB%8C%DB%8C%D9%85";
const MAP_URL: string = process.env.NEXT_PUBLIC_MAP_URL || DEFAULT_MAP_URL;

const Map = () => {
  return (
    <div className="relative mb-32 mt-12 h-[400px] w-full md:h-[350px]">
      <iframe
        src={MAP_URL}
        width="100%"
        height="450"
        loading="lazy"
        title="نقشه محل ما"
      ></iframe>
    </div>
  );
};

export default Map;
