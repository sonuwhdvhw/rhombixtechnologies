/**
 * Experience — glass accordion cards
 */
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { experienceData } from '../../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });  const [active, setActive] = useState(0);

  return (
    <section id="experience">
      <span className="section-num" aria-hidden="true">04</span>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity:0, y:-30, clipPath:'inset(0 100% 0 0)' }}
          animate={inView ? { opacity:1, y:0, clipPath:'inset(0 0% 0 0)' } : {}}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">WORK HISTORY</h2>
          <p className="section-desc">Roles, responsibilities, and real-world impact.</p>
        </motion.div>

        <div className="exp-list">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              className={`exp-item ${active === i ? 'active' : ''}`}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => setActive(active === i ? -1 : i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="exp-meta">
                <span className="exp-type-badge">{exp.type}</span>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-duration">
                  {exp.startDate} — {exp.endDate}
                  {exp.location && <><br />{exp.location}</>}
                </div>
              </div>

              <div className="exp-content">
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div className="exp-title">{exp.title}</div>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontSize: '1.4rem',
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      flexShrink: 0, fontFamily: 'var(--font-mono)',
                    }}
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="exp-bullets">
                        {exp.responsibilities.map((r, ri) => (
                          <div key={ri} className="exp-bullet">{r}</div>
                        ))}
                      </div>
                      {exp.contributions && (
                        <div className="exp-contribution">💡 {exp.contributions}</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
