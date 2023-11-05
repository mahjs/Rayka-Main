"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InfoText = function (_a) {
    var title = _a.title, text = _a.text, unit = _a.unit;
    var numberRef = react_1.useRef(null);
    var _b = react_1.useState(false), startAnimation = _b[0], setStartAnimation = _b[1];
    var _c = react_1.useState(0), showValue = _c[0], setShowValue = _c[1];
    react_1.useEffect(function () {
        if (!startAnimation || showValue === title)
            return;
        setTimeout(function () { return setShowValue(function (prevValue) { return Math.min(prevValue + 1, title); }); }, 22);
    }, [showValue, startAnimation, title]);
    react_1.useEffect(function () {
        var refElem = numberRef.current;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setStartAnimation(true);
                observer.unobserve(refElem);
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 1
        });
        if (refElem) {
            observer.observe(refElem);
        }
        return function () {
            if (refElem) {
                observer.unobserve(refElem);
            }
        };
    });
    return (react_1["default"].createElement("div", { ref: numberRef, className: "flex-col items-center justify-center gap-5" },
        react_1["default"].createElement("p", { className: "header-6 text-center font-bold text-[#FEA918] md:text-[6rem]" },
            showValue,
            unit ? unit : "",
            "+"),
        react_1["default"].createElement("p", { className: "body text-center font-bold text-white md:text-[2rem]" }, text)));
};
exports["default"] = InfoText;
