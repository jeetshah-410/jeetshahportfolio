"use client"

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';

const projectsData = [
    {
        id: 1,
        title: "3D Mind Blender Mystery Game",
        description: "An interactive mystery game built in Unreal Engine. Explore mind-bending puzzles and secrets.",
        videoUrl: "/videos/level3.mp4",
        tag: ["Game Programming", "Game Designing"],
        detailedDescription: "This is a more detailed description of the 3D Mind Blender Mystery Game. It dives into the story, gameplay mechanics, and development process. ",
    },
    {
        id: 2,
        title: "Battle of The Bites",
        description: "A TPS-Platformer game built in Unreal Engine in a 24-hour game jam event from scratch.",
        videoUrl: "/videos/battleofthebites.mp4",
        tag: ["Environment Design", "Sustainability", "Game Programming"],
        detailedDescription: "Battle of The Bites features an innovative gameplay style, where players battle through dynamic environments and challenging enemies. Developed during a 24-hour game jam event.",
    }
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleReadMoreClick = (project) => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-section py-8 px-4">
            <h2 className="text-2xl font-bold text-white mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onReadMoreClick={handleReadMoreClick}
                    />
                ))}
            </div>

            {/* Modal for showing project details */}
            <ProjectDetailsModal
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </section>
    );
};

export default ProjectsSection;
