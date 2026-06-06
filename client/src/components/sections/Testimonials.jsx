/**
 * Testimonials — Professional grid + mobile carousel with swipe
 */
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonialsData } from '../../data/portfolioData';

const Stars = () => (
  <div className="tcard__stars" aria-label="5 stars">
    {[0,1,2,3,4].map(i => <span key={i} className="tcard__star">★</span>)}
  </div>
);

const Avatar = ({ name, initials }) => {
  const gradients = [
    'linear-gradient(135deg,#818cf8,#c4b5fd)',
    'linear-gradient(135deg,#6366f1,#a5b4fc)',
    'linear-gradient(135deg,#7c3aed,#c4b5fd)',
  ];
  const g = gradients[name.charCodeAt(0) % gradients.length];
  const letters = initials || name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  return (
    <div className="tcard__avatar" style={{ background: g }} aria-hidden="true">
      {letters}
    </div>
  );
};

const TCard = ({ t, i, inView }) => (
  <motion.div className="tcard"
    initial={{ opacity:0, y:50, scale:0.94 }}
    animate={inView ? { opacity:1, y:0, scale:1 } : {}}
    transition={{ duration:0.6, delay:i*0.12, ease:[0.22,1,0.36,1] }}
    whileHover={{ y:-8, transition:{ type:'spring', stiffness:280, damping:20 } }}
  >
    <div className="tcard__top">
      <Stars />
      <span className="tcard__qmark" aria-hidden="true">"</span>
    </div>
    <blockquote className="tcard__quote">{t.quote}</blockquote>
    <div className="tcard__divider" />
    <div className="tcard__author">
      <Avatar name={t.name} initials={t.initials} />
      <div>
        <div className="tcard__name">{t.name}</div>
        <div className="tcard__role">{t.title}</div>
        <div className="tcard__company">{t.company}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  const [cur, setCur]       = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive:true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const prev = () => setCur(p => Math.max(p-1, 0));
  const next = () => setCur(p => Math.min(p+1, testimonialsData.length-1));

  const onTouchStart = e => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    if (touchX.current === null) return;
    const d = touchX.current - e.changedTouches[0].clientX;
    if (d >  40) next();
    if (d < -40) prev();
    touchX.current = null;
  };

  return (
    <section id="testimonials">
      <span className="section-num" aria-hidden="true">06</span>
      <div className="container" ref={ref}>

        <motion.div
          initial={{ opacity:0, y:-30, clipPath:'inset(0 100% 0 0)' }}
          animate={inView ? { opacity:1, y:0, clipPath:'inset(0 0% 0 0)' } : {}}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">WHAT THEY SAY</h2>
        </motion.div>
        <motion.p className="section-desc"
          initial={{ opacity:0, y:20 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7, delay:0.2 }}
        >
          Words from fellow students and collaborators at COMSATS University.
        </motion.p>

        {/* Desktop grid */}
        {!isMobile ? (
          <div className="tgrid">
            {testimonialsData.map((t,i) => (
              <TCard key={i} t={t} i={i} inView={inView} />
            ))}
          </div>
        ) : (
          /* Mobile swipe carousel */
          <div className="tmobile" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <AnimatePresence mode="wait">
              <motion.div key={cur}
                initial={{ opacity:0, x:50 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-50 }}
                transition={{ duration:0.28 }}
              >
                <TCard t={testimonialsData[cur]} i={0} inView={inView} />
              </motion.div>
            </AnimatePresence>

            <div className="tmobile__ctrl">
              <button className="tmobile__btn" onClick={prev}
                disabled={cur===0} aria-label="Previous"
                style={{ opacity: cur===0 ? 0.3 : 1 }}>
                <FiChevronLeft />
              </button>
              <div className="tmobile__dots">
                {testimonialsData.map((_,i) => (
                  <button key={i}
                    className={`tmobile__dot${i===cur?' active':''}`}
                    onClick={() => setCur(i)} aria-label={`Card ${i+1}`} />
                ))}
              </div>
              <button className="tmobile__btn" onClick={next}
                disabled={cur===testimonialsData.length-1} aria-label="Next"
                style={{ opacity: cur===testimonialsData.length-1 ? 0.3 : 1 }}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* University tag */}
        <motion.div className="t-university-tag"
          initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
          transition={{ delay:0.7 }}
        >
          🎓 COMSATS University Islamabad, Vehari Campus · BS Computer Science
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
