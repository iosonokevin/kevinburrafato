'use client';

import { MoveDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import ButtonLink from '@/components/PrimaryButton';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';

export default function FaccioLoZero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [phase, setPhase] = useState<'hero' | 'loading' | 'experience' | 'final'>('hero');

  const [step, setStep] = useState(0);

  const [text, setText] = useState('');

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [showArrow, setShowArrow] = useState(false);

  const questions = [
    "",
    "Cosa sento nel corpo? Dove lo sento?",
    "",
    "Che forma ha? Che colore ha?",
    "",
    "Se potesse parlare, cosa mi direbbe?",
    ""
  ];

  const reflections = [
    ["Sento il corpo che poggia.", "Sento il mio respiro.", "Sento i rumori esterni.", "Sento i miei pensieri."],
    ["È una sensazione.", "Non è un problema.", "Non è un errore.", "È esperienza."],
    ["Posso restare.", "Posso sentire.", "Posso accogliere.", "Posso respirare."],
    ["Nulla da fare.", "Nulla da risolvere.", "Solo essere.", "Qui."]
  ];

  const isReflectionStep = step % 2 === 0;
  const reflectionIndex = Math.floor(step / 2);

  useEffect(() => {
    if (phase !== 'experience') return;

    setShowArrow(false);

    const reflection = step % 2 === 0;
    const delay = reflection ? 2000 : 400;

    const timer = setTimeout(() => {
      setShowArrow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [step, phase]);

  const handleStart = () => {
    setIsTransitioning(true);

    if (phase === 'hero') {
      setPhase('loading');
      setTimeout(() => {
        setPhase('experience');
        setStep(0);
        setIsTransitioning(false);
      }, 1200);
    } else if (phase === 'experience') {
      if (step < 6) {
        setTimeout(() => {
          setStep(prev => prev + 1);
          setText('');
          setIsTransitioning(false);
        }, 300);
      } else {
        setTimeout(() => {
          setPhase('final');
        }, 300);
      }
    }
  };

  

  return (
    <div className="bg-white text-black h-screen flex items-center justify-center overflow-hidden">

      {/* HERO */}
      {phase === 'hero' && (
        <motion.section
          key="hero"
          className="relative w-full h-full flex flex-col items-center overflow-hidden" // Aggiunto flex-col e overflow-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-30 w-full">
            <Header
              toggleMenu={() => setIsMenuOpen((prev) => !prev)}
              isMenuOpen={isMenuOpen}
              isDark={true}
            />
          </div>
          <SidebarMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />
          <div className="relative z-20 flex flex-col items-center justify-center flex-grow px-8 text-center">
            <h1 className="text-2xl sm:text-3xl mb-10">
              <Typewriter
                options={{ loop: true, delay: 40 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Vivere piuttosto che capire.')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('Osservare piuttosto che giudicare.')
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
          </div>
        </motion.section>
      )}

      {/* LOADING */}
      {phase === 'loading' && (
        <motion.div
          key="loader"
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
          />
        </motion.div>
      )}

      {/* EXPERIENCE */}
      {phase === 'experience' && (
        <motion.section
          key="experience"
          className="w-full h-full flex flex-col px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Titolo */}
          <div className="pt-12 pb-6 text-center">
            <AnimatePresence mode="wait">
              {!isReflectionStep && (
                <motion.h2
                  key={`question-${step}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl font-light tracking-wide text-center"
                >
                  {questions[step]}
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          {/* Contenuto centrale */}
          <div className="flex-grow flex items-center justify-center pb-40">
            <AnimatePresence mode="wait">
              {!isReflectionStep ? (
                <motion.div
                  key={`input-${step}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-2xl h-full"
                >
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Scrivi..."
                    className="w-full h-full p-6 
                               border border-gray-300 rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-black 
                               resize-none"
                  />
                  <p className="text-xs font-bold mt-3 text-center">
                    Ciò che scrivi resta solo qui. Non viene salvato né condiviso.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`reflection-${step}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-6 text-center"
                >
                  {reflections[reflectionIndex].map((sentence, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.4 }}
                      className="text-xl font-light tracking-wide"
                    >
                      {sentence}
                    </motion.p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      )}

      {/* 3. STEP FINALE */}
      <AnimatePresence>
        {phase === 'final' && (
          <motion.section
            key="final"
            className="flex flex-col items-center justify-center text-center px-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-1xl tracking-widest mb-3">
              Questo può restare semplicemente un momento per te.
            </h1>
            <div className="mb-2"> 
              <p className="text-1xl md:text-lg">
                Se invece senti che desideri uno spazio di ascolto più profondo, io ci sono.
              </p> 
            </div>                    
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ButtonLink text={'Scrivimi'} href={'/contattami'} />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isTransitioning &&
          phase !== 'final' &&
          phase !== 'loading' &&
          (
            phase === 'hero' ||
            (
              phase === 'experience' &&
              showArrow &&
              (!isReflectionStep ? text.length > 0 : true)
            )
          )
        && (
          <motion.button
            key={`${phase}-${step}`}
            onClick={handleStart}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center text-black hover:text-black/60 transition-colors duration-300 cursor-pointer pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: 4 }}
            style={{ isolation: 'isolate' }}
          >
            <span className="mb-1 text-sm">
              {phase === 'hero' ? 'Faccio lo zero' : 'Resto'}
            </span>
            <MoveDown size={32} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}