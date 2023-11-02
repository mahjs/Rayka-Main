"use strict";
exports.__esModule = true;
var Address_1 = require("@/components/contact-us/Address");
var Map_1 = require("@/components/contact-us/Map");
var MessagesForm_1 = require("@/components/contact-us/MessagesForm");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var bg_main_webp_1 = require("../../../public/images/bg-main.webp");
var ContactUsPage = function () {
    return (react_1["default"].createElement("div", { className: "select-none flex-col" },
        react_1["default"].createElement(image_1["default"], { src: bg_main_webp_1["default"], alt: "contact-us-bg", className: "h-[20rem] w-full object-cover md:h-[31.3rem]" }),
        react_1["default"].createElement("div", { className: "absolute top-40 w-full text-center text-white" },
            react_1["default"].createElement("h1", { className: "header-1" }, "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627"),
            react_1["default"].createElement("div", { className: "subtitle flex justify-center" },
                react_1["default"].createElement("p", null,
                    react_1["default"].createElement(link_1["default"], { href: "/" }, "\u062E\u0627\u0646\u0647-")),
                react_1["default"].createElement("p", { className: "text-primary" },
                    react_1["default"].createElement(link_1["default"], { href: "/contact-us" }, "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627")))),
        react_1["default"].createElement(MessagesForm_1["default"], null),
        react_1["default"].createElement(Address_1["default"], null),
        react_1["default"].createElement(Map_1["default"], null)));
};
exports["default"] = ContactUsPage;
