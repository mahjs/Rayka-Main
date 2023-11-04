"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var navbar_1 = require("@/components/navbar");
var footer_1 = require("@/components/footer");
exports.metadata = {
    title: "ماورای ابعاد رایکا",
    description: "همگام با تکنولوژی برای آینده ای هوشمندتر"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", dir: "rtl" },
        React.createElement("body", null,
            React.createElement(navbar_1["default"], null),
            children,
            React.createElement(footer_1["default"], null))));
}
exports["default"] = RootLayout;
