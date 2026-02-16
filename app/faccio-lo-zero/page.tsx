'use client';

import { MoveDown } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [phase, setPhase] = useState<'hero' | 'loading' | 'experience'>('hero');
  const [step, setStep] = useState(0);
  const [text, setText] = useState('');

  const questions = [
    "Cosa sento? Dove lo sento?",
    "Osserva senza cambiare nulla.",
    "Quanto è intenso?",
    "Lascia che sia.",
    "Ha una forma?",
    "Non giudicare.",
    "Cambia se lo osservo?",
    "Rimani con ciò che c’è."
  ];

  const reflections = [
    [
      "Non devo capire.",
      "Non devo sistemare.",
      "Non devo cambiare.",
      "Posso solo osservare."
    ],
    [
      "È solo una sensazione.",
      "Non è un problema.",
      "Non è un errore.",
      "È esperienza."
    ],
    [
      "Posso restare.",
      "Posso sentire.",
      "Posso accogliere.",
      "Posso respirare."
    ],
    [
      "Nulla da fare.",
      "Nulla da risolvere.",
      "Solo essere.",
      "Qui."
    ]
  ];

  const isReflectionStep = step % 2 === 1;
  const reflectionIndex = Math.floor(step / 2);

  const handleStart = () => {
    if (phase === 'hero') {
      setPhase('loading');

      setTimeout(() => {
        setPhase('experience');
        setStep(0);
      }, 1200);
    } else if (phase === 'experience') {
      if (step < 7) {
        setStep(prev => prev + 1);
        setText('');
      } else {
        console.log("Esperienza terminata");
      }
    }
  };

  return (
    <div className="bg-white text-black h-screen flex items-center justify-center overflow-hidden">

      {/* HERO */}
      {phase === 'hero' && (
        <motion.section
          key="hero"
          className="relative w-full h-full flex flex-col items-center justify-center text-center px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
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
          <div className="flex-grow flex items-center justify-center pb-32">
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

      {/* BOTTONE */}
      <AnimatePresence>
        {((phase === 'hero') ||
          (phase === 'experience' && (!isReflectionStep ? text.length > 0 : true))) && (
          <motion.button
            onClick={handleStart}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 
                       flex flex-col items-center 
                       text-black hover:text-black/60 
                       transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: 4 }}
          >
            <span className="mb-1 text-sm">
              {phase === 'hero'
                ? 'Faccio lo zero'
                : step < 7
                  ? 'Resto'
                  : 'Termino'}
            </span>
            <MoveDown size={32} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}