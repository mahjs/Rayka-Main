"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var arrow_right_svg_1 = require("@/assets/images/arrow-right.svg");
var arrow_left_svg_1 = require("@/assets/images/arrow-left.svg");
var image_1 = require("next/image");
var MAX_VISIBILITY = 3;
var Carousel = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(2), active = _b[0], setActive = _b[1];
    var count = react_1["default"].Children.count(children);
    return (react_1["default"].createElement("div", { className: "carousel" },
        active > 0 && (react_1["default"].createElement("button", { type: "button", "aria-label": "Next", className: "nav left", onClick: function () { return setActive(function (i) { return i - 1; }); } },
            react_1["default"].createElement(image_1["default"], { src: arrow_left_svg_1["default"], alt: "arrow left" }))),
        react_1["default"].Children.map(children, function (child, i) { return (react_1["default"].createElement("div", { className: "card-container", style: {
                // @ts-ignore
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                "pointer-events": active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block"
            } }, child)); }),
        active < count - 1 && (react_1["default"].createElement("button", { "aria-label": "Next", type: "button", className: "nav right", onClick: function () { return setActive(function (i) { return i + 1; }); } },
            react_1["default"].createElement(image_1["default"], { src: arrow_right_svg_1["default"], alt: "arrow right" })))));
};
exports["default"] = Carousel;
