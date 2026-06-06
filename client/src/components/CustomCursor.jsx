/**
 * CustomCursor — lightweight, desktop only
 * Removed text-hover squish (was causing massive lag)
 * Only button/link hover expand
 */
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let ox = -100, oy = -100;
    let mx = -100, my = -100;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      // Inner dot: instant
      inner.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    const loop = () => {
      ox += (mx - ox) * 0.15;
      oy += (my - oy) * 0.15;
      outer.style.transform = `translate(${ox - 18}px, ${oy - 18}px)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // Hover on interactive elements only
    const onEnter = () => outer.classList.add('hover');
    const onLeave = () => outer.classList.remove('hover');

    // Use event delegation instead of per-element listeners (much faster)
    const onDocEnter = (e) => {
      if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
        onEnter();
      }
    };
    const onDocLeave = (e) => {
      if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
        onLeave();
      }
    };

    document.addEventListener('mouseover', onDocEnter, { passive: true });
    document.addEventListener('mouseout',  onDocLeave, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onDocEnter);
      document.removeEventListener('mouseout',  onDocLeave);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" aria-hidden="true"
        style={{ position:'fixed', top:0, left:0, pointerEvents:'none', zIndex:99999 }} />
      <div ref={innerRef} className="cursor-inner" aria-hidden="true"
        style={{ position:'fixed', top:0, left:0, pointerEvents:'none', zIndex:99999 }} />
    </>
  );
};

export default CustomCursor;
