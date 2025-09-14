'use client';

import { Instagram } from 'lucide-react';
import React from "react"; 
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg-white text-black font-[family-name:var(--font-geist-sans)]">

      <section id="hero" className="h-[100vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h1 className="text-2xl sm:text-3xl font-semibold">
        <span className="inline-flex items-center space-x-2">
          <Typewriter
            options={{
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Vivere piuttosto che capire')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Osservare piuttosto che giudicare')
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </span>
        </h1>
        <a
          href="https://www.instagram.com/kevinburrafato/"
          className="absolute bottom-10 text-black hover:text-black/60 transition"
          aria-label="Vai al mio profilo Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={32} />
        </a>
      </section>
      
    </div>
  );
}



