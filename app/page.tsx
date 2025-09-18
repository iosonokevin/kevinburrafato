'use client';

import { Instagram, MoveDown } from 'lucide-react';
import React from "react"; 
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg-white text-black font-[family-name:var(--font-geist-sans)]">

      {/* Hero section */}
      <section
        id="hero"
        className="h-[100dvh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >
        <h1 className="text-2xl sm:text-3xl">
          <span className="inline-flex items-center space-x-2">
            <Typewriter
              options={{
                loop: true,
                delay: 40,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Vivere piuttosto che capire.')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Trascendere e Includere.')
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h1>   
        <a
          href="#makezero"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition"
          aria-label="Vai a Faccio lo zero"
        >
          <span className="mb-1 text-sm whitespace-nowrap">Faccio lo zero</span>
          <MoveDown size={32} />
        </a>
      </section>

      {/* Make The Zero section */}
      <section
        id="makezero"
        className="h-[100dvh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >        
        <a
          href="#firstquestion"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition"
          aria-label="Vai a Io resto"
        >
          <span className="mb-1 text-sm whitespace-nowrap">Io resto</span>
          <MoveDown size={32} />
        </a>
      </section>

      {/* First Question section */}
      <section
        id="firstquestion"
        className="h-[100dvh] flex flex-col px-8 sm:px-20 text-center"
      >
        <div className="pt-8 pb-8">
          <h2 className="text-2xl sm:text-2xl font-light">Cosa sento? Dove lo sento?</h2>
        </div>
        
        <div className="flex-grow flex items-center justify-center pb-8"> 
          <textarea
            placeholder="Sento tensione alle spalle..."
            className="w-full h-full max-w-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none overflow-y-auto text-sm sm:text-base"
          ></textarea>
        </div>

        <div className="pb-12 flex justify-center">
          <a
            href="#firstpause"
            className="flex flex-col items-center text-black hover:text-black/60 transition"
            aria-label="Vai a Io resto"
          >
            <span className="mb-1 text-sm whitespace-nowrap">Io sento</span>
            <MoveDown size={32} />
          </a>
        </div>
      </section>

      {/* First Pause section */}
      <section
        id="firstpause"
        className="h-[100dvh] flex flex-col px-8 sm:px-20 text-center relative"
      >
        <div className="flex flex-col items-center justify-center space-y-20 h-full pb-32">
          {/* Togliere pb-32 per mobile */}
          <p className="text-xl sm:text-2xl font-light">Respiro.</p>
          <p className="text-xl sm:text-2xl font-light">Sono presente.</p>
          <p className="text-xl sm:text-2xl font-light">Sono presente.</p>
        </div>
        <a
          href="#makezero"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition"
          aria-label="Vai a Io resto"
        >
          <span className="mb-1 text-sm whitespace-nowrap">Io esisto</span>
          <MoveDown size={32} />
        </a>
      </section>

      {/* Second Question section */}
      <section
        id="secondquestion"
        className="h-[100dvh] flex flex-col px-8 sm:px-20 text-center"
      >
        <div className="pt-8 pb-8">
          <h2 className="text-2xl sm:text-2xl font-light">Che forma ha? Che colore ha?</h2>
        </div>
        
        <div className="flex-grow flex items-center justify-center pb-8"> 
          <textarea
            placeholder="Ha la forma di una sfera bianca..."
            className="w-full h-full max-w-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none overflow-y-auto text-sm sm:text-base"
          ></textarea>
        </div>

        <div className="pb-12 flex justify-center">
          <a
            href="#makezero"
            className="flex flex-col items-center text-black hover:text-black/60 transition"
            aria-label="Vai a Io resto"
          >
            <span className="mb-1 text-sm whitespace-nowrap">Io espando</span>
            <MoveDown size={32} />
          </a>
        </div>
      </section>

      {/* Second Pause section */}
      <section
        id="secondpause"
        className="h-[100dvh] flex flex-col px-8 sm:px-20 text-center relative"
      >
        {/* Contenitore frasi che occupa lo spazio sopra la freccia */}
        <div className="flex flex-col items-center justify-center space-y-20 h-full pb-32">
          {/* Togliere pb-32 per mobile */}
          <p className="text-xl sm:text-2xl font-light">Respiro.</p>
          <p className="text-xl sm:text-2xl font-light">Sono presente.</p>
          <p className="text-xl sm:text-2xl font-light">Sono presente.</p>
        </div>

        {/* Freccia in fondo, fissa */}
        <a
          href="#makezero"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition"
          aria-label="Vai a Io resto"
        >
          <span className="mb-1 text-sm whitespace-nowrap">Io esisto</span>
          <MoveDown size={32} />
        </a>
      </section>

      {/* Third Question section */}
      <section
        id="thirdquestion"
        className="h-[100dvh] flex flex-col px-8 sm:px-20 text-center"
      >
        <div className="pt-8 pb-8">
          <h2 className="text-2xl sm:text-2xl font-light">Se potesse parlare, cosa mi direbbe?</h2>
        </div>
        
        <div className="flex-grow flex items-center justify-center pb-8"> 
          <textarea
            placeholder="Io ti vedo..."
            className="w-full h-full max-w-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none overflow-y-auto text-sm sm:text-base"
          ></textarea>
        </div>

        <div className="pb-12 flex justify-center">
          <a
            href="#makezero"
            className="flex flex-col items-center text-black hover:text-black/60 transition"
            aria-label="Vai a Io resto"
          >
            <span className="mb-1 text-sm whitespace-nowrap">Io espando</span>
            <MoveDown size={32} />
          </a>
        </div>
      </section>

      {/* CTA section */}
      <section
        id="cta"
        className="h-[100dvh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >
        <h1 className="text-2xl sm:text-3xl">
          <span className="inline-flex items-center space-x-2">
            <Typewriter
              options={{
                loop: true,
                delay: 40,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Vivere piuttosto che capire.')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Trascendere e Includere.')
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h1>
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
        </div>
      </section>

      {/* Last section */}
      <section
        id="last"
        className="h-[100dvh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >
        <h1 className="text-2xl sm:text-3xl">
          <span className="inline-flex items-center space-x-2">
            <Typewriter
              options={{
                loop: true,
                delay: 40,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Vivere piuttosto che capire.')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Trascendere e Includere.')
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h1>
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
        </div>
      </section>

    </div>
  );
}
