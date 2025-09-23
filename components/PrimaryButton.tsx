'use client';

import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  text: string;
  href: string;
};

export default function ButtonLink({ text, href }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-2 border border-black text-black bg-transparent rounded-full transition-all duration-300 hover:bg-black hover:text-white"
    >
      {text}
    </Link>
  );
}