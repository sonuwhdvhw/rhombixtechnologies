/**
 * Hero — floating particles, advanced animations, section watermark
 */
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { aboutData } from '../../data/portfolioData';

const buildSeq = (roles) => {
  const s = [];
  roles.forEach(r => { s.push(r); s.push(2200); });
  return s;
};

/* Floating CSS particles */
const PARTICLES = [
  { w:300,h:300, top:'10%', left:'5%',   dur:'18s', tx:'40px',  ty:'-50px', op:0.06 },
  { w:250,h:250, top:'60%', left:'60%',  dur:'22s', tx:'-30px', ty:'40px',  op:0.05 },
  { w:400,h:400, top:'30%', left:'70%',  dur:'25s', tx:'25px',  ty:'-35px', op:0.04 },
  { w:180,h:180, top:'80%', left:'20%',  dur:'16s', tx:'35px',  ty:'30px',  op:0.07 },
  { w:320,h:320, top:'15%', left:'40%',  dur:'20s', tx:'-40px', ty:'45px',  op:0.04 },
  { w:220,h:220, top:'50%', left:'-5%',  dur:'24s', tx:'50px',  ty:'-20px', op:0.05 },
];

const Hero = () => {
  const waLink = `https://wa.me/${aboutData.whatsapp}?text=Hello%2C%20I%20found%20you%20through%20your%20portfolio!`;

  return (
    <section id="home">
      {/* Section watermark */}
      <span className="section-num" aria-hidden="true">01</span>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div key={i} className="hero-particle" aria-hidden="true" style={{
          width: p.w, height: p.h,
          top: p.top, left: p.left,
          opacity: p.op,
          '--dur': p.dur,
          '--tx': p.tx,
          '--ty': p.ty,
        }} />
      ))}

      <div className="hero-container">
        {/* Text Column */}
        <div className="hero-text-col">

          {/* Name */}
          <motion.h1
            className="hero-name glitch-text"
            data-text={aboutData.name.toUpperCase()}
            initial={{ opacity:0, y:-50 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.9, delay:0.2, ease:[0.22,1,0.36,1] }}
          >
            {aboutData.name.split(' ').map((part, i) => (
              <span key={i}>
                {i === 1 ? <span className="accent">{part}</span> : part}
                {i < aboutData.name.split(' ').length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Role */}
          <motion.div
            className="hero-role-line"
            initial={{ opacity:0, x:-40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, delay:0.5 }}
          >
            <TypeAnimation
              sequence={buildSeq(aboutData.roles)}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ fontFamily:'var(--font-mono)' }}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="hero-bio"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:1, delay:0.7 }}
          >
            {aboutData.bio}
          </motion.p>

          {/* Goals */}
          <motion.p
            className="hero-goals"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:1, delay:0.8 }}
          >
            {aboutData.goals}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity:0, y:30, scale:0.85 }}
            animate={{ opacity:1, y:0, scale:1 }}
            transition={{ duration:0.6, delay:0.9, type:'spring' }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}
              whileHover={{ scale:1.06 }} whileTap={{ scale:0.96 }}
            >
              Let's Talk
            </motion.a>
            <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="btn-secondary" whileHover={{ scale:1.06 }} whileTap={{ scale:0.96 }}
            >
              <FiFileText /> View Resume
            </motion.a>
            <motion.a href={waLink} target="_blank" rel="noopener noreferrer"
              className="btn-secondary" whileHover={{ scale:1.06 }} whileTap={{ scale:0.96 }}
            >
              <FaWhatsapp style={{color:'#25d366'}} /> WhatsApp
            </motion.a>
          </motion.div>

          {/* Socials — stagger */}
          <div className="hero-socials">
            {[
              { href:aboutData.github,   Icon:FiGithub,   label:'GitHub'   },
              { href:aboutData.linkedin, Icon:FiLinkedin, label:'LinkedIn' },
              { href:`mailto:${aboutData.email}`, Icon:FiMail, label:'Email' },
              { href:waLink, Icon:FaWhatsapp, label:'WhatsApp' },
            ].filter(({href}) => !!href).map(({href,Icon,label}, i) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="hero-social-link" aria-label={label}
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ y:-4, scale:1.12 }} whileTap={{ scale:0.92 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Photo Column */}
        <motion.div
          className="hero-photo-col"
          initial={{ opacity:0, scale:0.8, x:60 }}
          animate={{ opacity:1, scale:1, x:0 }}
          transition={{ duration:1.1, delay:0.3, ease:[0.22,1,0.36,1] }}
        >
          <div className="hero-photo-wrapper">
            {/* Professional 3D frame */}
            <motion.div
              className="hero-photo-frame"
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.03 }}
              transition={{ type:'spring', stiffness:150, damping:20 }}
            >
              {/* Glow ring */}
              <div className="hero-photo-glow" aria-hidden="true" />

              {/* Photo */}
              <img
                src="/profile/photo.jpg"
                alt={`${aboutData.name} — ${aboutData.title}`}
                loading="eager"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  const frame = e.currentTarget.parentElement;
                  const s = document.createElement('div');
                  s.style.cssText = 'width:100%;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(129,140,248,0.1),rgba(196,181,253,0.05));border-radius:20px;';
                  s.innerHTML = '<span style="font-family:var(--font-display);font-size:7rem;background:linear-gradient(135deg,#818cf8,#c4b5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">SZ</span>';
                  frame.appendChild(s);
                }}
              />

              {/* Name badge bottom */}
              <div className="hero-photo-namebadge">
                <span className="hero-photo-namebadge__name">{aboutData.name}</span>
                <span className="hero-photo-namebadge__role">{aboutData.title}</span>
              </div>
            </motion.div>
            <div className="hero-photo-badge" aria-hidden="true">OPEN<br/>TO<br/>WORK</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        style={{
          position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:6,
          fontFamily:'var(--font-mono)', fontSize:'0.6rem',
          color:'var(--text-3)', letterSpacing:'2px', textTransform:'uppercase', zIndex:1,
        }}
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
      >
        Scroll
        <motion.div
          style={{ width:1, height:32, background:'linear-gradient(180deg,var(--accent),transparent)' }}
          animate={{ scaleY:[1,0.2,1] }} transition={{ repeat:Infinity, duration:1.8 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
