import React from 'react';

// ProjectCard component
const ProjectCard = ({ project, onReadMoreClick }) => {
    return (
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
            {/* Video at the top */}
            <div className="mb-4">
                <video controls controlsList='nodownload' width="100%">
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Project title */}
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            
            {/* Project description */}
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Read More button with right margin */}
            <button
                onClick={() => onReadMoreClick(project)}
                className="text-blue-500 hover:text-blue-700 mb-4 mr-4"
            >
                Read More
            </button>
        </div>
    );
};

// Export the ProjectCard component as default
export default ProjectCard;
