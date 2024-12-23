"use client"

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';

const projectsData = [
    {
        id: 1,
        title: "Aqua Sentinel",
        description: "SIH Winner!! This games is a blend of fun and education. It is created using unreal engine with C++ and Blueprint visual scripting.",
        videoUrl: "/videos/AquaSentinels.mp4",
        tag: ["Game Programming", "Visuals", "Education", "Unique"],
        detailedDescription: "Aqua Sentinels is an award-winning game developed for the Smart India Hackathon (SIH), designed to educate and engage players in ocean sustainability and literacy. This one-of-a-kind project showcases my expertise in game development, blending innovative gameplay mechanics with real-world data. Leveraging Unreal Engine's advanced capabilities, I created a high-graphics underwater environment featuring dynamic marine ecosystems, powered by tools like the Niagara particle system. The game allows players to take on diverse roles, such as a fisherman, ship captain, marine biologist, scuba diver, and submarine operator, each offering unique gameplay mechanics and decision-making challenges. Real-time ocean data from INCOIS was integrated to simulate authentic ocean conditions, enhancing both the educational and interactive aspects of the game. Creating Aqua Sentinels required expertise in game programming, level design, environment light mixing, and animation. The use of widgets enabled seamless display of information about aquatic species, while my proficiency in logic design and Unreal Engine scripting ensured smooth, immersive gameplay. Developing this game was a complex and skill-intensive process, involving advanced problem-solving to address UN Ocean Decade challenges creatively. The project not only won SIH but also demonstrated the potential of gamification in addressing global issues, marking it as a groundbreaking contribution to the field of serious games."
    },
    {
        id: 2,
        title: "3D Mind Blender Mystery Game",
        description: "An interactive mystery game built in Unreal Engine. Explore mind-bending puzzles and secrets.",
        videoUrl: "/videos/level3.mp4",
        tag: ["Game Programming", "Game Designing"],
        detailedDescription: "This is a horror theme based thriller level of a game that I have created using C++ and blueprints. In this level i have used Collision for Grabbing the objects using specific actor tags. I have also used lot of trigger components, used various sound effects for in the game.",
    },
    {
        id: 3,
        title: "Battle of The Bites",
        description: "A TPS-Platformer game built in Unreal Engine in a 24-hour game jam event from scratch.",
        videoUrl: "/videos/battleofthebites.mp4",
        tag: ["Environment Design", "Sustainability", "Game Programming"],
        detailedDescription: "Battle of The Bites features an innovative gameplay style, where players battle through dynamic environments and challenging enemies. Developed during a 24-hour game jam event.",
    },
    {
        id: 4,
        title: "Toon Tanks",
        description: "Created using Unreal engine 5 and C++.",
        videoUrl:"/videos/ToonTanks.mp4",
        tag: ["Unreal Engine, C++, Game Programming"],
        detailedDescription: "It is a fun to play game. While createing this game I learned about lime tracing, niagara systems, health and damage, and also about the physics of the game.",
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
