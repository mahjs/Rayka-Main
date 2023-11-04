"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var CustomBtn_1 = require("./CustomBtn");
require("react-toastify/dist/ReactToastify.css");
var react_toastify_1 = require("react-toastify");
var commonInputClasses = "peer block w-full appearance-none rounded border-0 bg-[#f5f5f5] px-5 py-5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-primary dark:text-white dark:focus:border-primary";
var FloatingInput = function (_a) {
    var type = _a.type, name = _a.name, id = _a.id, label = _a.label, pattern = _a.pattern;
    return (react_1["default"].createElement("div", { className: "group relative z-0 w-full " },
        react_1["default"].createElement("input", { type: type, name: name, id: id, className: commonInputClasses, placeholder: label, required: true, pattern: pattern, autoComplete: "off" })));
};
var Form = function () {
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var requestPromise, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault(); // Prevent form from submitting the traditional way
                    setIsLoading(true); // Set loading state to true
                    requestPromise = new Promise(function (resolve) { return setTimeout(resolve, 3000); });
                    react_toastify_1.toast.promise(requestPromise, {
                        pending: {
                            render: function (_a) {
                                var data = _a.data;
                                return react_1["default"].createElement("div", { className: "Body text-right\t " }, "...\u062F\u0631 \u062D\u0627\u0644 \u0627\u0631\u0633\u0627\u0644");
                            }
                        },
                        success: {
                            render: function (_a) {
                                var data = _a.data;
                                return (react_1["default"].createElement("div", { className: "Body text-right" }, "\u0631\u0627\u06CC\u06A9\u0627\u06CC\u06CC \u0639\u0632\u06CC\u0632 \u067E\u06CC\u0627\u0645 \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F"));
                            }
                        },
                        error: {
                            render: function (_a) {
                                var data = _a.data;
                                return (react_1["default"].createElement("div", { className: "Body text-right" }, "\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u067E\u06CC\u0627\u0645 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0646\u0634\u062F \u0645\u062C\u062F\u062F \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F."));
                            }
                        }
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, requestPromise];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error when submitting form", error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false); // Set loading state back to false
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { className: "mt-4 w-full md:mt-7", onSubmit: handleSubmit },
            react_1["default"].createElement(react_toastify_1.ToastContainer, null),
            react_1["default"].createElement("div", { className: "grid select-none grid-cols-2 gap-4 md:gap-7" },
                react_1["default"].createElement(FloatingInput, { type: "text", name: "floating_first_name", id: "floating_first_name", label: "\u0646\u0627\u0645 \u0634\u0645\u0627" }),
                react_1["default"].createElement(FloatingInput, { type: "text", name: "floating_last_name", id: "floating_last_name", label: "\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC", pattern: "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,6}$" }),
                react_1["default"].createElement(FloatingInput, { type: "tel", name: "floating_phone", id: "floating_phone", label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646", pattern: "\\+(?:[0-9] ?){6,14}[0-9]" }),
                react_1["default"].createElement(FloatingInput, { type: "text", name: "floating_company", id: "floating_company", label: "\u0645\u0648\u0636\u0648\u0639 \u0645\u062A\u0646" })),
            react_1["default"].createElement("textarea", { id: "message", className: "row-span-4 mt-4 block h-40 w-full rounded border-0 bg-[#f5f5f5] p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary md:mt-7 md:h-60", placeholder: "\u067E\u06CC\u0627\u0645 \u0634\u0645\u0627 ..." }),
            react_1["default"].createElement(CustomBtn_1["default"], { sendText: isLoading ? "در حال ارسال..." : "ارسال پیام" }))));
};
exports["default"] = Form;
