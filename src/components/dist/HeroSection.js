"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeroSection = function (_a) {
    var heading = _a.heading, subHeading = _a.subHeading, childHeading = _a.childHeading;
    return (react_1["default"].createElement("div", { className: "flex h-[500px] items-center justify-center bg-main-image" },
        react_1["default"].createElement("div", { className: "z-10 text-center" },
            react_1["default"].createElement("h1", { className: "mb-4 text-8xl font-extrabold\t\t text-white\t" }, heading),
            react_1["default"].createElement("h2", { className: "text-3xl font-medium text-gray-400\t" },
                subHeading,
                " ",
                react_1["default"].createElement("span", { className: "subtitle text-3xl font-medium text-primary" }, childHeading)))));
};
exports["default"] = HeroSection;
