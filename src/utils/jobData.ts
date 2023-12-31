import headphone from "..//assets/images/headphone.svg";
import android from "../assets/images/android.svg"
import front from "../assets/images/Front.svg"
import wordpress from "../assets/images/wordpress.svg"
export interface Job {
    id: string;
    title: string;
    description: string;
    category: string;
    postedTime: string;
    icon: string;
}

export const jobsData: Job[] = [
    {
        id: "1",
        title: "پشتیبان سایت",
        description: "شروع دستمزد از  12 میلیون تومان...",
        category: "دورکاری",
        postedTime: "چند دقیقه پیش",
        icon: headphone
    },
    {
        id: "2",
        title: "پشتیبان سایت",
        description: "شروع دستمزد از  12 میلیون تومان...",
        category: "حضوری",
        postedTime: "چند دقیقه پیش",
        icon: headphone
    },
    {
        id: "3",
        title: "برنامه نویس فرانت اند",
        description: "شروع دستمزد از  12 میلیون تومان...",
        category: "دورکاری",
        postedTime: "چند دقیقه پیش",
        icon: front

    },
    {
        id: "4",
        title: "برنامه نویس فرانت اند",
        description: "شروع دستمزد از  12 میلیون تومان...",
        category: "حضوری",
        postedTime: "چند دقیقه پیش",
        icon: front

    },
    {
        id: "5",
        title: "برنامه نویس وردپرس",
        description: "شروع دستمزد از  12 میلیون تومان...",
        category: "دورکاری",
        postedTime: "چند دقیقه پیش",
        icon: wordpress

    },
    {
        id: "6",
        title: "برنامه‌نویس اندروید",
        description: "شروع دستمزد از  12 میلیون تومان...",
        category: "حضوری",
        postedTime: "چند دقیقه پیش",
        icon: android

    },
];


export const categories = ["دورکاری", "حضوری", "آموزشی"]