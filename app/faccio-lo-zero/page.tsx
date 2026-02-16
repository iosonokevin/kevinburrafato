'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';

export default function Zero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="h-screen">
      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/sfondo_counseling_hero.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <Header
          toggleMenu={() => setIsMenuOpen((prev) => !prev)}
          isMenuOpen={isMenuOpen}
        />
        <SidebarMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-2 px-6">  
          <h1 className="hero-title text-3xl tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto mb-1">
            <Typewriter
              options={{
                loop: true,
                delay: 40,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString('Ho paura, eppure, ho fiducia.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Intento piuttosto che obiettivo.')
                  .pauseFor(1000);
              }}
            />
          </h1>
        </div>     
      </section>
    </main>
  );
}
