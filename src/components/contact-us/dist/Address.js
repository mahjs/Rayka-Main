"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var ADDRESS_ITEMS = [
    {
        src: "/images/email.svg",
        alt: "email",
        text: "پست الکترونیکی",
        desc: "Support@Raika.ir"
    },
    {
        src: "/images/tell.svg",
        alt: "tell",
        text: "شماره تماس",
        desc: "+89 939 804 1111"
    },
    {
        src: "/images/map.svg",
        alt: "map",
        text: "نــشانی",
        desc: "تهران، اینجا، اونجا، روبروی فلان پلاک 1، واحد فلان"
    },
];
var reverseString = function (str) {
    return str.split("").reverse().join("");
};
var AddressItem = function (_a) {
    var src = _a.src, alt = _a.alt, text = _a.text, desc = _a.desc;
    return (react_1["default"].createElement("div", { className: "flex w-52 select-none flex-wrap items-center justify-center" },
        react_1["default"].createElement(image_1["default"], { className: "mx-6 h-[40%] w-[40%] ", width: 100, height: 100, src: src, alt: alt }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h5", { className: "header-5 mt-3 text-center" }, text),
            react_1["default"].createElement("p", { className: "Body-3 text-center" }, desc))));
};
var Address = function () {
    return (react_1["default"].createElement("div", { className: "mt-8 flex w-full items-stretch justify-evenly" }, ADDRESS_ITEMS.map(function (item) { return (react_1["default"].createElement(AddressItem, __assign({ key: item.alt }, item, { desc: item.alt === "tell" ? reverseString(item.desc) : item.desc }))); })));
};
exports["default"] = Address;
