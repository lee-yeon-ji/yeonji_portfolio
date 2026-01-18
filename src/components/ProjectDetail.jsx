export default function ProjectDetail({ category, description, skills, site }) {
    return (
        <div className="space-y-4">
            <div>
                <p className="font-semibold mb-2">Description</p>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>

            <div>
                <p className="font-semibold mb-2">Use Skill</p>
                <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-gray-700 dark:text-gray-300">
                            - {skill}
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex">
                <p className="font-semibold ">Site</p>
                <a
                    href={site}
                    className="text-blue-600 dark:text-blue-400 break-all pl-5 "
                >
                    {site}
                </a>
            </div>


        </div>

    );
}

