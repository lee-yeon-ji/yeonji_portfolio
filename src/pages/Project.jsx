import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Popup from "../components/Popup";
import ProjectDetail from "../components/ProjectDetail";


export default function Project() {
    //프로젝트 데이터
    const projects = [
        {
            id: 1,
            name: "portfolio",
            category: "REACT",
            img: "/img/img_project1.png",
            github: "https://github.com/lee-yeon-ji/yeonji_portfolio",
            description: "저의 포트폴리오입니다. 주요 페이지는 About, Project 으로 구성되어 있고 Vercel을 이용해 배포하였습니다. ",
            skills: ["React", "react-router", "styled-components", "TypeScript"],
            site: "https://yeonji-portfolio.vercel.app/"
        },
        {
            id: 2,
            name: "Netflix",
            category: "REACT",
            img: "/img/img_project2.png",
            github: "https://github.com/lee-yeon-ji/react-study",
            description: "React를 활용한 넷플릭스 클론코딩 입니다. Movie,Tv,Search 페이지로 으로 구성 되어있는 반응형입니다.",
            skills: ["React", "swiper", "Styled Components", "react - router"],
            site: "https://net-flix-clone-seven-mu.vercel.app/"
        },
        {
            id: 3,
            name: "LG Jammy",
            category: "PUBLISHING",
            img: "/img/img_project3.png",
            github: "",
            description: "jammy 이벤트 페이지입니다. HTML, CSS, JavaScript로 이벤트 페이지 구현하였습니다. ",
            skills: ["JavaScript", "HTML", "CSS"],
            site: ""
        },
        {
            id: 4,
            name: "LG 전자 스스로 해결",
            category: "PUBLISHING",
            img: "/img/img_project4.png",
            github: "",
            description: "LG 전자 스스로 해결 페이지 입니다.",
            skills: ["JavaScript", "HTML", "CSS"],
            site: ""
        },
        {
            id: 5,
            name: "LG Jammy",
            category: "PUBLISHING",
            img: "/img/img_project5.png",
            github: "",
            description: "jammy 이벤트 페이지입니다. HTML, CSS, JavaScript로 이벤트 페이지 구현하였습니다. ",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Swiper"],
            site: ""
        },
        {
            id: 6,
            name: "LG Jammy",
            category: "PUBLISHING",
            img: "/img/img_project6.png",
            github: "",
            description: "jammy 이벤트 페이지입니다. HTML, CSS, JavaScript로 이벤트 페이지 구현하였습니다. ",
            skills: ["HTML", "CSS", "Responsive Design"],
            site: ""
        },
        {
            id: 7,
            name: "LG Jammy-테크 메거진",
            category: "PUBLISHING",
            img: "/img/img_project7.png",
            github: "",
            description: "jammy 테크 메거진 페이지입니다. HTML, CSS로 메거진 반응형 페이지 구현하였습니다. ",
            skills: ["HTML", "CSS", "Responsive Design"],
            site: ""
        },

        {
            id: 8,
            name: "(주)아몬드 회사 홈페이지",
            category: "PUBLISHING",
            img: "/img/img_project8.png",
            github: "",
            description: "(주)아몬드 회사 홈페이지 입니다.",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design","Swiper"],
            site: "https://www.almondpet.com/ko/main"
        },
        {
            id: 9,
            name: "이음기프트 홈페이지",
            category: "JS",
            img: "/img/img_project9.png",
            github: "",
            description: "이음기프트 회사 홈페이지 입니다.",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Swiper"],
            site: "https://www.ium-gift.com/"
        },
        {
            id: 10,
            name: "아실 홈페이지",
            category: "JS",
            img: "/img/img_project10.png",
            github: "",
            description: "아실 모바일 입니다.",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Swiper"],
            site: ""
        },
    ];





    //filter 상태
    const [filter, setFilter] = useState("ALL");

    // 어떤 카드 클릭했는지
    const [selectedProject, setSelectedProject] = useState(null);
    // 팝업 열림 여부
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    //filter 메서드를 이용해 같은 category 끼리 필터된 projects
    const filteredProjects = filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

    //Project 안에 있는 Category 버튼 컴포넌트
    const CategoryButton = ({name}) => {
        const isActive = filter === name;

        return (
            <button onClick={() => setFilter(name)}
                    className={`text-white rounded-full px-2 py-2 transition-all duration-300 max-sm:w-full max-sm:text-xs sm:px-5
          ${isActive ? "bg-[#4e4e4e]" : "bg-transparent hover:bg-[#4e4e4e] hover:scale-105"}`}
            >
                {name}
            </button>
        );
    };


    const ProjectCard = ({name, img, onClick}) => {
        return (
            <>
                <motion.div
                    layout
                    onClick={onClick}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.3}}
                    className="border-2 border-slate-500 dark:border-slate-400 rounded-2xl overflow-hidden cursor-pointer flex flex-col hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                    <div className="w-full h-80 p-4">
                        <img src={img} alt={name} className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    <div className="p-4">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">{name}</span>
                    </div>
                </motion.div>


            </>

        );
    };
    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-gray-900 dark:text-white">

            <div className="">
                <h2 className="my-8 text-4xl md:text-5xl leading-10 text-center font-bold	sm:leading-12 lg:text-6xl">My
                    Most<br/> Recent Project</h2>
            </div>

            {/*필터 버튼*/}
            <div className="flex justify-center ">
                <div
                    className=" w-fit flex gap-2 items-center justify-center rounded-full px-4 py-3 bg-gray-300 dark:bg-gray-700 max-sm:w-full">
                    <CategoryButton name={"ALL"}/>
                    <CategoryButton name={"PUBLISHING"}/>
                    <CategoryButton name={"JS"}/>
                    <CategoryButton name={"REACT"}/>

                </div>
            </div>


            <div className="pt-14">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length === 0 ? (
                        <motion.p
                            key="empty"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="text-center text-gray-400"
                        >
                            No projects found.
                        </motion.p>
                    ) : (
                        <motion.ul
                            layout
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                        >
                            {filteredProjects.map((project) => (
                                <motion.li key={project.id} layout>
                                    <ProjectCard
                                        name={project.name}
                                        img={project.img}
                                        onClick={() => {
                                            setSelectedProject(project);   // 어떤 카드인지 저장
                                            setIsPopupOpen(true);          // 팝업 열기
                                        }}
                                    />

                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>


            {/* 여기서 Popup 사용 */}
            <AnimatePresence>
                {isPopupOpen && (
                    <Popup
                        isOpen={isPopupOpen}
                        title={selectedProject?.name}
                        image={selectedProject?.img}
                        onClose={() => setIsPopupOpen(false)}
                    >
                        <ProjectDetail
                            category={selectedProject?.category}
                            description={selectedProject?.description}
                            skills={selectedProject?.skills}
                            site={selectedProject?.site}
                            github={selectedProject?.github}
                        />


                        {selectedProject?.github && (
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors mt-4"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub 보기
                            </a>
                        )}
                    </Popup>
                )}
            </AnimatePresence>
        </div>
    );
};

