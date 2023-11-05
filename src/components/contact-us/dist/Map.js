"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavigationService;
(function (NavigationService) {
    NavigationService["Mapir"] = "mapir";
    NavigationService["Neshan"] = "neshan";
    NavigationService["Google"] = "google";
})(NavigationService || (NavigationService = {}));
var DEFAULT_MAP_URL = "https://map.ir/lat/35.803776/lng/51.472840/z/16/p/%D9%85%D8%A7%D9%8A%D9%86%D8%AC%D8%A7%DB%8C%DB%8C%D9%85";
var MAP_URL = process.env.NEXT_PUBLIC_MAP_URL || DEFAULT_MAP_URL;
var Map = function () {
    var _a = react_1.useState(false), showModal = _a[0], setShowModal = _a[1];
    var openNavigation = function (service) {
        var _a;
        var navigationLinks = (_a = {},
            _a[NavigationService.Mapir] = "https://map.ir/lat/35.803851/lng/51.472974/z/18",
            _a[NavigationService.Neshan] = "https://neshan.org/maps/@35.803719,51.473093,19.3z,0p/places/_bvfZp_xRdsZ",
            _a[NavigationService.Google] = "https://maps.app.goo.gl/B2jSX3MbPCfWDPo99",
            _a);
        setShowModal(false);
        window.open(navigationLinks[service], "_blank");
    };
    var handleMapClick = function () {
        setShowModal(true);
    };
    return (react_1["default"].createElement("div", { className: "relative mb-32 mt-12 h-[400px] w-full md:h-[350px]" },
        react_1["default"].createElement("iframe", { src: MAP_URL, width: "100%", height: "450", loading: "lazy", title: "\u0646\u0642\u0634\u0647 \u0645\u062D\u0644 \u0645\u0627" }),
        react_1["default"].createElement("div", { className: "absolute left-0 top-0 h-full w-full cursor-pointer", onClick: handleMapClick }),
        showModal && (react_1["default"].createElement("div", { className: "fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50" },
            react_1["default"].createElement("div", { className: "h-64 w-[36rem] rounded bg-white p-5" },
                react_1["default"].createElement("button", { className: "Body rounded-lg bg-gray-50 px-5 py-2.5 text-primary shadow-2xl duration-300 hover:bg-gray-200", onClick: function () { return setShowModal(false); } }, "\u0628\u0633\u062A\u0646"),
                react_1["default"].createElement("div", { className: "mb-[2.5em] mt-[1.5em] select-none" },
                    react_1["default"].createElement("p", { className: "Body-2" }, "\u0627\u0632 \u06A9\u062F\u0627\u0645 \u0633\u0631\u0648\u06CC\u0633 \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F\u061F"),
                    react_1["default"].createElement("p", { className: "flex text-sm" },
                        react_1["default"].createElement("svg", { className: "ml-1 mt-[0.4em] h-4 w-4 text-gray-800 dark:text-gray-800", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20" },
                            react_1["default"].createElement("path", { fill: "currentColor", d: "m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" }),
                            react_1["default"].createElement("path", { fill: "#FEA918", d: "M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" })),
                        "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0645\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0647\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC \u0627\u0633\u062A.")),
                react_1["default"].createElement("div", { className: "flex items-stretch justify-around" },
                    react_1["default"].createElement("button", { className: "Body rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200", onClick: function () { return openNavigation(NavigationService.Mapir); } }, "map.ir"),
                    react_1["default"].createElement("button", { className: "Body rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200", onClick: function () { return openNavigation(NavigationService.Neshan); } }, "\u0646\u0634\u0627\u0646"),
                    react_1["default"].createElement("button", { className: "Body rounded-lg px-5 py-2.5 duration-300 hover:bg-gray-200", onClick: function () { return openNavigation(NavigationService.Google); } }, "\u06AF\u0648\u06AF\u0644 \u0645\u067E")))))));
};
exports["default"] = Map;
