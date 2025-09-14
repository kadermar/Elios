"use client";

import React from 'react';

export default function AnimatedFlare() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* First flare - organic triangular shape like Figma */}
      <div className="absolute top-[5%] right-[8%] animate-float-intense">
        <div className="w-[800px] h-[900px] relative animate-pulse-glow">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(ellipse 60% 70% at 25% 35%, rgba(255, 123, 56, 0.8) 0%, rgba(255, 182, 83, 0.7) 20%, rgba(255, 232, 102, 0.6) 40%, rgba(244, 178, 68, 0.5) 60%, rgba(237, 213, 75, 0.4) 80%, transparent 100%)',
              filter: 'blur(120px)',
              transform: 'rotate(-15deg) skewX(-10deg)'
            }}
          />
        </div>
      </div>

      {/* Second flare - asymmetrical organic shape */}
      <div className="absolute animate-drift-up-fast" style={{ left: '15%', top: '30%', animationDelay: '3s' }}>
        <div className="w-[700px] h-[800px] relative">
          <div 
            className="absolute inset-0 animate-pulse-glow" 
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 40% 60%, rgba(255, 232, 102, 0.7) 0%, rgba(255, 123, 56, 0.65) 25%, rgba(244, 178, 68, 0.55) 50%, rgba(255, 182, 83, 0.45) 75%, rgba(237, 213, 75, 0.35) 90%, transparent 100%)',
              filter: 'blur(110px)',
              transform: 'rotate(25deg) skewY(15deg)',
              animationDelay: '7s'
            }}
          />
        </div>
      </div>

      {/* Third flare - flowing triangular */}
      <div className="absolute animate-wave-intense" style={{ top: '60%', right: '20%', animationDelay: '8s' }}>
        <div className="w-[600px] h-[700px] relative">
          <div 
            className="absolute inset-0 animate-pulse-glow" 
            style={{
              background: 'radial-gradient(ellipse 50% 80% at 30% 20%, rgba(244, 178, 68, 0.75) 0%, rgba(255, 123, 56, 0.65) 30%, rgba(255, 232, 102, 0.55) 50%, rgba(255, 182, 83, 0.45) 70%, rgba(237, 213, 75, 0.35) 85%, transparent 100%)',
              filter: 'blur(100px)',
              transform: 'rotate(-35deg) skewX(20deg)',
              animationDelay: '4s'
            }}
          />
        </div>
      </div>

      {/* Fourth flare - organic oval flowing */}
      <div className="absolute top-[40%] left-[60%] animate-orbit-large" style={{ animationDelay: '12s' }}>
        <div className="w-[550px] h-[650px] relative">
          <div 
            className="absolute inset-0 animate-pulse-glow" 
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255, 182, 83, 0.7) 0%, rgba(255, 232, 102, 0.6) 35%, rgba(255, 123, 56, 0.55) 55%, rgba(244, 178, 68, 0.45) 75%, transparent 100%)',
              filter: 'blur(95px)',
              transform: 'rotate(45deg) skewY(-10deg)',
              animationDelay: '10s'
            }}
          />
        </div>
      </div>

      {/* Fifth flare - elongated organic */}
      <div className="absolute animate-drift-right-fast" style={{ top: '75%', left: '10%', animationDelay: '5s' }}>
        <div className="w-[750px] h-[400px] relative">
          <div 
            className="absolute inset-0 animate-pulse-glow" 
            style={{
              background: 'radial-gradient(ellipse 90% 40% at 20% 70%, rgba(237, 213, 75, 0.7) 0%, rgba(255, 182, 83, 0.6) 30%, rgba(255, 123, 56, 0.55) 55%, rgba(244, 178, 68, 0.45) 75%, rgba(255, 232, 102, 0.35) 90%, transparent 100%)',
              filter: 'blur(105px)',
              transform: 'rotate(10deg) skewX(-25deg)',
              animationDelay: '2s'
            }}
          />
        </div>
      </div>

      {/* Sixth flare - gentle breathing motion */}
      <div className="absolute bottom-[15%] right-[5%] animate-float-intense" style={{ animationDelay: '15s' }}>
        <div className="w-[500px] h-[600px] relative">
          <div 
            className="absolute inset-0 animate-pulse-glow" 
            style={{
              background: 'radial-gradient(ellipse 55% 75% at 35% 25%, rgba(255, 123, 56, 0.65) 0%, rgba(244, 178, 68, 0.6) 25%, rgba(255, 232, 102, 0.5) 50%, rgba(255, 182, 83, 0.4) 75%, transparent 100%)',
              filter: 'blur(90px)',
              transform: 'rotate(-60deg) skewY(20deg)',
              animationDelay: '12s'
            }}
          />
        </div>
      </div>

      {/* Seventh flare - flowing accent */}
      <div className="absolute top-[20%] left-[45%] animate-drift-diagonal-fast" style={{ animationDelay: '18s' }}>
        <div className="w-[400px] h-[500px] relative">
          <div 
            className="absolute inset-0 animate-pulse-glow" 
            style={{
              background: 'radial-gradient(ellipse 65% 85% at 60% 40%, rgba(255, 232, 102, 0.6) 0%, rgba(255, 123, 56, 0.55) 40%, rgba(237, 213, 75, 0.45) 70%, transparent 100%)',
              filter: 'blur(85px)',
              transform: 'rotate(30deg) skewX(15deg)',
              animationDelay: '6s'
            }}
          />
        </div>
      </div>
    </div>
  );
}