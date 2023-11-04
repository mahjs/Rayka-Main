"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomBtn = function (_a) {
    var sendText = _a.sendText;
    return (react_1["default"].createElement("div", { className: "mt-6 flex" },
        react_1["default"].createElement("button", { type: "submit", className: "btn-send" },
            sendText,
            react_1["default"].createElement("span", { className: "btn-shadow" }))));
};
exports["default"] = CustomBtn;
