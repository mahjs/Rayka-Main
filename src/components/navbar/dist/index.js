"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Navbar = function () {
    var RenderNavItem = function (_a) {
        var href = _a.href, text = _a.text;
        var pathname = navigation_1.usePathname();
        return (React.createElement("li", { className: (pathname === href ? "text-[#FEA918]" : "text-white") + " flex-col text-center text-[1.8rem]" },
            React.createElement(link_1["default"], { href: href }, text),
            pathname === href && React.createElement("p", { className: "text-inherit -mt-7" }, ".")));
    };
    var _a = react_1.useState(false), isScrolled = _a[0], setIsScrolled = _a[1];
    react_1.useEffect(function () {
        var handleScroll = function () {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (React.createElement("div", { className: "navbar fixed left-0 right-0  top-0 z-40 flex w-full px-20 py-5 backdrop-blur-sm transition-all  duration-300 " + (isScrolled ? "bg-[#000000cc]" : "") },
        React.createElement("ul", { className: "subtitle flex gap-16" },
            React.createElement(RenderNavItem, { href: "/", text: "\u062E\u0627\u0646\u0647" }),
            React.createElement(RenderNavItem, { href: "/about-us", text: "\u062F\u0631\u0628\u0627\u0631\u0647\u200C\u0645\u0627" }),
            React.createElement(RenderNavItem, { href: "/contact-us", text: "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627" }),
            React.createElement(RenderNavItem, { href: "/jobs", text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627\u06CC \u0634\u063A\u0644\u06CC" })),
        React.createElement(link_1["default"], { href: "/", className: "mr-auto" },
            React.createElement(image_1["default"], { src: "/images/rayka-icon.svg", width: "50", height: "50", alt: "rayka icon" }))));
};
exports["default"] = Navbar;
