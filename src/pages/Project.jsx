import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Popup from "../components/Popup";


export default function Project() {
    //프로젝트 데이터
    const projects = [
        {id: 1, name: "portfolio", category: "JS", img: "/img/img_project1.png"},
        {id: 2, name: "Netflix", category: "REACT", img: "/img/img_project2.png"},
        {id: 3, name: "Vanilla Script", category: "JS", img: "/img/img_project1.png"},
        {id: 4, name: "React Dashboard", category: "REACT", img: "/img/img_project1.png"},
        {id: 5, name: "Publishing Dashboard", category: "PUBLISHING", img: "/img/img_project1.png"},
        {id: 6, name: "Publishing Project", category: "PUBLISHING", img: "/img/img_project1.png"},
        {id: 7, name: "Pubble item", category: "PUBLISHING", img: "/img/img_project1.png"},
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
                    className={`text-white rounded-full px-5 py-2 transition-all duration-300 max-sm:w-full max-sm:text-xs
          ${isActive ? "bg-[#4e4e4e] scale-105" : "bg-transparent hover:bg-[#4e4e4e] hover:scale-105"}`}
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
                    <img src={img} alt={name} className="w-full h-49 object-cover p-4"/>
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
            <div className="flex justify-center">
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
                        onClose={() => setIsPopupOpen(false)}
                    >
                        <p>카테고리: {selectedProject?.category}</p>
                        {/* 여기에 GitHub 링크, 설명 등 원하는 내용 넣기 */}
                    </Popup>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isPopupOpen && (
                    <Popup
                        isOpen={isPopupOpen}
                        title={selectedProject?.name}
                        onClose={() => setIsPopupOpen(false)}
                    >
                        <p>카테고리: {selectedProject?.category}</p>
                        {/* 여기에 GitHub 링크, 설명 등 원하는 내용 넣기 */}
                    </Popup>
                )}
            </AnimatePresence>
        </div>
    );
};

