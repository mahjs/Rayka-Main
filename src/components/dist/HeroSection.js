"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var hero_image_webp_1 = require("@/assets/images/hero-image.webp");
var HeroSection = function (_a) {
    var heading = _a.heading, subHeading = _a.subHeading, childHeading = _a.childHeading;
    return (react_1["default"].createElement("div", { className: "relative flex h-[500px] items-center justify-center" },
        react_1["default"].createElement(image_1["default"], { src: hero_image_webp_1["default"], alt: "Descriptive alt text", className: "absolute h-full w-full object-cover" }),
        react_1["default"].createElement("div", { className: "z-10 text-center" },
            react_1["default"].createElement("h1", { className: "subtitle-1 mb-4 text-8xl font-extrabold\t\t text-white\t" }, heading),
            react_1["default"].createElement("h2", { className: "subtitle text-3xl font-medium\t text-gray-400" },
                subHeading,
                " ",
                react_1["default"].createElement("span", { className: "subtitle text-3xl font-medium text-primary" }, childHeading)))));
};
exports["default"] = HeroSection;
