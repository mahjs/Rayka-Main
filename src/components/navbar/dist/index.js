"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Navbar = function () {
    var _a = react_1.useState(false), showNavbar = _a[0], setShowNavbar = _a[1];
    var pathname = navigation_1.usePathname();
    var RenderNavItem = function (_a) {
        var href = _a.href, text = _a.text;
        return (React.createElement("li", { className: (pathname === href ? "text-[#FEA918]" : "text-white") + " flex-col text-center text-[1.8rem]" },
            React.createElement(link_1["default"], { href: href }, text),
            pathname === href && React.createElement("p", { className: "text-inherit -mt-7" }, ".")));
    };
    var _b = react_1.useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
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
    // Make menu close after choosing one page.
    react_1.useEffect(function () {
        setShowNavbar(false);
    }, [pathname]);
    // Make body not scrollable after menu opened
    react_1.useEffect(function () {
        if (showNavbar) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [showNavbar]);
    return (React.createElement("div", { className: "navbar fixed left-0 right-0 top-0 z-50 flex w-full justify-between px-5 py-5 transition-all  duration-500 \n       md:pr-20 " + (isScrolled ? "bg-[#00000099]" : "") },
        React.createElement("ul", { className: "hidden gap-16 md:flex" },
            React.createElement(RenderNavItem, { href: "/", text: "\u062E\u0627\u0646\u0647" }),
            React.createElement(RenderNavItem, { href: "/about-us", text: "\u062F\u0631\u0628\u0627\u0631\u0647\u200C\u0645\u0627" }),
            React.createElement(RenderNavItem, { href: "/contact-us", text: "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627" }),
            React.createElement(RenderNavItem, { href: "/jobs", text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627\u06CC \u0634\u063A\u0644\u06CC" })),
        React.createElement("ul", { className: "fixed " + (showNavbar ? "left-0" : "left-full") + "  top-0  flex h-full w-full flex-col justify-center gap-10 bg-[#000000cc] backdrop-blur-md transition-all duration-500 md:hidden" },
            React.createElement("button", { onClick: function () { return setShowNavbar(false); }, className: "absolute left-5 top-2 flex items-center gap-3" },
                React.createElement("p", { className: "miniText text-white" }, "\u0628\u0627\u0632\u06AF\u0634\u062A"),
                React.createElement(image_1["default"], { src: "/images/arrow.svg", width: 15, height: 15, alt: "arrow icon" })),
            React.createElement(RenderNavItem, { href: "/", text: "\u062E\u0627\u0646\u0647" }),
            React.createElement(RenderNavItem, { href: "/about-us", text: "\u062F\u0631\u0628\u0627\u0631\u0647\u200C\u0645\u0627" }),
            React.createElement(RenderNavItem, { href: "/contact-us", text: "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627" }),
            React.createElement(RenderNavItem, { href: "/jobs", text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627\u06CC \u0634\u063A\u0644\u06CC" })),
        React.createElement(image_1["default"], { onClick: function () { return setShowNavbar(!showNavbar); }, className: "md:hidden", src: "/images/menu.svg", width: 25, height: 17, alt: "menu icon" }),
        React.createElement(link_1["default"], { href: "/", className: "mr-auto" },
            React.createElement(image_1["default"], { src: "/images/rayka-icon.svg", width: "50", height: "50", alt: "rayka icon" }))));
};
exports["default"] = Navbar;
