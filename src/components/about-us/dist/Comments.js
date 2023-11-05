"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Carousel_1 = require("@/components/about-us/Carousel");
var CommentsCard_1 = require("./CommentsCard");
var Comments = function (_a) {
    var _b = react_1.useState(1), active = _b[0], setActive = _b[1];
    var cardsData = [
        {
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
            name: "امیرحسین",
            job: "فرانت-اند"
        },
        {
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
            name: "مهدی",
            job: "فرانت-اند"
        },
        {
            text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
            name: "مهدی",
            job: "فرانت-اند"
        },
    ];
    return (react_1["default"].createElement("div", { className: "relative mb-[2.51rem] flex h-[550px] items-start justify-center bg-main-image " },
        react_1["default"].createElement("div", { className: "z-10 flex w-full flex-col items-center justify-start gap-2 py-2" },
            react_1["default"].createElement("h1", { className: "title text-white" }, "\u0635\u062D\u0628\u062A \u0645\u062F\u06CC\u0631\u0627\u0646"),
            react_1["default"].createElement(Carousel_1["default"], { active: active, setActive: setActive }, cardsData.map(function (card, i) { return (react_1["default"].createElement(CommentsCard_1.CommentsCard, { key: i, text: card.text, name: card.name, job: card.job, isActive: i === active })); })))));
};
exports["default"] = Comments;
