"use strict";
exports.__esModule = true;
var HeroSection_1 = require("@/components/HeroSection");
var image_1 = require("next/image");
var Honers_1 = require("@/components/about-us/Honers");
var react_1 = require("react");
var Persons_1 = require("@/components/about-us/Persons");
var Comments_1 = require("@/components/about-us/Comments");
var truePerson_svg_1 = require("@/assets/images/truePerson.svg");
var CARDS = 10;
var testimonials = [
    {
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        imageSrc: truePerson_svg_1["default"],
        name: "محمدرضا علیمردانی",
        title: "مدیریت لورم ایپسوم"
    },
    {
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        imageSrc: truePerson_svg_1["default"],
        name: "محمدرضا علیمردانی",
        title: "مدیریت لورم "
    },
    {
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        imageSrc: truePerson_svg_1["default"],
        name: "محمدرضا علیمردانی",
        title: "مدیریت لورم ایپسوم"
    },
];
var Card = function (_a) {
    var title = _a.title, content = _a.content;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("h2", null, title),
        react_1["default"].createElement("p", null, content)));
};
var page = function (_a) {
    return (react_1["default"].createElement("div", { className: "flex-col" },
        react_1["default"].createElement(HeroSection_1["default"], { heading: "\u062F\u0631\u0628\u0627\u0631\u0647 \u06CC \u0645\u0627", subHeading: "\u062E\u0627\u0646\u0647 -", childHeading: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627" }),
        react_1["default"].createElement("div", { className: "relative mb-[10rem] mt-[6.69rem] flex justify-center  " },
            react_1["default"].createElement("div", { className: "absolute  h-8 w-11/12  -rotate-[2.5deg] rounded-3xl bg-[#FEA918] md:h-80 md:w-3/5" }),
            react_1["default"].createElement("div", { className: "relative flex w-11/12 flex-col  gap-2 rounded-3xl bg-black px-[2.69rem] py-[2rem] md:h-96 md:w-3/5 md:gap-4 md:px-[7.8rem]\t md:py-[2.78rem]" },
                react_1["default"].createElement(image_1["default"], { src: "/images/rayka-icon.svg", width: "50", height: "50", alt: "rayka icon", className: "w-12 md:w-16 " }),
                react_1["default"].createElement("p", { className: "  text-5xl font-bold text-primary\t" }, "\u062F\u0631\u0628\u0627\u0647\u200C\u0645\u0627 "),
                react_1["default"].createElement("p", { className: "  mt-3 text-justify\t text-[1rem] font-medium text-white\t" }, "\u0645\u0627 \u062F\u0631 \u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u06CC \u0633\u062E\u062A \u06A9\u0648\u0634 \u0648 \u062E\u0633\u062A\u06AF\u06CC \u0646\u0627\u067E\u0630\u06CC\u0631 \u0634\u0631\u06A9\u062A \u0645\u0627\u0648\u0631\u0627\u06CC \u0627\u0628\u0639\u0627\u062F \u0631\u0627\u06CC\u06A9\u0627 \u060C \u0628\u0631\u0627\u06CC \u062A\u062D\u0642\u0642 \u0631\u0648\u06CC\u0627\u0647\u0627\u06CC\u0645\u0627\u0646 \u0645\u06CC\u062C\u0646\u06AF\u06CC\u0645. \u062F\u0631 \u06A9\u0646\u0627\u0631 \u0647\u0645 \u0645\u06CC\u0633\u0627\u0632\u06CC\u0645 \u0648 \u0627\u0632 \u062A\u0645\u0627\u0634\u0627\u06CC \u0622\u0646\u0686\u0647 \u0631\u0648\u0632\u06CC \u062A\u0635\u0648\u0631 \u06A9\u0631\u062F\u0647 \u0628\u0648\u062F\u06CC\u0645 \u0648 \u062D\u0627\u0644\u0627 \u0628\u0647 \u0622\u0646 \u062A\u062C\u0633\u0645 \u0628\u062E\u0634\u06CC\u062F\u0647 \u0627\u06CC\u0645 \u0644\u0630\u062A \u0645\u06CC\u0628\u0631\u06CC\u0645. \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647 \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F."),
                " ")),
        react_1["default"].createElement(Honers_1["default"], null),
        react_1["default"].createElement(Persons_1["default"], null),
        react_1["default"].createElement(Comments_1["default"], null)));
};
exports["default"] = page;
