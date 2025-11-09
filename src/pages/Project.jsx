import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Project() {
  //프로젝트 데이터
    const projects = [
        { id: 1, name: "JS Project 1", category: "JS" },
        { id: 2, name: "React App", category: "REACT" },
        { id: 3, name: "Vanilla Script", category: "JS" },
        { id: 4, name: "React Dashboard", category: "REACT" },
        { id: 5, name: "Publishing Dashboard", category: "PUBLISHING" },
        { id: 6, name: "Publishing Project", category: "PUBLISHING" },
        { id: 7, name: "Pubble item", category: "PUBLISHING" },
    ];


    //filter 상태
    const [filter, setFilter] = useState("ALL");

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


    const ProjectCard = ({ name }) => {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-slate-500 rounded-2xl p-4 h-64 overflow-hidden cursor-pointer flex items-center justify-center hover:shadow-xl hover:scale-[1.02] transition-all"
            >
                <span className="text-lg font-semibold">{name}</span>
            </motion.div>
        );
    };
    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="">
                <h2 className="my-8 text-4xl md:text-5xl leading-10 text-center font-bold	sm:leading-12 lg:text-6xl">My Most<br/> Recent Project</h2>
            </div>

            {/*필터 버튼*/}
            <div className="flex justify-center">
                <div className=" w-fit flex gap-2 items-center justify-center rounded-full px-4 py-3 bg-gray-300 max-sm:w-full">
                    <CategoryButton name={"ALL"}/>
                    <CategoryButton name={"PUBLISHING"}/>
                    <CategoryButton name={"JS"} />
                    <CategoryButton name={"REACT"}/>

                </div>
            </div>


            <div className="pt-14">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length === 0 ? (
                        <motion.p
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
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
                                    <ProjectCard name={project.name} />
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/*<div className="pt-14">*/}
            {/*    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">*/}
            {/*        <li >*/}
            {/*            <div className="border-2 border-slate-500 rounded-2xl p-4 h-64 overflow-hidden cursor-pointer">*/}
            {/*                <span className="">콘텐츠</span>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <div className="border-2 border-slate-500 rounded-2xl p-4 h-64  overflow-hidden cursor-pointer">*/}
            {/*                <span className="">콘텐츠</span>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
};

