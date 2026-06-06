/**
 * BackgroundEffect
 * CSS grid + floating hero particles + corner radial glows
 */
import React from 'react';

const BackgroundEffect = () => (
  <>
    {/* Dot grid */}
    <div className="bg-grid" aria-hidden="true" />

    {/* Corner ambient glows */}
    <div aria-hidden="true" style={{
      position:'fixed', top:0, left:0, width:'50vw', height:'50vh',
      background:'radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)',
      pointerEvents:'none', zIndex:0,
    }} />
    <div aria-hidden="true" style={{
      position:'fixed', bottom:0, right:0, width:'50vw', height:'50vh',
      background:'radial-gradient(ellipse at 100% 100%, rgba(167,139,250,0.08) 0%, transparent 70%)',
      pointerEvents:'none', zIndex:0,
    }} />
  </>
);

export default BackgroundEffect;
