import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Job, categories } from '../../../utils/jobData';
import Link from "next/link";

const JobCard: React.FC<Job> = ({ id, title, description, icon }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const currentJobId = window.location.pathname.split("/").pop();
        setIsActive(currentJobId === id);
    }, [id]);

    const CategoryButton: React.FC<{ label: string }> = ({ label }) => (
        <p className={`rounded-2xl px-3.5 py-1.5 ${isActive ? "bg-[#000]" : "bg-primary"}`}>{label}</p>
    );

    const cardStyle: React.CSSProperties = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
    };

    return (
        <div
            style={cardStyle}
            className={`mb-[3.5em] flex justify-between rounded-[1em] border border-gray-200 ${isActive ? 'bg-primary' : 'bg-[#fff]'} p-3 md:w-[24.5rem] md:p-7`}
        >
            <div>
                <div className="flex items-center gap-3">
                    <Image
                        src={icon}
                        alt="headphone"
                        className="h-[1.66838rem] w-[1.66863rem]"
                    />
                    <h2 className={`text-[2.11275rem] font-[800] ${isActive ? 'text-[#000]' : 'text-primary'}`}>{title}</h2>
                </div>
                <p className="mb-4 mt-2 text-[0.76119rem] font-[500] text-[#000] opacity-50">
                    {description}
                </p>
                <p className="text-[0.90125rem] font-[500] text-[#000]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است.
                </p>
                <div className="mt-6 flex justify-between">
                    <div className="flex gap-1 text-[0.6725rem] text-[#fff]">
                        {categories.map((category, index) => (
                            <CategoryButton key={index} label={category} />
                        ))}
                    </div>
                    <Link
                        href={`../jobs/${id}`}
                        className={`flex items-center whitespace-nowrap text-[0.74138rem] font-[600] ${isActive ? 'text-[#000]' : 'text-primary'}`}
                    >
                        اطلاعات بیشتر
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="9"
                            viewBox="0 0 7 11"
                            fill="none"
                            className="mr-[.5em] mt-1"
                        >
                            <path
                                d="M6.47631 0.744077L6.47621 0.743979C6.3104 0.587967 6.08703 0.501441 5.85547 0.501441C5.6239 0.501441 5.40053 0.587967 5.23473 0.743979L5.23467 0.744028L1.14529 4.59658L1.14524 4.59663C0.9794 4.75306 0.884864 4.96663 0.884864 5.19085C0.884864 5.41507 0.9794 5.62864 1.14524 5.78507L1.14529 5.78512L5.23325 9.63633C5.31404 9.71761 5.41091 9.78247 5.51796 9.82741L5.56253 9.72124L5.51796 9.82741C5.62567 9.87261 5.74169 9.89683 5.85915 9.89878C5.97662 9.90074 6.09344 9.88039 6.20271 9.83881L6.16176 9.7312L6.20271 9.83881C6.31198 9.79723 6.41169 9.73517 6.49572 9.65601C6.57977 9.57683 6.64644 9.48212 6.69137 9.37733C6.73631 9.27252 6.75847 9.15999 6.75635 9.04653C6.75422 8.93307 6.72786 8.82138 6.67906 8.7182C6.63056 8.61567 6.561 8.52381 6.47485 8.4478L3.01768 5.19085L6.47626 1.93256L6.47631 1.93251C6.64215 1.77608 6.73669 1.56252 6.73669 1.3383C6.73669 1.11407 6.64215 0.900507 6.47631 0.744077Z"
                                fill={`${isActive ? '#000' : '#FEA918'}`}
                                stroke={`${isActive ? '#000' : '#FEA918'}`}
                                strokeWidth="0.230272"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
