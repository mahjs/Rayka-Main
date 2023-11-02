"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DEFAULT_MAP_URL = "https://map.ir/lat/35.803776/lng/51.472840/z/16/p/%D9%85%D8%A7%D8%A7%DB%8C%D9%86%D8%AC%D8%A7%DB%8C%DB%8C%D9%85";
var MAP_URL = process.env.NEXT_PUBLIC_MAP_URL || DEFAULT_MAP_URL;
var Map = function () {
    return (react_1["default"].createElement("div", { className: "mb-32 mt-12 h-[100px] w-full md:h-[350px]" },
        react_1["default"].createElement("iframe", { src: MAP_URL, width: "100%", height: "450", loading: "lazy", title: "\u0646\u0642\u0634\u0647 \u0645\u062D\u0644 \u0645\u0627" })));
};
exports["default"] = Map;
