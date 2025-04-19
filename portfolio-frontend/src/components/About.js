import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function AboutContent() {
  const aboutHeadingRef = useRef(null);
  const introParagraphRef = useRef(null);
  const knowAboutMeHeadingRef = useRef(null);
  const knowAboutMeParagraphsRefs = useRef([]); // Use an array to hold refs for each paragraph
  const contactButtonRef = useRef(null);
  const mySkillsHeadingRef = useRef(null);
  const skillBoxesRefs = useRef([]);

  const skills = [
    "Python", "React.js", "Node.js",
    "C++", "Django", "Flask", "PostgreSQL", "MongoDB",
    "HTML", "CSS",
    // Add more skills as needed
  ];

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
            if (entry.target === aboutHeadingRef.current) entry.target.classList.add('slideInUp');
            if (entry.target === introParagraphRef.current) entry.target.classList.add('fadeIn', 'slideInUp');
            if (entry.target === knowAboutMeHeadingRef.current) entry.target.classList.add('slideInLeft');
            if (knowAboutMeParagraphsRefs.current.includes(entry.target)) entry.target.classList.add('fadeIn');
            if (entry.target === contactButtonRef.current) entry.target.classList.add('slideInUp', 'fadeIn');
            if (entry.target === mySkillsHeadingRef.current) entry.target.classList.add('slideInRight');
            if (skillBoxesRefs.current.includes(entry.target)) entry.target.classList.add('scaleUp');
          } else {
            // Optional: Remove classes when leaving viewport for re-animation
            if (entry.target === aboutHeadingRef.current) entry.target.classList.remove('slideInUp');
            if (entry.target === introParagraphRef.current) entry.target.classList.remove('fadeIn', 'slideInUp');
            if (entry.target === knowAboutMeHeadingRef.current) entry.target.classList.remove('slideInLeft');
            if (knowAboutMeParagraphsRefs.current.includes(entry.target)) entry.target.classList.remove('fadeIn');
            if (entry.target === contactButtonRef.current) entry.target.classList.remove('slideInUp', 'fadeIn');
            if (entry.target === mySkillsHeadingRef.current) entry.target.classList.remove('slideInRight');
            if (skillBoxesRefs.current.includes(entry.target)) entry.target.classList.remove('scaleUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToObserve = [
      aboutHeadingRef.current,
      introParagraphRef.current,
      knowAboutMeHeadingRef.current,
      contactButtonRef.current,
      mySkillsHeadingRef.current,
      ...knowAboutMeParagraphsRefs.current, // Spread the array of paragraph refs
      ...skillBoxesRefs.current,
    ].filter(element => element !== null);

    elementsToObserve.forEach(element => observer.observe(element));

    return () => {
      elementsToObserve.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="about-section">
      <h1 ref={aboutHeadingRef} className="about-heading initial-hidden">ABOUT ME</h1>
      <div className="heading-separator initial-hidden"></div>
      <p ref={introParagraphRef} className="intro-paragraph initial-hidden">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>

      <div className="main-content">
        <div className="about-me-subsection">
          <h2 ref={knowAboutMeHeadingRef} className="subsection-heading initial-hidden">Know About Me!</h2>
          <p ref={(el) => (knowAboutMeParagraphsRefs.current[0] = el)} className="initial-hidden">
            Greetings! I'm Prateek, a dedicated software engineer based in India.
            I specialize in C++, Python, cybersecurity, AI, and full-stack development.
            With a strong command of both frontend and backend, I build robust solutions.
          </p>
          <p ref={(el) => (knowAboutMeParagraphsRefs.current[1] = el)} className="initial-hidden">
            I've worked extensively with frameworks like Django and Flask to build secure,
            scalable web applications. I’ve also contributed to AI-driven projects, applying
            machine learning techniques to solve practical challenges and enhance application intelligence.
          </p>
          <p ref={(el) => (knowAboutMeParagraphsRefs.current[2] = el)} className="initial-hidden">
            Throughout my career, I've had the opportunity to work on a variety
            of projects, each presenting unique challenges and opportunities for
            growth. I thrive on the continuous learning and problem-solving
            inherent in the tech industry.
          </p>
          <p ref={(el) => (knowAboutMeParagraphsRefs.current[3] = el)} className="initial-hidden">
            Outside of coding, I enjoy collaborating with like-minded individuals and bringing ideas to life.
            Have something exciting in mind? Let’s connect and make it happen.
          </p>
          <Link
            to="/" //  changed to "/"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('contact'); //changed to contact
            }}
            ref={contactButtonRef}
            className="contact-button initial-hidden"
          >
            Contact Me
          </Link>
        </div>

        <div className="skills-subsection">
          <h2 ref={mySkillsHeadingRef} className="subsection-heading initial-hidden">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} ref={(el) => (skillBoxesRefs.current[index] = el)} className="skill-box initial-hidden">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;