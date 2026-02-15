'use client';

import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function CloseButton({
  onClick,
  className = '',
  ariaLabel = 'Chiudi',
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-10 h-10 
        flex items-center justify-center 
        rounded-full border-2 border-black 
        text-black hover:bg-black hover:text-white 
        transition-all duration-300 cursor-pointer 
        ${className}
      `}
      aria-label={ariaLabel}
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-6 h-6"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
}