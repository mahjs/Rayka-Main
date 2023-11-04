"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var honersBackground_svg_1 = require("@/assets/images/honersBackground.svg");
var honers1_svg_1 = require("@/assets/images/honers1.svg");
var honers2_svg_1 = require("@/assets/images/honers2.svg");
var honers3_svg_1 = require("@/assets/images/honers3.svg");
var honers4_svg_1 = require("@/assets/images/honers4.svg");
var honers5_svg_1 = require("@/assets/images/honers5.svg");
var honers6_svg_1 = require("@/assets/images/honers6.svg");
var informationData = [
    {
        id: 1,
        title: "17",
        text: "پروژه موفقیت‌آمیر"
    },
    {
        id: 2,
        title: "35+",
        text: "پرسنل مجرب"
    },
    {
        id: 3,
        title: "7+",
        text: "همکای‌های بین‌المللی"
    },
    {
        id: 4,
        title: "1M+",
        text: "تعداد کاربران"
    },
];
var images = [
    { src: honers3_svg_1["default"], alt: "honers3", text: "توسعه شبکه داخلی کشور" },
    {
        src: honers2_svg_1["default"],
        alt: "honers2",
        text: "توسعه شبکه داخلی کشور با استفاده از سرویس‌های بین‌المللی"
    },
    {
        src: honers1_svg_1["default"],
        alt: "honers1",
        text: "سرویس‌های بین‌المللی در شبکه ملی کشور"
    },
    { src: honers6_svg_1["default"], alt: "honers6", text: "Liquid Data Storage" },
    { src: honers5_svg_1["default"], alt: "honers5", text: "تامین اطلاعات با سرعت بالا" },
    { src: honers4_svg_1["default"], alt: "honers4", text: "3D V- CACHE" },
];
var Honers = function (_a) {
    return (react_1["default"].createElement("div", { className: "relative mb-[6.63rem]  flex items-start " },
        react_1["default"].createElement(image_1["default"], { src: honersBackground_svg_1["default"], alt: "HonersBackground", className: "  h-[94.75rem] w-full  object-cover" }),
        react_1["default"].createElement("div", { className: "z-1 absolute flex w-full flex-col justify-center gap-y-12 py-24" },
            react_1["default"].createElement("p", { className: "my-5 text-center text-6xl\t font-extrabold\t text-white" }, "\u0627\u0641\u062A\u062E\u0627\u0631\u0627\u062A \u0645\u0627"),
            " ")));
};
exports["default"] = Honers;
