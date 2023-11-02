"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var hero_image_webp_1 = require("@/assets/images/hero-image.webp");
var truePerson_svg_1 = require("@/assets/images/truePerson.svg");
var Carousel_1 = require("@/app/about-us/Carousel");
var CARDS = 10;
var Comments = function (_a) {
    var testimonials = [
        {
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
            imageSrc: truePerson_svg_1["default"],
            name: "محمدرضا علیمردانی",
            title: "مدیریت لورم ایپسوم"
        },
    ];
    var _b = react_1.useState(0), currentImageIndex = _b[0], setCurrentImageIndex = _b[1];
    var _c = react_1.useState(false), isTransitioning = _c[0], setIsTransitioning = _c[1];
    var nextImage = function () {
        if (currentImageIndex < testimonials.length + 1) {
            setIsTransitioning(true);
            setTimeout(function () {
                setCurrentImageIndex(currentImageIndex + 1);
                setIsTransitioning(false);
            }, 300); // Assuming 300ms is your transition time
        }
    };
    var prevImage = function () {
        if (currentImageIndex > 0) {
            setIsTransitioning(true);
            setTimeout(function () {
                setCurrentImageIndex(currentImageIndex - 1);
                setIsTransitioning(false);
            }, 300); // Assuming 300ms is your transition time
        }
    };
    var Card = function (_a) {
        var title = _a.title, content = _a.content;
        return (react_1["default"].createElement("div", { className: " flex justify-center gap-8" },
            react_1["default"].createElement("div", { className: "  flex flex-row-reverse justify-center gap-8" }, testimonials.map(function (testimonial, index) { return (react_1["default"].createElement("div", { key: index, className: "relative mt-4 flex w-[32rem] flex-col gap-12 \n                " + (index < currentImageIndex
                    ? "-translate-x-50p opacity-50"
                    : index > currentImageIndex
                        ? "translate-x-50p opacity-50"
                        : "translate-x-0 opacity-100") + "\n                " + (isTransitioning
                    ? "transform transition-opacity transition-transform duration-300 ease-out"
                    : "") + "\n                " },
                react_1["default"].createElement("div", { className: "rounded-2xl p-[1.90rem] text-justify \n                 " + (index === currentImageIndex ? "bg-primary" : "bg-gray-500") },
                    react_1["default"].createElement("p", null, testimonial.text),
                    react_1["default"].createElement("div", { className: "absolute mt-6 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[40px] border-l-transparent border-r-transparent \n                    " + (index === currentImageIndex
                            ? "border-t-primary"
                            : "border-t-gray-500") })),
                react_1["default"].createElement("div", { className: "flex items-center justify-start gap-5" },
                    react_1["default"].createElement("div", { className: "h-20 w-20 rounded-full border-4 border-solid border-primary bg-black" },
                        react_1["default"].createElement("div", { className: "mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent" },
                            react_1["default"].createElement(image_1["default"], { src: testimonial.imageSrc, alt: testimonial.name, className: "rounded-full object-cover" }))),
                    react_1["default"].createElement("div", { className: "flex flex-col gap-3" },
                        react_1["default"].createElement("p", { className: "text-3xl font-bold text-white" }, testimonial.name),
                        react_1["default"].createElement("p", { className: "text-xl font-medium text-[#8C8C8C]" }, testimonial.title))))); })),
            currentImageIndex > 0 && (react_1["default"].createElement("button", { onClick: prevImage, type: "button", className: "group absolute left-0 top-6 z-30 flex h-full cursor-pointer items-center justify-center pl-[40rem] focus:outline-none", "data-carousel-prev": true },
                react_1["default"].createElement("span", { className: "mb-[10rem]  inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70" },
                    react_1["default"].createElement("svg", { className: "h-4 w-4 text-white dark:text-gray-800", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10" },
                        react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 1 1 5l4 4" })),
                    react_1["default"].createElement("span", { className: "sr-only" }, "Previous")))),
            currentImageIndex < testimonials.length - 1 && (react_1["default"].createElement("button", { type: "button", className: "group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center pr-[40rem] focus:outline-none", onClick: nextImage },
                react_1["default"].createElement("span", { className: "mb-[7rem]  inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70" },
                    react_1["default"].createElement("svg", { className: "h-4 w-4 text-white dark:text-gray-800", "aria-hidden": "true", xmlns: "http www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10" },
                        react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 9 4-4-4-4" })),
                    react_1["default"].createElement("span", { className: "sr-only" }, "Next"))))));
    };
    return (react_1["default"].createElement("div", { className: "relative mb-[14.35rem] flex h-[500px] items-start justify-center " },
        react_1["default"].createElement(image_1["default"], { src: hero_image_webp_1["default"], alt: "Descriptive alt text", className: "absolute h-full w-full object-cover" }),
        react_1["default"].createElement("div", { className: "z-10 flex w-full flex-col items-center justify-start gap-10" },
            react_1["default"].createElement("h1", { className: "text-6xl font-bold text-white" }, "\u0635\u062D\u0628\u062A \u0645\u062F\u06CC\u0631\u0627\u0646"),
            react_1["default"].createElement(Carousel_1["default"], null, __spreadArrays(new Array(CARDS)).map(function (_, i) { return (react_1["default"].createElement(Card, null)); })))));
};
exports["default"] = Comments;
