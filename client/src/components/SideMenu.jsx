/**
 * Navigation — Top navbar always visible + full-screen menu overlay
 * Professional side-panel style with numbered links
 */
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home',         id: 'home'         },
  { label: 'About',        id: 'about'        },
  { label: 'Background',   id: 'background'   },
  { label: 'Skills',       id: 'skills'       },
  { label: 'Experience',   id: 'experience'   },
  { label: 'Projects',     id: 'projects'     },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact'      },
];

const SideMenu = () => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme }  = useTheme();

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = useCallback((id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }, []);

  return (
    <>
      {/* ── Top Navbar Bar ──────────────────────────────────── */}
      <nav className={`topnav ${scrolled ? 'topnav--scrolled' : ''}`}>
        <div className="topnav__inner">
          {/* Logo */}
          <button className="topnav__logo" onClick={() => scrollTo('home')}>
            <span className="topnav__logo-symbol">&gt;_</span>
            saqlain.dev
          </button>

          {/* Desktop links (hidden below 900px) */}
          <div className="topnav__links">
            {NAV_ITEMS.slice(0, 5).map((item) => (
              <button
                key={item.id}
                className="topnav__link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="topnav__link topnav__link--more" onClick={() => setOpen(true)}>
              More ···
            </button>
          </div>

          {/* Right controls */}
          <div className="topnav__controls">
            <button
              className="topnav__icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              className={`topnav__icon-btn topnav__menu-btn ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen Overlay Menu ────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Side panel */}
            <motion.aside
              className="menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-label="Navigation menu"
            >
              {/* Panel header */}
              <div className="menu-panel__header">
                <span className="menu-panel__title">Navigation</span>
                <button
                  className="topnav__icon-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="menu-panel__nav">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className="menu-panel__item"
                    onClick={() => scrollTo(item.id)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="menu-panel__num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="menu-panel__label">{item.label}</span>
                    <span className="menu-panel__arrow">→</span>
                  </motion.button>
                ))}
              </nav>

              {/* Panel footer */}
              <div className="menu-panel__footer">
                <span>© 2025 Saqlain Zafar</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
