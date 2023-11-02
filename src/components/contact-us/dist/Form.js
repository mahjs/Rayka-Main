"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomBtn_1 = require("./CustomBtn");
var FloatingInput = function (_a) {
    var type = _a.type, name = _a.name, id = _a.id, label = _a.label, pattern = _a.pattern;
    var commonInputClasses = "peer block w-full appearance-none rounded border-0 bg-[#f5f5f5] px-5 py-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-primary dark:text-white dark:focus:border-primary";
    var commonLabelClasses = "absolute top-[1.4em] origin-[0] scale-75 pr-5 text-sm text-gray-500 peer-placeholder-shown:opacity-1 peer-placeholder-shown:scale-100 peer-focus:-right-2 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900 peer-focus:opacity-0";
    return (react_1["default"].createElement("div", { className: "group relative z-0 w-full " },
        react_1["default"].createElement("input", { type: type, name: name, id: id, className: commonInputClasses, placeholder: " ", required: true, pattern: pattern }),
        react_1["default"].createElement("label", { htmlFor: id, className: commonLabelClasses }, label)));
};
var Form = function () {
    return (react_1["default"].createElement("form", { className: "mt-4 w-full md:mt-7" },
        react_1["default"].createElement("div", { className: "grid select-none grid-cols-2 gap-4 md:gap-7" },
            react_1["default"].createElement(FloatingInput, { type: "text", name: "floating_first_name", id: "floating_first_name", label: "\u0646\u0627\u0645 \u0634\u0645\u0627" }),
            react_1["default"].createElement(FloatingInput, { type: "text", name: "floating_last_name", id: "floating_last_name", label: "\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC" }),
            react_1["default"].createElement(FloatingInput, { type: "tel", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", name: "floating_phone", id: "floating_phone", label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646" }),
            react_1["default"].createElement(FloatingInput, { type: "text", name: "floating_company", id: "floating_company", label: "\u0645\u0648\u0636\u0648\u0639 \u0645\u062A\u0646" })),
        react_1["default"].createElement("textarea", { id: "message", className: "row-span-4 mt-4 md:mt-7 block h-40 w-full rounded border-0 bg-[#f5f5f5] p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary md:h-60", placeholder: "\u067E\u06CC\u0627\u0645 \u0634\u0645\u0627 ..." }),
        react_1["default"].createElement(CustomBtn_1["default"], { sendText: "\u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645" })));
};
exports["default"] = Form;
