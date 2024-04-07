"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [easterState, setEasterState] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentImg, setCurrentImg] = useState<string>("bgdefault");

    const easterStateSwapper = () => {
        if (!easterState) {
            setEasterState(!easterState);
            setCurrentIndex(1);
            setCurrentImg("bgimg1");
        }
        if (easterState) {
            setEasterState(!easterState);
            setCurrentIndex(0);
            setCurrentImg("bgdefault");
        }
    };

    useEffect(() => {
        if (easterState) {
            const intervalId = setInterval(() => {
                if (currentIndex > 6) {
                    easterStateSwapper();
                } else {
                    setCurrentIndex(currentIndex + 1);
                    setCurrentImg("bgimg" + (currentIndex + 1).toString());
                }
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [easterState, currentIndex]);

    return (
        <main className={currentImg}>
            <button disabled={easterState ? true : false} onClick={easterStateSwapper}>
                <svg id="svg1" className="egg" viewBox="0 0 500 500">
                    <defs>
                        <symbol id="el1" width="50" height="50" viewBox="0 0 50 50">
                            <rect x="-5" y="-5" width="60" height="60" className="str" />
                            <line className="str " x1="-5" y1="-5" x2="55" y2="55" />
                            <path d="M 30 -5 L -5 30 L -5 -5 Z" className="c5 str" />
                            <circle cx="50" cy="50" r="26" className="c6 str" />
                            <circle cx="50" cy="50" r="16" className="c10 str" />
                        </symbol>
                        <symbol id="big1" width="100" height="100" viewBox="-50 -50 100 100">
                            <use width="50" height="50" href="#el1" transform="" />
                            <use width="50" height="50" href="#el1" transform="scale(-1, -1)" />
                            <use width="50" height="50" href="#el1" transform="scale(-1, 1)" />
                            <use width="50" height="50" href="#el1" transform="scale(1, -1)" />
                        </symbol>
                        <pattern id="pat1" width="56" height="56" viewBox="0 0 200 200" patternUnits="userSpaceOnUse">
                            <use x="0" y="0" width="100" height="100" href="#big1" className="c1" />
                            <use x="100" y="0" width="100" height="100" href="#big1" className="c3" />
                            <use x="0" y="100" width="100" height="100" href="#big1" className="c4" />
                            <use x="100" y="100" width="100" height="100" href="#big1" className="c2" />
                        </pattern>
                    </defs>

                    <ellipse className="str2" cx="250" cy="250" rx="200" ry="246" fill="url(#pat1)"></ellipse>
                    <text
                        className="str2"
                        x="50%"
                        text-anchor="middle"
                        y="320"
                        width="100%"
                        font-family="times"
                        font-weight="bold"
                        font-size="194"
                        fill="white"
                    >
                        ХВ
                    </text>
                </svg>
            </button>
        </main>
    );
}
