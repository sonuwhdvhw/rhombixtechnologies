/**
 * About — section watermark, updated animations (x:-30 stagger on info items)
 */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { aboutData } from '../../data/portfolioData';

const About = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const waLink = `https://wa.me/${aboutData.whatsapp}?text=Hello%2C%20I%20found%20you%20through%20your%20portfolio!`;

  const infoItems = [
    { label: 'Full Name', value: aboutData.name     },
    { label: 'Role',      value: aboutData.title    },
    { label: 'Location',  value: aboutData.location },
    { label: 'Email',     value: aboutData.email    },
    { label: 'Phone',     value: aboutData.phone    },
    { label: 'Available', value: 'Open to work ✓'   },
  ];

  const socials = [
    { href: aboutData.github,                    Icon: FiGithub,   label: 'GitHub'    },
    { href: aboutData.linkedin,                  Icon: FiLinkedin, label: 'LinkedIn'  },
    { href: `mailto:${aboutData.email}`,         Icon: FiMail,     label: 'Email'     },
    { href: waLink,                              Icon: FaWhatsapp, label: 'WhatsApp'  },
  ].filter(({ href }) => !!href);

  return (
    <section id="about">
      {/* Section watermark */}
      <span className="section-num" aria-hidden="true">01</span>

      <div className="container" ref={ref}>
        {/* Heading — clip reveal */}
        <motion.div
          initial={{ opacity: 0, y: -30, clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">WHO AM I</h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p className="section-desc" style={{ marginBottom: 0 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        />

        <div className="about-grid">
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="about-bio">{aboutData.bio}</p>

            <div className="about-info-grid">
              {infoItems.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="about-info-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="about-info-label">{label}</div>
                  <div className="about-info-value">{value}</div>
                </motion.div>
              ))}
            </div>

            <div className="about-socials">
              {socials.map(({ href, Icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon /> {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right col */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Terminal card */}
            <div className="about-terminal">
              <div className="about-terminal-header">
                <div style={{ width:10,height:10,borderRadius:'50%',background:'#f87171' }} />
                <div style={{ width:10,height:10,borderRadius:'50%',background:'#fbbf24' }} />
                <div style={{ width:10,height:10,borderRadius:'50%',background:'#4ade80' }} />
                <span style={{ fontFamily:'var(--font-mono)',fontSize:'0.7rem',color:'var(--text-3)',marginLeft:8 }}>
                  profile.json
                </span>
              </div>
              <div className="about-terminal-body">
                <div><span className="t-key">"name"</span><span className="t-colon">: </span><span className="t-str">"{aboutData.name}"</span>,</div>
                <div><span className="t-key">"title"</span><span className="t-colon">: </span><span className="t-str">"{aboutData.title}"</span>,</div>
                <div><span className="t-key">"location"</span><span className="t-colon">: </span><span className="t-str">"{aboutData.location}"</span>,</div>
                <div><span className="t-key">"available"</span><span className="t-colon">: </span><span className="t-bool">true</span>,</div>
                <div><span className="t-key">"roles"</span><span className="t-colon">: </span>[</div>
                {aboutData.roles.slice(0, 3).map((r) => (
                  <div key={r} style={{ paddingLeft:20 }}><span className="t-str">"{r}"</span>,</div>
                ))}
                <div>],</div>
                <div><span className="t-key">"github"</span><span className="t-colon">: </span><span className="t-str">"{aboutData.github}"</span></div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginTop:8 }}>
              {[
                { n:'1+',  l:'Live App' },
                { n:'6+',  l:'Projects' },
                { n:'15+', l:'Skills'   },
              ].map(({ n, l }, i) => (
                <motion.div
                  key={l}
                  style={{
                    background:'var(--glass-bg)',backdropFilter:'blur(16px)',
                    border:'1px solid var(--glass-border)',borderRadius:'var(--radius)',
                    boxShadow:'var(--glass-shadow)',padding:'16px',textAlign:'center',
                  }}
                  initial={{ opacity:0, y:20 }}
                  animate={inView ? { opacity:1, y:0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale:1.06, boxShadow:'0 0 24px var(--accent-glow)' }}
                >
                  <div style={{
                    fontFamily:'var(--font-display)',fontSize:'2rem',letterSpacing:2,
                    background:'linear-gradient(135deg,#818cf8,#c4b5fd)',
                    WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                  }}>{n}</div>
                  <div style={{
                    fontFamily:'var(--font-mono)',fontSize:'0.62rem',
                    color:'var(--text-3)',textTransform:'uppercase',letterSpacing:2,
                  }}>{l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
