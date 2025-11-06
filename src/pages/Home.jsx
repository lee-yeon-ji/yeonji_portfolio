// import {useState, useEffect} from "react";
//
// export default function Home() {
//
//     const words = ["developer", "creator", "engineer", "innovator"]
//     // const [currentWord, setCurrentWord] = useState(words[0]);
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [animate, setAnimate] = useState(false);
//
//     // useEffect(() => {
//     //     //     const interval = setInterval(() => {
//     //     //         setCurrentWord(prev =>{
//     //     //             let nextIndex = words.indexOf(prev) + 1;
//     //     //             if(nextIndex >= words.length) nextIndex = 0;
//     //     //             return words[nextIndex]
//     //     //         });
//     //     //     }, 2000); //2초마다 단어 변경
//     //     //     return () => clearInterval(interval);
//     //     // }, []);
//
//
//         useEffect(() => {
//             const interval = setInterval(() => {
//                 setAnimate(true); // 애니메이션 시작
//                 setTimeout(() => {
//                     setCurrentWordIndex(prev => (prev + 1) % words.length);
//                     setAnimate(false); // 애니메이션 초기화
//                 }, 500); // 애니메이션 지속 시간과 맞추기
//             }, 2500); // 단어 변경 주기 (애니메이션 포함)
//
//             return () => clearInterval(interval);
//         }, [words.length]);
//
//
//     return (
//
//
//         <div className="grid grid-cols-2 gap-14 max-w-7xl mx-auto max-h-full">
//             <div>
//                 <div className="">
//                     <img src="/img/img_home_bg.jpg" alt="img"/>
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center ">
//                 <h1 className="font-bold text-8xl">LEE YEON JI</h1>
//
//                 {/*<div className="flex gap-4 text-3xl pt-14">*/}
//                 {/*    <div>Creative</div>*/}
//                 {/*    <div className="font-semibold">{currentWord}</div>*/}
//                 {/*</div>*/}
//
//
//                 <div className="flex gap-4 text-3xl pt-14">
//                     <div>Creative</div>
//                     <div className={`font-semibold overflow-hidden relative h-10 w-40`}>
//                         <span
//                             className={`block absolute transition-transform duration-500 ${animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
//                             {words[currentWordIndex]}
//                         </span>
//                         <span
//                             className={`block absolute transition-transform duration-500 ${animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
//                             {words[(currentWordIndex + 1) % words.length]}
//                         </span>
//                     </div>
//                 </div>
//
//                 <div className="pt-14">
//                     <a className="bg-black text-white px-4 py-4 text-3xl rounded shadow hover:shadow-lg hover:bg-white hover:text-black hover:border-black transition duration-200"
//                        href="/project">go project!</a>
//
//                 </div>
//
//             </div>
//         </div>
//
//     );
// }

import { useState, useEffect } from "react";

export default function Home() {
    const words = ["developer", "designer", "creator", "engineer", "innovator"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-2 gap-14 max-w-7xl mx-auto max-h-full">
            <div>
                <img src="/img/img_home_bg.jpg" alt="img" />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="font-bold text-8xl">LEE YEON JI</h1>

                <div className="flex gap-4 text-3xl pt-14">
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

                <div className="pt-14">
                    <a
                        className="bg-black text-white px-4 py-4 text-3xl rounded shadow hover:shadow-lg hover:bg-white hover:text-black hover:border-black transition duration-200"
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