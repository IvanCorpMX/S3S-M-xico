import React from 'react';

export const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src="/logo.png" 
      alt="S3S México - Ingeniería Eléctrica y Respaldo de Energía" 
      className="h-full w-auto object-contain"
      loading="lazy"
      decoding="async"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
        const nextEl = (e.target as HTMLImageElement).nextElementSibling;
        if (nextEl) nextEl.classList.remove('hidden');
      }}
    />
    <svg viewBox="0 0 100 100" className="h-full w-auto hidden">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#ED7824" strokeWidth="6" />
      <text 
        x="50" 
        y="65" 
        textAnchor="middle" 
        className="font-black" 
        style={{ fontSize: '42px', fontFamily: 'Arial Black, sans-serif' }}
      >
        <tspan fill="#23272A">S</tspan>
        <tspan fill="#ED7824">3</tspan>
        <tspan fill="#23272A">S</tspan>
      </text>
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-xl font-black tracking-tighter text-gray-800">
        S3S <span className="text-brand-orange">MÉXICO</span>
      </span>
    </div>
  </div>
);
