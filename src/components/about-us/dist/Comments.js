"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var hero_image_webp_1 = require("@/assets/images/hero-image.webp");
var Carousel_1 = require("@/components/about-us/Carousel");
var CommentsCard_1 = require("./CommentsCard");
var Comments = function (_a) {
    var _b = react_1.useState(2), active = _b[0], setActive = _b[1];
    var cardsData = [
        {
            text: "dhsaskjli",
            name: "hossein",
            job: "backend"
        },
        {
            text: "amitkhodaaa",
            name: "reza",
            job: "ui/ux"
        },
        {
            text: "kdmlkdlk",
            name: "sina",
            job: "devops"
        },
    ];
    return (react_1["default"].createElement("div", { className: "relative mb-[14.35rem] flex h-[500px] items-start justify-center " },
        react_1["default"].createElement(image_1["default"], { src: hero_image_webp_1["default"], alt: "Descriptive alt text", className: "absolute h-full w-full object-cover" }),
        react_1["default"].createElement("div", { className: "z-10 flex w-full flex-col items-center justify-start gap-10 py-5" },
            react_1["default"].createElement("h1", { className: "title text-white" }, "\u0635\u062D\u0628\u062A \u0645\u062F\u06CC\u0631\u0627\u0646"),
            react_1["default"].createElement(Carousel_1["default"], { active: active, setActive: setActive }, cardsData.map(function (card, i) { return (react_1["default"].createElement(CommentsCard_1.CommentsCard, { key: i, text: card.text, name: card.name, job: card.job, isActive: i === active })); })))));
};
exports["default"] = Comments;
