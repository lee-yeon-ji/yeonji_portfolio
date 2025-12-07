import React from 'react';

function ProjectLinks(props) {
    return (
        <div className="project-links">
            <p>
                <span className="icon">🔗</span>
                <span>Site</span>
                <a
                    href="https://kimminseoung.github.io/NetFlix_clone/"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://kimminseoung.github.io/NetFlix_clone/
                </a>
            </p>
            <p>
                <span className="icon">💻</span>
                <span>GitHub</span>
                <a
                    href="https://github.com/kimminseoung/NetFlix_clone"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://github.com/kimminseoung/NetFlix_clone
                </a>
            </p>
        </div>
    );
}

export default ProjectLinks;