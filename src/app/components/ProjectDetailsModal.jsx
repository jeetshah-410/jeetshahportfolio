import React from 'react';

const ProjectDetailsModal = ({ isVisible, onClose, project }) => {
    if (!isVisible || !project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800 text-xl"
                    >
                        &times;
                    </button>
                </div>
                <p className="mt-4 text-gray-700">{project.detailedDescription}</p>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
