'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ZeroExperience from '../components/ZeroExperience';

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="relative h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sfondo_counseling_hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="home"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex items-center justify-center h-full px-14 py-8 md:px-6 md:py-12"
          >
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-[185px] md:w-[320px] flex-shrink-0 aspect-[3/4] relative"
              >
                <Image
                  src="/foto_profilo_2.jpg"
                  alt="Kevin Burrafato"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="flex flex-col items-center gap-8 w-full md:w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-5 w-full md:max-w-xs text-justify text-[0.88rem] md:text-[1.05rem]"
                >
                  <p className="white">
                    Una volta qualcuno mi raccontò di quando andò dai nativi americani per la sua prima cerimonia.
                  </p>
                  <p className="white">
                    Prima che iniziasse, prese il taccuino e cominciò a prendere appunti. I nativi risero, e gli dissero: &quot;Prima prova. Poi senti. E poi, forse, ci capisci qualcosa.&quot;
                  </p>
                  <p className="white">
                    Ti invito a fare lo stesso &mdash; con una variazione sola: prova, senti, e lascia andare il voler capire.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <button
                    onClick={() => setStarted(true)}
                    className="inline-block px-6 py-2 border rounded-full transition-all duration-300 cursor-pointer text-white border-white bg-transparent hover:text-black hover:bg-white"
                  >
                    Entra
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <ZeroExperience />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
