/**
 * Hero — World-class developer landing page
 * Clean name (no glitch), animated floating frame, mobile optimized
 */
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { aboutData } from '../../data/portfolioData';

const buildSeq = (roles) => {
  const s = [];
  roles.forEach(r => { s.push(r); s.push(2000); });
  return s;
};

const Hero = () => {
  const waLink = `https://wa.me/${aboutData.whatsapp}?text=Hello%2C%20I%20found%20you%20through%20your%20portfolio!`;

  return (
    <section id="home" className="hero-section">

      <div className="hero-container">

        {/* ── LEFT: Text ── */}
        <div className="hero-text-col">

          {/* Status badge */}
          <motion.div
            className="hero-status-badge"
            initial={{ opacity:0, x:-30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.6, delay:0.1 }}
          >
            <span className="hero-status-dot" />
            Available for Work
          </motion.div>

          {/* Name — clean, no glitch */}
          <motion.h1
            className="hero-name-clean"
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.9, delay:0.2, ease:[0.22,1,0.36,1] }}
          >
            <span className="hero-name-first">{aboutData.name.split(' ')[0]}</span>
            <span className="hero-name-last">{aboutData.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Role typing */}
          <motion.div
            className="hero-role-line"
            initial={{ opacity:0, x:-30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, delay:0.45 }}
          >
            <span className="hero-role-prefix">I build </span>
            <TypeAnimation
              sequence={buildSeq(aboutData.roles)}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="hero-role-typed"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="hero-bio"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.6 }}
          >
            {aboutData.bio}
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="hero-stats"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.75 }}
          >
            {[
              { num:'2+',   label:'Years Coding'   },
              { num:'5+',   label:'Projects Built' },
              { num:'MERN', label:'Stack'           },
            ].map(({ num, label }) => (
              <div key={label} className="hero-stat-item">
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.9, type:'spring' }}
          >
            <motion.a
              href="#contact"
              className="btn-primary hero-cta-main"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}); }}
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
            >
              See My Work
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:1.1 }}
          >
            {[
              { href: aboutData.github,              Icon: FiGithub,   label: 'GitHub'    },
              { href: aboutData.linkedin,            Icon: FiLinkedin, label: 'LinkedIn'  },
              { href: `mailto:${aboutData.email}`,  Icon: FiMail,     label: 'Email'     },
              { href: waLink,                        Icon: FaWhatsapp, label: 'WhatsApp'  },
            ].filter(({ href }) => !!href).map(({ href, Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={label}
                initial={{ opacity:0, y:16 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                whileHover={{ y:-4, scale:1.15 }}
                whileTap={{ scale:0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Photo with rotating border frame ── */}
        <motion.div
          className="hero-photo-col"
          initial={{ opacity:0, x:80 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1.1, delay:0.3, ease:[0.22,1,0.36,1] }}
        >
          <div className="hero-photo-scene">

            {/* Rotating gradient border ring */}
            <div className="hero-rotate-ring" aria-hidden="true" />

            {/* Static outer glow ring */}
            <div className="hero-glow-ring" aria-hidden="true" />

            {/* Corner accents */}
            <div className="hero-corner hero-corner--tl" aria-hidden="true" />
            <div className="hero-corner hero-corner--br" aria-hidden="true" />

            {/* Photo card — clean, no overlay */}
            <div className="hero-photo-card">
              <img
                src="/profile/photo.jpg"
                alt={`${aboutData.name} — ${aboutData.title}`}
                className="hero-photo-img"
                loading="eager"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  const card = e.currentTarget.parentElement;
                  const ph = document.createElement('div');
                  ph.className = 'hero-photo-placeholder';
                  ph.innerHTML = '<span>SZ</span>';
                  card.appendChild(ph);
                }}
              />
              {/* Name badge at bottom */}
              <div className="hero-photo-overlay">
                <span className="hero-photo-overlay__name">{aboutData.name}</span>
                <span className="hero-photo-overlay__role">{aboutData.title}</span>
              </div>
            </div>

            {/* Floating "Open to Work" pill */}
            <motion.div
              className="hero-float-pill"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <span className="hero-float-pill__dot" />
              Open to Work
            </motion.div>

            {/* Floating tech pill */}
            <motion.div
              className="hero-float-pill hero-float-pill--tech"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            >
              ⚛️ MERN Stack
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.8 }}
      >
        <motion.div
          animate={{ y:[0, 8, 0] }}
          transition={{ repeat:Infinity, duration:1.6 }}
        >
          <FiArrowDown size={18} />
        </motion.div>
        <span>Scroll</span>
      </motion.div>

    </section>
  );
};

export default Hero;
