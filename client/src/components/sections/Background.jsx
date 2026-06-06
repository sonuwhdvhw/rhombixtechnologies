/**
 * Background — Education + Certifications timeline with stagger animations
 */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiBook, FiAward } from 'react-icons/fi';
import { backgroundData } from '../../data/portfolioData';

const TimelineItem = ({ item, index, inView }) => (
  <motion.div
    className="timeline-item"
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
  >
    <div className="timeline-dot" aria-hidden="true" />
    <div className="timeline-year">{item.year}</div>
    <div className="timeline-title">{item.degree}</div>
    <div className="timeline-inst">{item.institution}</div>
    {item.issuingBody && (
      <div className="timeline-inst" style={{ color: 'var(--accent)', opacity: 0.75 }}>
        Issued by: {item.issuingBody}
      </div>
    )}
    {item.description && <div className="timeline-desc">{item.description}</div>}
    {item.credentialUrl && (
      <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer" className="timeline-link">
        <FiExternalLink /> View Credential
      </a>
    )}
  </motion.div>
);

const Background = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const education      = backgroundData.filter((b) => b.type === 'education');
  const certifications = backgroundData.filter((b) => b.type === 'certification');

  return (
    <section id="background">
      <span className="section-num" aria-hidden="true">02</span>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity:0, y:-30, clipPath:'inset(0 100% 0 0)' }}
          animate={inView ? { opacity:1, y:0, clipPath:'inset(0 0% 0 0)' } : {}}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">EDU & CERTS</h2>
          <p className="section-desc">Academic foundation that shaped my expertise.</p>
        </motion.div>

        <div className="bg-section-grid">
          <div>
            <motion.div className="bg-column-title"
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FiBook /> Education
            </motion.div>
            <div className="timeline">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {certifications.length > 0 && (
            <div>
              <motion.div className="bg-column-title"
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FiAward /> Certifications
              </motion.div>
              <div className="timeline">
                {certifications.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} inView={inView} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Background;
