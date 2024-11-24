import React, { useEffect, useState } from 'react';

export default function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/sujathaiyer124/repos')
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching GitHub repositories:', error));
    }, []);


    return (
        <section className="projects" id="projects">
            <h1 className="projects-h1">Projects</h1>
            <div className="projects-container">
            {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}