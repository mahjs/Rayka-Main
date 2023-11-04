"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InfoText = function (_a) {
    var title = _a.title, text = _a.text;
    return (react_1["default"].createElement("div", { className: "flex-col items-center justify-center gap-5" },
        react_1["default"].createElement("p", { className: "number text-center text-[#FEA918]" }, title),
        react_1["default"].createElement("p", { className: "subtitle text-center text-white" }, text)));
};
exports["default"] = InfoText;
