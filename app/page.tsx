'use client';

import { Bird, Circle, Eye, Sailboat, Sprout } from 'lucide-react';
import React from "react"; 
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)]">

      <section id="hero" className="h-[90vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h1 className="text-2xl sm:text-3xl font-semibold">
        <span className="inline-flex items-center space-x-2">
        <span>Io Sono</span>
          <Typewriter
            options={{
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Kevin')
                .pauseFor(1500)
                .deleteAll()
                .typeString('VerdeCasa')
                .pauseFor(1500)
                .deleteAll()
                .typeString('PicchioRosso')
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </span>
        </h1>
        <a
          href="#what"
          className="absolute bottom-10 animate-bounce text-white/60 hover:text-white transition"
          aria-label="Scorri verso Cosa faccio"
        >
          <Circle size={32} />
        </a>
      </section>

      <section id="what" className="h-[90vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold">Cosa faccio</h2>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
        >
        Creo spazi digitali con presenza, ascolto e cura. 
        Ogni sito che realizzo nasce da un incontro, da una relazione, e dal desiderio di dare forma a qualcosa di vero e personale.
        </motion.p>
        <a
          href="#how"
          className="absolute bottom-10 animate-bounce text-white/60 hover:text-white transition"
          aria-label="Scorri verso Come lo faccio"
        >
          <Sailboat size={32} />
        </a>
      </section>

      <section id="how" className="h-[90vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold">Come lo faccio</h2>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
        >
        Mi approccio a ogni sito cercando la strada più semplice ed efficace per raccontare chi sei, lasciandomi guidare dall’intuizione e dalla relazione.
        </motion.p>
        <a
          href="#why"
          className="absolute bottom-10 animate-bounce text-white/60 hover:text-white transition"
          aria-label="Scorri verso Perché lo faccio"
        >
          <Sprout size={32} />
        </a>
      </section>

      <section id="why" className="h-[90vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold">Perché lo faccio</h2>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
        >
        Ogni progetto è per me un atto creativo e artigianale, in cui le possibilità sono infinite ma l’essenziale è chiaro: la persona viene prima di tutto.
        </motion.p>
        <a
          href="#beyond"
          className="absolute bottom-10 animate-bounce text-white/60 hover:text-white transition"
          aria-label="Scorri verso Oltre ciò che faccio"
        >
          <Eye size={32} />
        </a>
      </section>

      <section id="beyond" className="h-[90vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold">Oltre ciò che faccio</h2>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
        >
        Il mio lavoro è arricchito dal cammino spirituale che seguo, radicato nella via rossa dei Lakota e nella scuola di counseling che sto frequentando.
        </motion.p>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
        >
        Questi percorsi mi aiutano a rimanere centrato, autentico e profondamente in ascolto — di me, di chi ho davanti, e del senso di ogni progetto.
        </motion.p>
        <a
          href="#contact"
          className="absolute bottom-10 animate-bounce text-white/60 hover:text-white transition"
          aria-label="Scorri verso Contattami"
        >
          <Bird size={32} />
        </a>
      </section>

      <section id="contact" className="h-[90vh] sm:h-[100vh] flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold">Contattami</h2>
        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
          Se senti che potremmo costruire qualcosa insieme, scrivimi. Sarò felice di ascoltarti.
        </p>
        <a
          href="mailto:kevin.burrafato@gmail.com"
          className="mt-4 inline-block bg-white text-black font-medium px-6 py-3 rounded-full border border-white transition hover:bg-transparent hover:text-white"
        >
          Scrivimi
        </a>
      </section>

      <footer className="py-10 flex justify-center items-center text-sm opacity-50">
        © 2025 KevinBurrafato. Tutti i diritti riservati.
      </footer>
    </div>
  );
}



