/**
 * Skills — World-class influencer portfolio design
 * Inspired by: Linear.app, Vercel, Framer
 * - Marquee scrolling tech logos row
 * - Animated proficiency bars with percentage
 * - Grouped category cards
 * - Soft skills as interactive pills
 */
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';

/* ── Tech brand colors ────────────────────────────────────── */
const TECH_META = {
  'HTML5':               { icon: '🌐', color: '#e34f26' },
  'CSS3':                { icon: '🎨', color: '#1572b6' },
  'JavaScript (ES6+)':   { icon: '⚡', color: '#f7df1e' },
  'Bootstrap':           { icon: '🅱',  color: '#7952b3' },
  'Tailwind CSS':        { icon: '💨', color: '#38bdf8' },
  'PHP':                 { icon: '🐘', color: '#777bb4' },
  'MySQL':               { icon: '🗄️', color: '#4479a1' },
  'React.js':            { icon: '⚛️', color: '#61dafb' },
  'Node.js':             { icon: '🟢', color: '#339933' },
  'Express.js':          { icon: '🚂', color: '#818cf8' },
  'REST APIs':           { icon: '🔗', color: '#c4b5fd' },
  'Git & GitHub':        { icon: '📦', color: '#f05032' },
  'Responsive Web Design':{ icon: '📱', color: '#38bdf8' },
  'Database Design':     { icon: '🏗️', color: '#4479a1' },
  'OOP':                 { icon: '🔷', color: '#818cf8' },
};

/* ── Animated progress bar ────────────────────────────────── */
const SkillBar = ({ skill, index, inView }) => {
  const meta  = TECH_META[skill.name] || { icon: '💻', color: '#818cf8' };
  const level = skill.level || 75;
  const barRef = useRef(null);

  useEffect(() => {
    if (!inView || !barRef.current) return;
    const t = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = `${level}%`;
      }
    }, 200 + index * 80);
    return () => clearTimeout(t);
  }, [inView, level, index]);

  return (
    <motion.div
      className="sbar"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="sbar__header">
        <div className="sbar__left">
          <span className="sbar__icon">{meta.icon}</span>
          <span className="sbar__name">{skill.name}</span>
        </div>
        <span className="sbar__pct">{level}%</span>
      </div>
      <div className="sbar__track">
        <div
          ref={barRef}
          className="sbar__fill"
          style={{
            width: '0%',
            background: `linear-gradient(90deg, #818cf8, ${meta.color === '#818cf8' ? '#c4b5fd' : meta.color})`,
          }}
        />
      </div>
    </motion.div>
  );
};

/* ── Marquee strip (infinite scroll logos) ────────────────── */
const MarqueeStrip = ({ skills }) => {
  const items = [...skills, ...skills]; // duplicate for seamless loop
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => {
          const meta = TECH_META[s.name] || { icon: '💻', color: '#818cf8' };
          return (
            <div key={i} className="marquee-item">
              <span className="marquee-item__icon">{meta.icon}</span>
              <span className="marquee-item__name">{s.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Soft skill pill ──────────────────────────────────────── */
const SoftPill = ({ skill, index, inView }) => (
  <motion.div
    className="soft-pill"
    initial={{ opacity: 0, scale: 0.7, y: 16 }}
    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
    transition={{ delay: index * 0.06, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.08, y: -3 }}
  >
    {skill.name}
  </motion.div>
);

/* ── Main component ───────────────────────────────────────── */
const Skills = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const tech = skillsData.filter(s => s.category === 'technical');
  const soft = skillsData.filter(s => s.category === 'soft');

  /* Split tech into two columns */
  const mid   = Math.ceil(tech.length / 2);
  const col1  = tech.slice(0, mid);
  const col2  = tech.slice(mid);

  return (
    <section id="skills" style={{ overflow: 'hidden' }}>
      <span className="section-num" aria-hidden="true">03</span>

      {/* ── Heading ─────────────────────────────────────── */}
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -30, clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">MY ARSENAL</h2>
        </motion.div>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Technologies I build with — from pixel-perfect frontends to scalable backends.
        </motion.p>
      </div>

      {/* ── Marquee tech strip ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        style={{ marginTop: 48 }}
      >
        <MarqueeStrip skills={tech} />
      </motion.div>

      {/* ── Skills body ─────────────────────────────────── */}
      <div className="container">
        <div className="skills-body">

          {/* Left: progress bars */}
          <div className="skills-bars-wrap">
            <motion.div className="skills-cat-label"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              ⚙️ Technical Skills
            </motion.div>

            <div className="skills-bars-cols">
              <div className="skills-bars-col">
                {col1.map((s, i) => (
                  <SkillBar key={s.name} skill={s} index={i} inView={inView} />
                ))}
              </div>
              <div className="skills-bars-col">
                {col2.map((s, i) => (
                  <SkillBar key={s.name} skill={s} index={i + col1.length} inView={inView} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: soft skills + stats */}
          <div className="skills-right">

            {/* Stats cards */}
            <motion.div className="skills-stats"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                { n: `${tech.length}+`, l: 'Technologies', icon: '⚡' },
                { n: `${tech.filter(s=>(s.level||0)>=80).length}+`, l: 'Advanced Skills', icon: '🏆' },
                { n: '1+',  l: 'Live Projects', icon: '🚀' },
              ].map(({ n, l, icon }) => (
                <div key={l} className="skills-stat-card">
                  <span className="skills-stat-icon">{icon}</span>
                  <div className="skills-stat-num">{n}</div>
                  <div className="skills-stat-label">{l}</div>
                </div>
              ))}
            </motion.div>

            {/* Soft skills */}
            <div className="skills-soft-block">
              <motion.div className="skills-cat-label"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                🧠 Soft Skills
              </motion.div>
              <div className="soft-pills-wrap">
                {soft.map((s, i) => (
                  <SoftPill key={s.name} skill={s} index={i} inView={inView} />
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <motion.div className="skills-learning"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="skills-learning__header">
                <span className="skills-learning__dot" />
                Currently Learning
              </div>
              <div className="skills-learning__list">
                {['TypeScript', 'Next.js', 'Docker', 'Cloud (AWS)'].map(item => (
                  <span key={item} className="skills-learning__tag">{item}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
