/**
 * Intro — Terminal boot sequence overlay
 * Auto-exits after ~4 seconds with a curtain-wipe out animation.
 * Mounts ON TOP of the already-rendered portfolio (no black flash).
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutData } from '../data/portfolioData';

const LINES = [
  { delay: 0,    prompt: '~$', cmd: 'ssh portfolio.dev', out: null },
  { delay: 0.6,  prompt: null, cmd: null, out: `Connecting to ${aboutData.name.toLowerCase().replace(' ', '-')}.dev...` },
  { delay: 1.2,  prompt: null, cmd: null, out: 'Authentication successful ✓' },
  { delay: 1.8,  prompt: '~$', cmd: 'cat welcome.txt', out: null },
  { delay: 2.2,  prompt: null, cmd: null, out: `> Welcome. I'm ${aboutData.name}.` },
  { delay: 2.8,  prompt: null, cmd: null, out: `> ${aboutData.title}` },
  { delay: 3.2,  prompt: '~$', cmd: 'init --portfolio', out: null },
];

const Intro = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    // Show lines one by one
    LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000 + 200);
    });

    // Exit after 4 seconds
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="intro-overlay"
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Scanline effect comes from CSS ::before */}

          <motion.div
            className="intro-terminal"
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Window title bar */}
            <div className="window-bar">
              <div className="dot red"    aria-hidden="true" />
              <div className="dot yellow" aria-hidden="true" />
              <div className="dot green"  aria-hidden="true" />
              <span className="window-title">bash — portfolio.dev</span>
            </div>

            {/* Terminal lines */}
            {LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                className="intro-line"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                {line.prompt && (
                  <>
                    <span className="prompt">{line.prompt} </span>
                    <span className="cmd">{line.cmd}</span>
                  </>
                )}
                {line.out && (
                  <span className={line.out.startsWith('>') ? 'out' : 'comment'}>
                    {line.out}
                  </span>
                )}
                {/* Cursor only on last visible line */}
                {i === visibleLines - 1 && <span className="cursor" aria-hidden="true" />}
              </motion.div>
            ))}
          </motion.div>

          {/* Skip hint */}
          <motion.button
            onClick={() => setVisible(false)}
            style={{
              position: 'absolute',
              bottom: 32,
              right: 40,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-3)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            [ press any key to skip ]
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
