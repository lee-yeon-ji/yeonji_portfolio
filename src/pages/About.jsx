import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    return (
        <div className="flex opacity-1">
            <div className="">
                <div className="max-w-2xl   mx-auto">
                    <img src="/img/img_portfolio.jpg" alt="img"/>
                </div>
            </div>

            <div className="flex-1 min-w-0 pt-14">
                <div >
                    <div className="font-bold text-3xl">about me</div>
                    <div className="pt-6">
                        안녕하세요 저는 프론트엔드 개발자가 되고 싶은 이연지입니다.<br/> 시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.
                    </div>
                </div>

                <div className="pt-14">
                    <div className="font-bold text-3xl">certificate</div>
                    <div className="pt-6 flex gap-4 items-center">
                        <span className="bg-black rounded-full w-1 h-1"></span>
                        <span className="">2025년 정보처리기사 자격증</span>
                    </div>
                </div>
                <div className="pt-14">
                    <div className="font-bold text-3xl">My tech stack</div>
                    <div className="pt-6">
                        <ul className="flex gap-6">L
                            <li className="max-w-12 h-10">
                                <img className="w-full" src="/img/ic_react.svg" alt="img_react"/>
                            </li>

                            <li className="max-w-12 h-10">
                                <img className="w-12 h-10" src="/img/ic_html.svg" alt="img_react"/>

                            </li>

                            <li className="max-w-12 h-10">
                                <img className="w-12 h-10" src="/img/ic_css.svg" alt="img_react"/>

                            </li>

                            <li className="max-w-12 h-10">
                                <img className="w-full h-full" src="/img/ic_js.svg" alt="img_react"/>

                            </li>


                            <li className="max-w-12 h-10">
                                <img className="w-12 h-10" src="/img/ic_typescript.svg" alt="img_react"/>

                            </li>

                            <li className="max-w-12 h-10">
                                <img className="w-full" src="/img/ic_figma.svg" alt="img_react"/>

                            </li>



                        </ul>

                    </div>
                </div>

            </div>


        </div>
    );
};