"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var InfoText_1 = require("../dashboard/InfoText");
var honers1_svg_1 = require("@/assets/images/honers1.svg");
var honers2_svg_1 = require("@/assets/images/honers2.svg");
var honers3_svg_1 = require("@/assets/images/honers3.svg");
var honers4_svg_1 = require("@/assets/images/honers4.svg");
var honers5_svg_1 = require("@/assets/images/honers5.svg");
var honers6_svg_1 = require("@/assets/images/honers6.svg");
var informationData = [
    {
        id: 1,
        title: 17,
        text: "پروژه موفقیت‌آمیر"
    },
    {
        id: 2,
        title: 35,
        text: "پرسنل مجرب"
    },
    {
        id: 3,
        title: 7,
        text: "همکای‌های بین‌المللی"
    },
    {
        id: 4,
        title: 1,
        unit: "M",
        text: "تعداد کاربران"
    },
];
var images = [
    { src: honers3_svg_1["default"], alt: "honers3", text: "توسعه شبکه داخلی کشور" },
    {
        src: honers2_svg_1["default"],
        alt: "honers2",
        text: "توسعه سرویس ها"
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
    return (react_1["default"].createElement("div", { className: "relative mb-[3.63rem] flex  items-start md:mb-[6.63rem] " },
        react_1["default"].createElement(image_1["default"], { src: "/images/bg-main.webp", width: 800, height: 800, alt: "HonersBackground", className: " h-[74rem] w-full object-cover  md:h-[94.75rem]" }),
        react_1["default"].createElement("div", { className: "z-1 absolute flex w-full flex-col justify-center gap-y-12 py-6" },
            react_1["default"].createElement("p", { className: "title my-5 text-center text-6xl\t font-extrabold\t text-white" }, "\u0627\u0641\u062A\u062E\u0627\u0631\u0627\u062A \u0645\u0627"),
            " ",
            react_1["default"].createElement("div", { className: "mx-auto grid grid-cols-2 gap-6 px-7 md:grid-cols-3 md:gap-12" }, images.map(function (image, index) { return (react_1["default"].createElement("div", { className: "group relative", key: index },
                react_1["default"].createElement(image_1["default"], { src: image.src, alt: image.alt }),
                react_1["default"].createElement("div", { className: "absolute inset-0 mx-auto flex items-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-primary hover:opacity-50 focus:bg-primary focus:opacity-50" },
                    react_1["default"].createElement("span", { className: " subtitle-1 mx-auto px-[1.8rem] text-center text-4xl font-semibold text-primary transition-colors duration-300 ease-in-out group-hover:text-black group-focus:text-black" }, image.text)))); })),
            react_1["default"].createElement("div", { className: " grid w-full grid-cols-2 justify-evenly gap-5 md:flex " }, informationData.map(function (info) { return (react_1["default"].createElement(InfoText_1["default"], { key: info.id, title: info.title, text: info.text })); })))));
};
exports["default"] = Honers;
