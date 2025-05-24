import React from 'react';
import ProjectsItems from '../assets/ProjectsItems';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
    return (
        <div className='py-5 bg-dark' id='projects'>
            <div className='container'>
                <h2 className='mb-5'>My projects</h2>
                <div className='d-flex flex-wrap gap-4d-flex flex-row flex-wrap gap-4 '>
                    {
                        ProjectsItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription} Liveurl={project.Liveurl} GithubLink={project.GithubLink} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;