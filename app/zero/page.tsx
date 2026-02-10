'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { CircleArrowDown } from 'lucide-react';

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
  "Osservo il mio corpo."
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
    <main ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
      
      <section
        id="hero"
        className="h-[100dvh] snap-start flex flex-col items-center justify-center px-8 sm:px-20 text-center space-y-6 relative"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_zero_neutro.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.nav
          className="text-sm absolute top-0 z-20 pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <ul className="flex gap-8 font-bold tracking-widest text-black">
            <li><Link href="/" className="hover:opacity-50 transition-opacity">Home</Link></li>
            <li><Link href="/counseling" className="hover:opacity-50 transition-opacity">Counseling</Link></li>
            <li><Link href="/bio" className="hover:opacity-50 transition-opacity">Kevin</Link></li>
          </ul>
        </motion.nav>
        <h1 className="font-biro tracking-widest font-bold relative z-10 text-2xl sm:text-2xl text-black">
          <span className="inline-flex items-center space-x-2">
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
          </span>
        </h1>
        <motion.a
          href="#ascolto"
          onClick={(e) => handleAnchorClick(e, 'ascolto')}
          className="font-biro absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
          aria-label="Vai a Faccio lo zero"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <CircleArrowDown className="transition-opacity hover:opacity-50 cursor-pointer h-8 w-8 text-black" />
        </motion.a>
      </section>

      <section
        id="ascolto"
        className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_zero_neutro.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-32 pb-32 space-y-10">
          {sentencesZeroSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light text-black"
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
          href="#sento"
          onClick={(e) => handleAnchorClick(e, 'sento')}
          className="relative z-10 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:text-black/60 transition cursor-pointer"
          aria-label="Vai a Io sento"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: sentencesZeroSection.length * 1 }}
        >
          <nav className="relative z-20 pt-10">
            <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
              <li className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                <span className="relative top-[1px]">☾</span>                
                <span>Io sento</span>                
                <span className="relative top-[2px]">☽</span>
              </li>
            </ul>
          </nav>
        </motion.a>
      </section>

      {/* --- PRIMA DOMANDA: SENTO --- */}
      <section id="sento" className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/sfondo_zero_neutro.PNG" alt="Background" fill className="object-cover" priority />
        </div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="pt-12 pb-8">
            <h2 className="font-biro text-2xl sm:text-2xl font-bold text-black tracking-widest">Cosa sento? Dove lo sento?</h2>
          </div>
          <div className="flex-grow flex items-center justify-center pb-8">
            <textarea
              placeholder="Sento tensione alle spalle..."
              className="w-full h-full max-w-2xl p-6 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-black resize-none bg-white/40 backdrop-blur-md text-black shadow-sm"
              onChange={(e) => setHasTextFirstQuestion(e.target.value.trim().length > 0)}
            />
          </div>
          <div className="pb-12 flex justify-center min-h-[80px]">
            <motion.a
              href="#resto"
              onClick={(e) => handleAnchorClick(e, 'resto')}
              className="flex flex-col items-center text-black hover:opacity-60 transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={hasTextFirstQuestion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              <nav className="relative z-20 pt-10">
                <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
                  <li className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                    <span className="relative top-[1px]">☾</span>                
                    <span>Io resto</span>                
                    <span className="relative top-[2px]">☽</span>
                  </li>
                </ul>
              </nav>
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- PRIMA PAUSA: RESTO --- */}
      <section id="resto" className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/sfondo_zero_neutro.PNG" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-32 pb-32 space-y-12">
          {sentencesPauseSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light text-black max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: index * 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.a
          href="#espando"
          onClick={(e) => handleAnchorClick(e, 'espando')}
          className="relative z-10 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:opacity-60 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <nav className="relative z-20 pt-10">
            <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
              <li className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                <span className="relative top-[1px]">☾</span>                
                <span>Io espando</span>                
                <span className="relative top-[2px]">☽</span>
              </li>
            </ul>
          </nav>
        </motion.a>
      </section>

      {/* --- SECONDA DOMANDA: ESPANDO --- */}
      <section id="espando" className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/sfondo_zero_neutro.PNG" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="pt-12 pb-8">
            <h2 className="font-biro text-2xl sm:text-2xl font-bold text-black tracking-widest">Che forma ha? Che colore ha?</h2>
          </div>
          <div className="flex-grow flex items-center justify-center pb-8">
            <textarea
              placeholder="Ha la forma di una sfera bianca..."
              className="w-full h-full max-w-2xl p-6 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-black resize-none bg-white/40 backdrop-blur-md text-black shadow-sm"
              onChange={(e) => setHasTextSecondQuestion(e.target.value.trim().length > 0)}
            />
          </div>
          <div className="pb-12 flex justify-center min-h-[80px]">
            <motion.a
              href="#respiro"
              onClick={(e) => handleAnchorClick(e, 'respiro')}
              className="flex flex-col items-center text-black hover:opacity-60 transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={hasTextSecondQuestion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              <nav className="relative z-20 pt-10">
                <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
                  <li className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                    <span className="relative top-[1px]">☾</span>                
                    <span>Io respiro</span>                
                    <span className="relative top-[2px]">☽</span>
                  </li>
                </ul>
              </nav>
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- SECONDA PAUSA: RESPIRO --- */}
      <section id="respiro" className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/sfondo_zero_neutro.PNG" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-32 pb-32 space-y-12">
          {sentencesZeroSection.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl font-light text-black max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: index * 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.a
          href="#vedo"
          onClick={(e) => handleAnchorClick(e, 'vedo')}
          className="relative z-10 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-black hover:opacity-60 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <nav className="relative z-20 pt-10">
            <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
              <li className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                <span className="relative top-[1px]">☾</span>                
                <span>Io vedo</span>                
                <span className="relative top-[2px]">☽</span>
              </li>
            </ul>
          </nav>
        </motion.a>
      </section>

      {/* --- TERZA DOMANDA: VEDO --- */}
      <section id="vedo" className="h-[100dvh] snap-start flex flex-col px-8 sm:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/sfondo_zero_neutro.PNG" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="pt-12 pb-8">
            <h2 className="font-biro text-2xl sm:text-2xl font-bold text-black tracking-widest">Se potesse parlare, cosa mi direbbe?</h2>
          </div>
          <div className="flex-grow flex items-center justify-center pb-8">
            <textarea
              placeholder="Io ti vedo..."
              className="w-full h-full max-w-2xl p-6 border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-black resize-none bg-white/40 backdrop-blur-md text-black shadow-sm"
              onChange={(e) => setHasTextThirdQuestion(e.target.value.trim().length > 0)}
            />
          </div>
          <div className="pb-12 flex justify-center min-h-[80px]">
            <motion.a
              href="#osservo"
              onClick={(e) => handleAnchorClick(e, 'osservo')}
              className="flex flex-col items-center text-black hover:opacity-60 transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={hasTextThirdQuestion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            >
              <nav className="relative z-20 pt-10">
                <ul className="flex gap-8 font-bold font-biro tracking-widest text-black">
                  <li className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                    <span className="relative top-[1px]">☾</span>                
                    <span>Io osservo</span>                
                    <span className="relative top-[2px]">☽</span>
                  </li>
                </ul>
              </nav>
            </motion.a>
          </div>
        </div>
      </section>      

      <section
        id="osservo"
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '100vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
          <Image
            src="/sfondo_zero_scrivimi.PNG"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <nav 
          className="relative z-20 pt-10"
        >
          <ul className="flex gap-8 text-sm font-bold tracking-widest text-black">
            <li><Link href="/" className="hover:opacity-50 transition-opacity">Home</Link></li>
            <li><Link href="/counseling" className="hover:opacity-50 transition-opacity">Counseling</Link></li>
            <li><Link href="/bio" className="hover:opacity-50 transition-opacity">Kevin</Link></li>
          </ul>
        </nav>
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-4">
          <motion.p 
            className="font-biro font-bold text-1xl text-black tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Vivere piuttosto che capire
          </motion.p>          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link 
              href="/zero" 
              className="px-6 py-2 text-sm font-bold border border-black text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
            >
              Scrivimi
            </Link>
          </motion.div>
        </div>
        <span 
          className="relative z-20 pb-5 text-sm font-bold text-black"
        >
          © 2026 Kevin Burrafato. Tutti i diritti riservati.
        </span>
      </section>

    </main>
  );
}
