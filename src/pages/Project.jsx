import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Popup from "../components/Popup";
import ProjectDetail from "../components/ProjectDetail";


export default function Project() {
    //프로젝트 데이터
    const projects = [
        {
            id: 1,
            name: "SNS",
            category: "FRONTEND",
            img: "/img/img_project.png",
            github: "https://github.com/lee-yeon-ji/SNS_Project",
            description: "React.js, TypeScript, Supabase를 이용한 SNS 서비스입니다. 사용자가 로그인 후, 게시글을 작성하고, 다른 사용자의 게시글을 볼 수 있습니다.",
            skills: ["React.js", "react-router", "Zustand", "Tanstack Query", "TypeScript"],
            site: "https://sns-project-one.vercel.app/"
        },
        {
            id: 2,
            name: "portfolio",
            category: "FRONTEND",
            img: "/img/img_project1.png",
            github: "https://github.com/lee-yeon-ji/yeonji_portfolio",
            description: "포트폴리오입니다. 주요 페이지는 About, Project 으로 구성되어 있고 현재 작업한 프로젝트를 보여줍니다.",
            skills: ["React", "react-router", "styled-components", "TypeScript"],
            site: "https://yeonji-portfolio.vercel.app/"
        },
        {
            id: 3,
            name: "Netflix",
            category: "FRONTEND",
            img: "/img/img_project2.png",
            github: "https://github.com/lee-yeon-ji/react-study",
            description: "React를 활용한 넷플릭스 클론코딩 입니다. Movie,Tv,Search 페이지로 으로 구성 되어있는 반응형입니다.",
            skills: ["React", "swiper", "Styled Components", "react - router"],
            site: "https://net-flix-clone-seven-mu.vercel.app/"
        },
        {
            id: 4,
            name: "MyBreeders",
            category: "FRONTEND",
            img: "/img/img_project4.png",
            github: "",
            description: "파충류 종합 플랫폼 입니다.",
            skills: ["HTML", "CSS", "Responsive Design", "TypeScript"],
            site: "https://app.convave.com/"
        },
        {
            id: 5,
            name: "(주)아몬드",
            category: "PUBLISHING",
            img: "/img/img_project8.png",
            github: "",
            description: "(주)아몬드 회사 홈페이지 입니다.",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design","Swiper"],
            site: "https://www.almondpet.com/ko/main"
        },
        {
            id: 6,
            name: "이음기프트",
            category: "PUBLISHING",
            img: "/img/img_project9.png",
            github: "",
            description: "이음기프트 회사 홈페이지 입니다.",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Swiper"],
            site: "https://www.ium-gift.com/"
        },
        {
            id: 7,
            name: "아실",
            category: "PUBLISHING",
            img: "/img/img_project10.png",
            github: "",
            description: "아실 인테리어 앱 입니다.",
            skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Swiper"],
            site: ""
        },
        {
            id: 8,
            name: "나비엔 하우스",
            category: "PUBLISHING",
            img: "/img/img_project11.png",
            github: "",
            description: "나비엔 홈페이지에 있는 단꿈상점 이벤트 페이지 입니다.",
            skills: ["HTML", "CSS", "Responsive Design" ],
            site: ""
        },
        {
            id: 9,
            name: "LG Jammy",
            category: "PUBLISHING",
            img: "/img/img_project3.png",
            github: "",
            description: "jammy 이벤트 페이지입니다. HTML, CSS, JavaScript로 이벤트 페이지 구현하였습니다. ",
            skills: ["JavaScript", "HTML", "CSS"],
            site: ""
        },
        {
            id: 10,
            name: "LG 전자 스스로 해결",
            category: "PUBLISHING",
            img: "/img/img_project14.png",
            github: "",
            description: "LG 전자 스스로 해결 페이지 입니다.",
            skills: ["JavaScript", "HTML", "CSS"],
            site: ""
        }



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


    const ProjectCard = ({name, img, onClick, index}) => {
        return (
            <>
                <motion.div
                    layout
                    onClick={onClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4, delay: index * 0.05}}
                    className="group rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-[0_0_8px_rgba(100,116,139,0.4)] dark:shadow-[0_0_8px_rgba(148,163,184,0.4)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all"
                >
                    <div className="w-full h-80 p-4 overflow-hidden">
                        <img src={img} alt={name} className="w-full h-full object-contain rounded-lg group-hover:scale-[1.1] transition-transform duration-700"/>
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
                <h2 className=" my-8 text-4xl md:text-5xl leading-10 text-center font-bold	lg:text-6xl lg:leading-tight">My
                    Most<br/> Recent Project</h2>
            </div>

            {/*필터 버튼*/}
            <div className="flex justify-center ">
                <div
                    className=" w-fit flex gap-2 items-center justify-center rounded-full px-4 py-3 bg-gray-300 dark:bg-gray-700 max-sm:w-full">
                    <CategoryButton name={"ALL"}/>
                    <CategoryButton name={"PUBLISHING"}/>
                    <CategoryButton name={"FRONTEND"}/>

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
                            {filteredProjects.map((project, index) => (
                                <motion.li key={`${filter}-${project.id}`} layout>
                                    <ProjectCard
                                        name={project.name}
                                        img={project.img}
                                        index={index}
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


                    </Popup>
                )}
            </AnimatePresence>
        </div>
    );
};

