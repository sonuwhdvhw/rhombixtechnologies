/**
 * Projects — Full professional showcase
 * Hero-style card with live screenshot, feature list, tech pills, live link
 */
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiGithub, FiExternalLink, FiCheck, FiCode,
  FiCalendar, FiUser, FiGlobe,
} from 'react-icons/fi';
import { projectsData } from '../../data/portfolioData';

/* Tech icon mapping */
const TECH_ICONS = {
  'HTML5':               '🌐',
  'CSS3':                '🎨',
  'JavaScript':          '⚡',
  'Bootstrap':           '🅱',
  'PHP':                 '🐘',
  'MySQL':               '🗄️',
  'Responsive Web Design':'📱',
  'Git & GitHub':        '📦',
  'React.js':            '⚛️',
  'Node.js':             '🟢',
  'Express.js':          '🚂',
  'MongoDB':             '🍃',
};

const ProjectCard = ({ project, index, inView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className="proj-showcase"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Top bar ─────────────────────────────────────── */}
      <div className="proj-showcase__topbar">
        <div className="proj-showcase__dots">
          <span className="proj-dot proj-dot--red" />
          <span className="proj-dot proj-dot--yellow" />
          <span className="proj-dot proj-dot--green" />
        </div>
        <div className="proj-showcase__url">
          <FiGlobe size={11} />
          <span>{project.liveUrl?.replace('https://', '') || 'localhost:3000'}</span>
        </div>
        {project.featured && (
          <span className="proj-showcase__badge">⭐ Featured</span>
        )}
      </div>

      {/* ── Main content — image + info ──────────────────── */}
      <div className={`proj-showcase__body ${isEven ? '' : 'proj-showcase__body--reverse'}`}>

        {/* Screenshot */}
        <div className="proj-showcase__img-wrap">
          {/* Live iframe — shows actual website */}
          <div className="proj-showcase__iframe-wrap">
            <iframe
              src={project.liveUrl}
              title={`${project.title} preview`}
              className="proj-showcase__iframe"
              loading="lazy"
              scrolling="no"
              tabIndex="-1"
            />
          </div>

          {/* Hover overlay */}
          <div className="proj-showcase__img-overlay">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-showcase__overlay-btn"
            >
              <FiExternalLink size={20} />
              View Live Site
            </a>
          </div>
        </div>

        {/* Info panel */}
        <div className="proj-showcase__info">
          {/* Meta row */}
          <div className="proj-showcase__meta">
            <span className="proj-showcase__meta-item">
              <FiUser size={12} /> {project.role}
            </span>
            {project.year && (
              <span className="proj-showcase__meta-item">
                <FiCalendar size={12} /> {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="proj-showcase__title">{project.title}</h3>

          {/* Description */}
          <p className="proj-showcase__desc">{project.description}</p>

          {/* Outcomes */}
          {project.outcomes && (
            <div className="proj-showcase__outcome">
              <span className="proj-showcase__outcome-icon">📊</span>
              {project.outcomes}
            </div>
          )}

          {/* Features */}
          {project.features?.length > 0 && (
            <div className="proj-showcase__features">
              <div className="proj-showcase__features-title">Key Features</div>
              <ul className="proj-showcase__feature-list">
                {project.features.map((f) => (
                  <li key={f} className="proj-showcase__feature-item">
                    <FiCheck size={13} className="proj-showcase__check" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="proj-showcase__tech-section">
            <div className="proj-showcase__tech-title">Tech Stack</div>
            <div className="proj-showcase__tech-pills">
              {project.techStack.map((tech) => (
                <span key={tech} className="proj-tech-pill">
                  <span className="proj-tech-pill__icon">
                    {TECH_ICONS[tech] || '💻'}
                  </span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="proj-showcase__actions">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn proj-btn--primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiExternalLink size={15} />
                View Live Site
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn proj-btn--secondary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiGithub size={15} />
                Source Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects">
      <span className="section-num" aria-hidden="true">05</span>
      <div className="container" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30, clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">WHAT I'VE BUILT</h2>
        </motion.div>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Real-world applications designed, developed, and deployed from scratch.
        </motion.p>

        {/* Project cards */}
        <div className="proj-list">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
