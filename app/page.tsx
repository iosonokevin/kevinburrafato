'use client';

import { MoveDown } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import ButtonLink from '../components/PrimaryButton';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappMessage = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || ""
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


const sentencesZeroSection = [
  "Respiro.",
  "Sento il corpo che poggia.",
  "Lascio andare il voler capire.",
  "Resto."
];

const sentencesPauseSection = [
  "Respiro.",
  "All'andare via resto.",
  "Resto in contatto.",
];

const sentencesContactSection = [
  "Ora ho una consapevolezza in più.",
  "Ho superato una soglia.",
  "Posso tornare qui tutte le volte che voglio.",
  "E se voglio"
];

export default function Home() {
  const [hasTextFirstQuestion, setHasTextFirstQuestion] = useState(false);
  const [hasTextSecondQuestion, setHasTextSecondQuestion] = useState(false);
  const [hasTextThirdQuestion, setHasTextThirdQuestion] = useState(false);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keysToBlock = [
        'ArrowUp',
        'ArrowDown',
        'PageUp',
        'PageDown',
        'Home',
        'End',
        ' ',
      ];
      if (keysToBlock.includes(e.key)) {
        const active = document.activeElement;
      const isTyping =
        active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');

        if (e.key === ' ' && isTyping) {
          return;
        }

        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try {
        history.replaceState(null, '', `#${id}`);
      } catch {
        
      }
    }
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="bg-white text-black font-[family-name:var(--font-geist-sans)] h-screen overflow-hidden snap-y snap-mandatory scroll-smooth"
    >
      {/* Hero */}
      <section
        id="hero"
        className="h-[100dvh] snap-start flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
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
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('Ho paura, eppure, ho fiducia.')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('Intento piuttosto che obiettivo.')
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h1>
        <motion.a
          href="#imakezero"
          onClick={(e) => handleAnchorClick(e, 'imakezero')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
          aria-label="Vai a Faccio lo zero"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="mb-1 text-sm whitespace-nowrap">Faccio lo zero</span>
          <MoveDown size={32} />
        </motion.a>
      </section>

      {/* Make Zero */}
      <section
        id="imakezero"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative"
      >
        <div className="flex flex-col items-center justify-center h-full pb-32 space-y-10">
          {sentencesZeroSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: index * 1 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <motion.a
          href="#ifeel"
          onClick={(e) => handleAnchorClick(e, 'ifeel')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
          aria-label="Vai a Io sento"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: sentencesZeroSection.length * 1 }}
        >
          <span className="mb-1 mr-2 text-sm whitespace-nowrap">Io sento</span>
          <MoveDown size={32} />
        </motion.a>
      </section>

      {/* First Question */}
      <section
        id="ifeel"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center"
      >
        <div className="pt-8 pb-8">
          <h2 className="text-2xl font-light">
            Cosa sento? Dove lo sento?
          </h2>
        </div>
        <div className="flex-grow flex items-center justify-center pb-8">
          <textarea
            placeholder="Sento tensione alle spalle..."
            className="w-full h-full max-w-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none overflow-y-auto text-sm sm:text-base"
            onChange={(e) =>
              setHasTextFirstQuestion(e.target.value.trim().length > 0)
            }
          />
        </div>
        <div className="pb-12 flex justify-center min-h-[60px]">
          <motion.a
            href="#istay"
            onClick={(e) => handleAnchorClick(e, 'istay')}
            className="flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
            aria-label="Vai a Io resto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              hasTextFirstQuestion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
          >
            <span className="mb-1 mr-1 text-sm whitespace-nowrap">Io resto</span>
            <MoveDown size={32} />
          </motion.a>
        </div>
      </section>

      {/* First Pause */}
      <section
        id="istay"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative"
      >
        <div className="flex flex-col items-center justify-center h-full pb-32 space-y-10">
          {sentencesPauseSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: index * 1 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <motion.a
          href="#iexpand"
          onClick={(e) => handleAnchorClick(e, 'iexpand')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
          aria-label="Vai a Io espando"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: sentencesPauseSection.length * 1 }}
        >
          <span className="mb-1 mr-1 text-sm whitespace-nowrap">Io espando</span>
          <MoveDown size={32} />
        </motion.a>
      </section>

      {/* Second Question */}
      <section
        id="iexpand"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center"
      >
        <div className="pt-8 pb-8">
          <h2 className="text-2xl font-light">
            Che forma ha? Che colore ha?
          </h2>
        </div>
        <div className="flex-grow flex items-center justify-center pb-8">
          <textarea
            placeholder="Ha la forma di una sfera bianca..."
            className="w-full h-full max-w-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none overflow-y-auto text-sm sm:text-base"
            onChange={(e) =>
              setHasTextSecondQuestion(e.target.value.trim().length > 0)
            }
          />
        </div>
        <div className="pb-12 flex justify-center min-h-[60px]">
          <motion.a
            href="#ibreathe"
            onClick={(e) => handleAnchorClick(e, 'ibreathe')}
            className="flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
            aria-label="Vai a Io respiro"
            initial={{ opacity: 0, y: 20 }}
            animate={
              hasTextSecondQuestion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
          >
            <span className="mb-1 mr-1 text-sm whitespace-nowrap">Io respiro</span>
            <MoveDown size={32} />
          </motion.a>
        </div>
      </section>

      {/* Second Pause */}
      <section
        id="ibreathe"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative"
      >
        <div className="flex flex-col items-center justify-center h-full pb-32 space-y-10">
          {sentencesZeroSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: index * 1 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <motion.a
          href="#isee"
          onClick={(e) => handleAnchorClick(e, 'isee')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
          aria-label="Vai a Io see"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: sentencesZeroSection.length * 1 }}
        >
          <span className="mb-1 mr-1 text-sm whitespace-nowrap">Io vedo</span>
          <MoveDown size={32} />
        </motion.a>
      </section>

      {/* Third Question */}
      <section
        id="isee"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center"
      >
        <div className="pt-8 pb-8">
          <h2 className="text-2xl font-light">
            Se potesse parlare, cosa mi direbbe?
          </h2>
        </div>
        <div className="flex-grow flex items-center justify-center pb-8">
          <textarea
            placeholder="Io ti vedo..."
            className="w-full h-full max-w-2xl p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none overflow-y-auto text-sm sm:text-base"
            onChange={(e) =>
              setHasTextThirdQuestion(e.target.value.trim().length > 0)
            }
          />
        </div>
        <div className="pb-12 flex justify-center min-h-[60px]">
          <motion.a
            href="#iobservemyself"
            onClick={(e) => handleAnchorClick(e, 'iobservemyself')}
            className="flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
            aria-label="Vai a Io mi osservo"
            initial={{ opacity: 0, y: 20 }}
            animate={
              hasTextThirdQuestion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
          >
            <span className="mb-1 mr-1 text-sm whitespace-nowrap">Io mi osservo</span>
            <MoveDown size={32} />
          </motion.a>
        </div>
      </section>

      {/* Make Contact */}
      <section
        id="iobservemyself"
        className="h-[100dvh] snap-start flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">

          {/* Frasi */}
          {sentencesContactSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: index * 1 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Pulsante come “ultima frase” */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.8,
              delay: sentencesZeroSection.length * 1,
            }}
          >
            <ButtonLink
              text="Parlo con Kevin"
              href={whatsappLink}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
