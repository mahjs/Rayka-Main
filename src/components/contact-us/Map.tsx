import React from "react";

interface Env {
  NEXT_PUBLIC_MAP_URL?: string;
}

declare const process: {
  env: Env;
};

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d343.41692083310033!2d51.47284865715878!3d35.80365012474445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1698668039594!5m2!1sen!2s";
const MAP_URL: string = process.env.NEXT_PUBLIC_MAP_URL || DEFAULT_MAP_URL;

const Map = () => {
  return (
    <div className="mt-12 h-[400px] w-full">
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
