"use strict";
exports.__esModule = true;
exports.CommentsCard = void 0;
var image_1 = require("next/image");
var truePerson_svg_1 = require("@/assets/images/truePerson.svg");
exports.CommentsCard = function (_a) {
    var text = _a.text, name = _a.name, job = _a.job, isActive = _a.isActive;
    return (React.createElement("div", { className: " flex justify-center gap-8" },
        React.createElement("div", { className: "  flex flex-row-reverse justify-center gap-8" },
            React.createElement("div", { className: "w-13rem relative mt-4 flex h-[14rem] flex-col gap-12 md:w-[32rem] " },
                React.createElement("div", { className: " rounded-2xl p-[1.90rem]  text-justify " + (isActive ? "bg-primary" : "bg-white opacity-50") },
                    React.createElement("p", { className: "Body" }, text),
                    React.createElement("div", { className: "absolute mt-6 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[40px] " + (isActive ? "border-primary" : "border-white opacity-50") + "  border-l-transparent border-r-transparent " })),
                React.createElement("div", { className: "flex items-center justify-start gap-5" },
                    React.createElement("div", { className: "h-20 w-20 rounded-full border-4 border-solid border-primary bg-black" },
                        React.createElement("div", { className: "mx-auto mt-[0.25rem] h-16 w-16 overflow-hidden rounded-full bg-transparent" },
                            React.createElement(image_1["default"], { src: truePerson_svg_1["default"], alt: "trueperson", className: "rounded-full object-cover" }))),
                    React.createElement("div", { className: "flex flex-col gap-3" },
                        React.createElement("p", { className: "text-3xl font-bold text-white" }, name),
                        React.createElement("p", { className: "text-xl font-medium text-[#8C8C8C]" }, job)))))));
};
