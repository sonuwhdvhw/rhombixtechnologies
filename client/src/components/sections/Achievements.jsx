/**
 * Achievements — spring scale+rotate entrance, section watermark
 */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievementsData } from '../../data/portfolioData';

const Achievements = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements">
      <span className="section-num" aria-hidden="true">07</span>
      <div className="container" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30, clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-title">HONORS &amp; WINS</h2>
        </motion.div>
        <motion.p className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Awards, recognitions, and milestones that mark my journey.
        </motion.p>

        <div className="achievements-grid">
          {achievementsData.map((item, i) => (
            <motion.article
              key={i}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 150 }}
              whileHover={{ y: -10, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
            >
              <div className="achievement-icon" aria-hidden="true">{item.icon}</div>
              <div className="achievement-year">{item.year}</div>
              <h3 className="achievement-title">{item.title}</h3>
              {item.issuingBody && <div className="achievement-body">{item.issuingBody}</div>}
              {item.description && <p className="achievement-desc">{item.description}</p>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
