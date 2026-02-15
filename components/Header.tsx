import React from 'react';
import { Instagram } from 'lucide-react';
import HamburgerButton from '../components/HamburgerButton';
import Link from 'next/link';

interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export default function Header({ toggleMenu, isMenuOpen }: HeaderProps) {

  return (
    <header className="absolute top-0 left-0 w-full px-8 sm:px-20 py-6 flex items-center justify-between z-20">
      <Link 
        href="https://www.instagram.com/kevinburrafato/" 
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <Instagram 
          size={34}
          className={`transition-colors duration-300 cursor-pointer text-white hover:text-[#536942]`} 
          strokeWidth={1.2}
        />
      </Link>
      <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />      
    </header>
  );
}