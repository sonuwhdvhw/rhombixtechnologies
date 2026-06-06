/**
 * Footer — Blog removed from nav links
 */
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { aboutData } from '../data/portfolioData';

const NAV_LINKS = [
  'Home', 'About', 'Background', 'Skills',
  'Experience', 'Projects', 'Testimonials',
  'Achievements', 'Contact',
];

const scrollTo = (id) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

const Footer = () => {
  const waLink = `https://wa.me/${aboutData.whatsapp}?text=Hello%2C%20I%20found%20you%20through%20your%20portfolio!`;

  const socials = [
    { href: aboutData.github,   Icon: FiGithub,   label: 'GitHub'   },
    { href: aboutData.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
    { href: `mailto:${aboutData.email}`, Icon: FiMail, label: 'Email' },
    { href: waLink,             Icon: FaWhatsapp, label: 'WhatsApp' },
  ].filter(({ href }) => !!href);

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              {aboutData.name.split(' ')[0]}<span>.</span>
            </div>
            <p className="footer-tagline">
              {aboutData.title} based in {aboutData.location}.
              <br />Building digital experiences that matter.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="footer-nav-title">// Navigation</div>
            <div className="footer-nav-links">
              {NAV_LINKS.map((link) => (
                <button key={link} className="footer-nav-link" onClick={() => scrollTo(link)}>
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="footer-socials-title">// Connect</div>
            <div className="footer-social-icons">
              {socials.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 {aboutData.name}. All rights reserved.</span>
          <span className="footer-made">Built with <span>♥</span> using MERN Stack + Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
