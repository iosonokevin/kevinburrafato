'use client';

import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  text: string;
  href: string;
  variant?: 'default' | 'white';
};

export default function ButtonLink({ text, href, variant = 'default'}: ButtonLinkProps) {
  const isWhite = variant === 'white';

  return (
    <Link
      href={href}
      className={`inline-block px-6 py-2 border rounded-full transition-all duration-300 cursor-pointer ${
            isWhite ? 'text-white border-white bg-transparent hover:text-black hover:bg-white' 
            : 'border-[#1A1A1A] text-[#1A1A1A] bg-transparent hover:bg-[#536942] hover:border-[#536942] hover:text-white'
          }`}
    >
      {text}
    </Link>
  );
}

