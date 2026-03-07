import { useState, useEffect } from "react";

export default function Home() {
    const words = ["developer", "designer", "creator", "engineer", "innovator"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="flex flex-1  flex-shrink-0 text-gray-900 lg:max-w-auto  dark:text-white" >

            <div className="max-w-7xl w-full mx-auto flex flex-col  justify-center px-4">
                <h1 className="font-bold text-5xl lg:text-8xl pb-14">LEE YEONJI</h1>

                <div className="flex gap-4 text-2 lg:text-3xl mb-14 ">
                    <div>Creative</div>
                    <div style={{ display: "flex", gap: "8px", perspective: "600px" }}>
                        {words[currentWordIndex].split("").map((char, idx) => (
                            <span
                                key={`${currentWordIndex}-${idx}`}
                                style={{
                                    display: "inline-block",
                                    backfaceVisibility: "hidden",
                                    animation: `flipY 1.5s ease forwards`,
                                    animationDelay: `${idx * 0.2}s`,
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="w-full  ">
                    <a
                        className=" text-2xl bg-black dark:bg-white text-white dark:text-black px-4 py-4 lg:text-3xl rounded shadow hover:shadow-lg hover:bg-white hover:text-black dark:hover:bg-gray-700 dark:hover:text-white hover:border-black transition duration-200 "
                        href="/project"
                    >
                        go project!
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes flipY {
                    0% {
                        transform: rotateY(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: rotateY(90deg);
                        opacity: 0;
                    }
                    100% {
                        transform: rotateY(0deg);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}