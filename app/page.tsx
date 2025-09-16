'use client';

import { Instagram, Mail } from 'lucide-react'; // Mail per Substack
import React from "react"; 
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg-white text-black font-[family-name:var(--font-geist-sans)]">

      <section
        id="hero"
        className="h-[100dvh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >
        <h1 className="text-2xl sm:text-3xl">
          <span className="inline-flex items-center space-x-2">
            <Typewriter
              options={{
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Vivere piuttosto che capire.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Vivere piuttosto che capire.')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h1>

        {/* Contenitore icone */}
        <div className="absolute bottom-10 flex space-x-6">
          <a
            href="https://www.instagram.com/kevinburrafato/"
            className="text-black hover:text-black/60 transition"
            aria-label="Vai al mio profilo Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={32} />
          </a>

          <a
            href="https://viverepiuttostochecapire.substack.com/"
            className="text-black hover:text-black/60 transition"
            aria-label="Vai alla mia newsletter su Substack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
