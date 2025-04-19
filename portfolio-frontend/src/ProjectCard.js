import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="visit-button">
            Visit Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
