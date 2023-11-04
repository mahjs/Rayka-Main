"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var truePerson_svg_1 = require("@/assets/images/truePerson.svg");
var Persons = function (_a) {
    var _b = react_1.useState(0), currentImageIndex = _b[0], setCurrentImageIndex = _b[1];
    var _c = react_1.useState(false), isTransitioning = _c[0], setIsTransitioning = _c[1];
    var _d = react_1.useState(3), imagesPerPage = _d[0], setImagesPerPage = _d[1];
    var transitionDuration = 800; // Increased duration for a slower, more subtle effect
    var data = [
        {
            name: "لیلا",
            surname: "حسب",
            images: truePerson_svg_1["default"]
        },
        {
            name: "نادری",
            surname: "مکوم",
            images: truePerson_svg_1["default"]
        },
        {
            name: "نادری",
            surname: "مدیسر",
            images: truePerson_svg_1["default"]
        },
        {
            name: "نادری",
            surname: "مدیسر",
            images: truePerson_svg_1["default"]
        },
        {
            name: "نادری",
            surname: "مدیسر",
            images: truePerson_svg_1["default"]
        },
        {
            name: "نادری",
            surname: "مدیسر",
            images: truePerson_svg_1["default"]
        },
    ];
    var nextImage = function () {
        if (currentImageIndex < data.length / imagesPerPage - 1) {
            setIsTransitioning(true); // Start the animation
            setTimeout(function () {
                setCurrentImageIndex(function (prev) { return prev + 1; });
                setIsTransitioning(false); // End the animation
            }, 300); // Change after 300ms
        }
    };
    var prevImage = function () {
        if (currentImageIndex > 0) {
            setIsTransitioning(true); // Start the animation
            setTimeout(function () {
                setCurrentImageIndex(function (prev) { return prev - 1; });
                setIsTransitioning(false); // End the animation
            }, 300); // Change after 300ms
        }
    };
    var visibleData = data.slice(currentImageIndex * imagesPerPage, (currentImageIndex + 1) * imagesPerPage);
    react_1.useEffect(function () {
        var updateImagesPerPage = function () {
            var newImagesPerPage = window.innerWidth < 500 ? 2 : 3;
            setImagesPerPage(newImagesPerPage);
        };
        window.addEventListener("resize", updateImagesPerPage);
        // Set initial value on mount
        updateImagesPerPage();
        // Cleanup event listener on unmount
        return function () { return window.removeEventListener("resize", updateImagesPerPage); };
    }, []);
    return (react_1["default"].createElement("div", { className: "mb-[6.69rem] flex flex-col items-center justify-center" },
        react_1["default"].createElement("p", { className: "title mb-[4rem]" }, "\u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u06CC \u0631\u0627\u06CC\u06A9\u0627"),
        react_1["default"].createElement("div", { className: "flex items-center justify-center gap-28" },
            react_1["default"].createElement("div", { id: "controls-carousel", className: "relative w-full", "data-carousel": "static" },
                react_1["default"].createElement("div", { className: "h-86 relative flex  w-[300rem] max-w-sm justify-center gap-4 overflow-hidden rounded-lg transition-all duration-300 md:h-[40rem] md:max-w-7xl md:gap-20 " + (isTransitioning ? "translate-x-[-100%] transform" : "") }, visibleData.map(function (item, index) { return (react_1["default"].createElement("div", { key: index, className: "group relative flex flex-col items-center justify-center" },
                    react_1["default"].createElement(image_1["default"], { src: item.images, alt: "truePerson", className: "mb-9 scale-100 transform rounded-2xl grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0" }),
                    react_1["default"].createElement("p", { className: "text-4xl font-bold" }, item.name),
                    react_1["default"].createElement("p", { className: "text-base font-medium" }, item.surname))); })),
                react_1["default"].createElement("button", { onClick: prevImage, type: "button", className: "group absolute left-0 top-6 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none", "data-carousel-prev": true },
                    react_1["default"].createElement("span", { className: "mb-[10rem]  inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70" },
                        react_1["default"].createElement("svg", { className: "h-4 w-4 text-white dark:text-gray-800", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10" },
                            react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 1 1 5l4 4" })),
                        react_1["default"].createElement("span", { className: "sr-only" }, "Previous"))),
                react_1["default"].createElement("button", { type: "button", className: "group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none", onClick: nextImage },
                    react_1["default"].createElement("span", { className: "mb-[7rem]  inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70" },
                        react_1["default"].createElement("svg", { className: "h-4 w-4 text-white dark:text-gray-800", "aria-hidden": "true", xmlns: "http www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 10" },
                            react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 9 4-4-4-4" })),
                        react_1["default"].createElement("span", { className: "sr-only" }, "Next")))))));
};
exports["default"] = Persons;
