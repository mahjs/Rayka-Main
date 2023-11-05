"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var HeroSection = function (_a) {
    var heading = _a.heading, subHeading = _a.subHeading, childHeading = _a.childHeading;
    return (react_1["default"].createElement("div", { className: "flex w-full flex-col justify-center bg-main-image pb-5 pt-16 text-center text-white md:h-[500px] md:pt-0" },
        react_1["default"].createElement("h1", { className: "header-1" }, heading),
        react_1["default"].createElement("div", { className: "subtitle flex justify-center" },
            react_1["default"].createElement("p", null,
                react_1["default"].createElement(link_1["default"], { href: "/" }, subHeading)),
            react_1["default"].createElement("p", { className: "text-primary" },
                react_1["default"].createElement(link_1["default"], { href: "/jobs" }, childHeading)))));
};
exports["default"] = HeroSection;
