'use client';
import React from 'react';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
  isDark?: boolean;
}

export default function HamburgerButton({ toggleMenu, isDark = false }: Props) {
  return (
    <button
      className={`group w-10 h-10 rounded-full border flex flex-col items-center justify-center space-y-1 transition-all duration-300 z-30 cursor-pointer 
        ${isDark ? 'border-black hover:bg-[#536942]' : 'border-white hover:bg-white'}`}
      onClick={toggleMenu}
    >
      <span className={`w-5 h-0.5 transition-colors duration-300 
        ${isDark ? 'bg-black group-hover:bg-white' : 'bg-white group-hover:bg-black'}`}></span>
      <span className={`w-5 h-0.5 transition-all duration-300  
        ${isDark ? 'bg-black group-hover:bg-white' : 'bg-white group-hover:bg-black'}`}></span>
      <span className={`w-5 h-0.5 transition-colors duration-300 
        ${isDark ? 'bg-black group-hover:bg-white' : 'bg-white group-hover:bg-black'}`}></span>
    </button>
  );
}