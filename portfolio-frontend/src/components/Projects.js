import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function ProjectsContent() {
  const projectsSectionRef = useRef(null);
  const projectsHeadingRef = useRef(null);
  const projectSeparatorRef = useRef(null);
  const projectsIntroRef = useRef(null);
  const projectCardsRefs = useRef([]);

  const projects = [
    {
      title: 'Deep Fake Detector',
      description:
        'Developed a deep fake detection model leveraging advanced machine learning techniques to identify manipulated media.Developed a deep fake detection model leveraging advanced machine learning techniques to identify manipulated media.',
      imageUrl: '/images/Deepfake.png',
    },
    {
      title: 'Iris Detection',
      description:
        'Designed an iris detection model utilizing computer vision techniques to identify and segment the iris region from eye images. This technology is widely used in biometric identification and security systems, deepening my understanding of machine learning and deep learning.',
      imageUrl: '/images/irisdetection.png',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === projectsHeadingRef.current) entry.target.classList.add('slideInLeft');
            if (entry.target === projectSeparatorRef.current) entry.target.classList.add('scaleXForward');
            if (entry.target === projectsIntroRef.current) entry.target.classList.add('fadeIn');
            if (projectCardsRefs.current.includes(entry.target)) entry.target.classList.add('slideInUp');
          } else {
            // Optional: Remove classes when leaving viewport for re-animation
            if (entry.target === projectsHeadingRef.current) entry.target.classList.remove('slideInLeft');
            if (entry.target === projectSeparatorRef.current) entry.target.classList.remove('scaleXForward');
            if (entry.target === projectsIntroRef.current) entry.target.classList.remove('fadeIn');
            if (projectCardsRefs.current.includes(entry.target)) entry.target.classList.remove('slideInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToObserve = [
      projectsHeadingRef.current,
      projectSeparatorRef.current,
      projectsIntroRef.current,
      ...projectCardsRefs.current,
    ].filter(element => element !== null);

    elementsToObserve.forEach(element => observer.observe(element));

    return () => {
      elementsToObserve.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="projects-section" ref={projectsSectionRef}>
      <h2 className="projects-heading initial-hidden" ref={projectsHeadingRef}>PROJECTS</h2>
      <div className="project-separator initial-hidden" ref={projectSeparatorRef}></div>
      <p className="projects-intro initial-hidden" ref={projectsIntroRef}>
        Discover a range of projects I've crafted, including personal and client
        work, with each project featuring its own compelling case study.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} ref={(el) => (projectCardsRefs.current[index] = el)} className="project-card initial-hidden" />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContent;