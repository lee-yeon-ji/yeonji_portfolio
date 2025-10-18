export default function Project() {


    const ProjectButton = ({name}) => {

        return (
            <button className="text-white rounded-full px-5 py-2 bg-transparent transition hover:bg-[#4e4e4e] max-sm:w-full max-sm:text-xs">
                {name}
            </button>
        )

    }

    const ProjectCard = () => {
        return (
            <div className="">
                <span className="">콘텐츠</span>
            </div>
        )
    }

    return (
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">


            <div className="">
                <h2 className="my-8 text-4xl md:text-5xl leading-10 text-center font-bold	sm:leading-12 lg:text-6xl">My Most<br/> Recent Project</h2>
            </div>

            <div className="flex justify-center">
                <div className=" w-fit flex gap-2 items-center justify-center rounded-full px-4 py-3 bg-gray-300 max-sm:w-full">
                    <ProjectButton name={"ALL"}/>
                    <ProjectButton name={"JS"}/>
                    <ProjectButton name={"REACT"}/>
                </div>
            </div>


            <div className="">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <li>
                        <div className="border-3 border-gray-300 rounded-lg p-4">
                            <span className="">콘텐츠</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

