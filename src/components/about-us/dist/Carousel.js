"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MAX_VISIBILITY = 3;
var Carousel = function (_a) {
    var children = _a.children, active = _a.active, setActive = _a.setActive;
    var count = react_1["default"].Children.count(children);
    return (react_1["default"].createElement("div", { className: "carousel" }, react_1["default"].Children.map(children, function (child, i) { return (react_1["default"].createElement("div", { className: "card-container", style: {
            // @ts-ignore
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block"
        } }, child)); })));
};
exports["default"] = Carousel;
