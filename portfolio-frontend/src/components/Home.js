import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const projectsButtonRef = useRef(null);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (heroTitleRef.current) heroTitleRef.current.classList.add('slideInUp');
            if (heroSubtitleRef.current) heroSubtitleRef.current.classList.add('slideInUp', 'fade-in');
            if (projectsButtonRef.current) projectsButtonRef.current.classList.add('scaleUp', 'fade-in');
          } else {
            if (heroTitleRef.current) heroTitleRef.current.classList.remove('slideInUp');
            if (heroSubtitleRef.current) {
              heroSubtitleRef.current.classList.remove('slideInUp', 'fade-in');
            }
            if (projectsButtonRef.current) {
              projectsButtonRef.current.classList.remove('scaleUp', 'fade-in');
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const heroTitleElement = heroTitleRef.current;
    const heroSubtitleElement = heroSubtitleRef.current;
    const projectsButtonElement = projectsButtonRef.current;

    if (heroTitleElement) observer.observe(heroTitleElement);
    if (heroSubtitleElement) observer.observe(heroSubtitleElement);
    if (projectsButtonElement) observer.observe(projectsButtonElement);

    return () => {
      if (heroTitleElement) observer.unobserve(heroTitleElement);
      if (heroSubtitleElement) observer.unobserve(heroSubtitleElement);
      if (projectsButtonElement) observer.unobserve(projectsButtonElement);
    };
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 ref={heroTitleRef} className="hero-title initial-hidden">
          HEY, I'M <span className="highlight">PRATEEK BHARDWAJ</span>
        </h1>
        <p ref={heroSubtitleRef} className="hero-subtitle initial-hidden">
          A versatile engineer skilled in both frontend and backend development,
          with experience building full-stack websites and working on AI-driven projects.
        </p>
        <Link
          to="/#projects"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('projects');
          }}
          className="projects-button initial-hidden"
        >
          PROJECTS
        </Link>
      </div>
    </div>
  );
}

export default Home;