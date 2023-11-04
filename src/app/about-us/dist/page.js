"use strict";
exports.__esModule = true;
var HeroSection_1 = require("@/components/HeroSection");
var image_1 = require("next/image");
var Honers_1 = require("@/components/about-us/Honers");
var react_1 = require("react");
var Persons_1 = require("@/components/about-us/Persons");
var Comments_1 = require("@/components/about-us/Comments");
var page = function (_a) {
    return (react_1["default"].createElement("div", { className: "flex-col" },
        react_1["default"].createElement(HeroSection_1["default"], { heading: "\u062F\u0631\u0628\u0627\u0631\u0647 \u06CC \u0645\u0627", subHeading: "\u062E\u0627\u0646\u0647 -", childHeading: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627" }),
        react_1["default"].createElement("div", { className: "relative flex md:m-[8rem]" },
            react_1["default"].createElement("div", { className: "absolute h-[18rem] -rotate-[2deg] rounded-lg bg-[#FEA918] md:w-[100.2%] md:rounded-3xl" }),
            react_1["default"].createElement("div", { style: {
                    backgroundSize: "100%",
                    flexGrow: "1"
                }, className: "relative flex-col items-center justify-center rounded-lg bg-main-image md:h-[20rem] md:w-[80%] md:rounded-3xl" },
                react_1["default"].createElement("div", { className: "absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-3xl bg-black bg-opacity-30" })),
            react_1["default"].createElement("div", { className: "absolute z-20 flex w-full flex-col gap-y-4 rounded-3xl px-[7.8rem] py-[1rem]" },
                react_1["default"].createElement(image_1["default"], { src: "/images/rayka-icon.svg", width: "50", height: "50", alt: "rayka icon", className: "w-12 md:w-16 " }),
                react_1["default"].createElement("p", { className: "  title-2 text-5xl font-bold\ttext-primary" }, "\u062F\u0631\u0628\u0627\u0647\u200C\u0645\u0627 "),
                react_1["default"].createElement("p", { className: "  Body mt-3\t text-justify text-[1rem] font-medium\ttext-white" }, "\u0645\u0627 \u062F\u0631 \u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u06CC \u0633\u062E\u062A \u06A9\u0648\u0634 \u0648 \u062E\u0633\u062A\u06AF\u06CC \u0646\u0627\u067E\u0630\u06CC\u0631 \u0634\u0631\u06A9\u062A \u0645\u0627\u0648\u0631\u0627\u06CC \u0627\u0628\u0639\u0627\u062F \u0631\u0627\u06CC\u06A9\u0627 \u060C \u0628\u0631\u0627\u06CC \u062A\u062D\u0642\u0642 \u0631\u0648\u06CC\u0627\u0647\u0627\u06CC\u0645\u0627\u0646 \u0645\u06CC\u062C\u0646\u06AF\u06CC\u0645. \u062F\u0631 \u06A9\u0646\u0627\u0631 \u0647\u0645 \u0645\u06CC\u0633\u0627\u0632\u06CC\u0645 \u0648 \u0627\u0632 \u062A\u0645\u0627\u0634\u0627\u06CC \u0622\u0646\u0686\u0647 \u0631\u0648\u0632\u06CC \u062A\u0635\u0648\u0631 \u06A9\u0631\u062F\u0647 \u0628\u0648\u062F\u06CC\u0645 \u0648 \u062D\u0627\u0644\u0627 \u0628\u0647 \u0622\u0646 \u062A\u062C\u0633\u0645 \u0628\u062E\u0634\u06CC\u062F\u0647 \u0627\u06CC\u0645 \u0644\u0630\u062A \u0645\u06CC\u0628\u0631\u06CC\u0645. \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647 \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F."),
                " ")),
        react_1["default"].createElement(Honers_1["default"], null),
        react_1["default"].createElement(Persons_1["default"], null),
        react_1["default"].createElement(Comments_1["default"], null)));
};
exports["default"] = page;
