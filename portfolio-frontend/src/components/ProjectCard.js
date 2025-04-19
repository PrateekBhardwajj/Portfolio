import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="project-card">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="project-image" />
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;