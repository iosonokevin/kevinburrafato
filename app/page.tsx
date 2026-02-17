'use client';

import React, { useState } from 'react';
import ButtonLink from '../components/PrimaryButton';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SidebarMenu from '../components/SidebarMenu';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <main className="h-screen">      
      <section
        className="h-[85vh] md:h-[95vh] snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
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
        <div className="relative z-30 w-full">
          <Header
            toggleMenu={() => setIsMenuOpen((prev) => !prev)}
            isMenuOpen={isMenuOpen}
          />
        </div>
        <SidebarMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-6 px-4">
          <h1 className="hero-title text-2xl md:text-3xl tracking-widest">
            Vivere piuttosto che capire
          </h1>   
          <h2 className="hero-title text-lg italic tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto">
            Scavare nelle profondità, riportare alla luce ciò che chiede spazio.
          </h2>  
          <ButtonLink text={'Scrivimi'} href={'/contattami'} variant="white"/>
        </div>    
      </section>
      <section
        className="snap-start h-[80vh] md:h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: '#F5F7F0' }}
      >
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center px-6 md:px-20 w-full">
            <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">             
              <h1 className="text-2xl md:text-1xl tracking-widest mb-3">
                A volte non serve capire di più.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Serve <strong>fermarsi</strong>.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ascoltare cosa sta chiedendo <strong>spazio</strong> dentro di noi.
                </motion.p>               
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <ButtonLink text={'Prenditi un momento'} href={'/faccio-lo-zero'}/>
              </motion.div>
            </div>
          </div>
          <div className="hidden md:block"></div>        
        </div>
      </section>   
      <section
        className="snap-start h-[80vh] md:h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: '#E6E2D3' }}
      >
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2">
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-center px-6 md:px-20 w-full">
            <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">             
              <h1 className="text-2xl md:text-1xl tracking-widest mb-3 leading-tight">
                Il percorso è un processo, non una risposta.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Accompagno le persone a tornare in <strong>ascolto</strong> di ciò che già esiste dentro di loro.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Il corpo, il sentire, le immagini interiori diventano strumenti di <strong>orientamento</strong>.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <ButtonLink text={'Scopri il percorso'} href={'/percorso'}/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="snap-start h-[80vh] md:h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: '#F5F7F0' }}
      >
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center px-6 md:px-20 w-full">
            <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">             
              <h1 className="text-2xl md:text-1xl tracking-widest mb-3">
                Due parole su di me.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Mi chiamo <strong>Kevin Burrafato</strong>.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Mi occupo di <strong>counseling transpersonale</strong>, un approccio che considera la persona nella sua interezza: corpo, emozioni, psiche e dimensione simbolica.
                </motion.p>               
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Il mio lavoro nasce da una vocazione profonda: usare la mia sensibilità per creare spazi di cura in cui ognuno possa ritrovare la propria direzione.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <ButtonLink text={'Un po’ di me'} href={'/chi-sono'}/>
              </motion.div>
            </div>
          </div>
          <div className="hidden md:block"></div>        
        </div>
      </section>
      <section
        className="snap-start h-[80vh] md:h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: '#E6E2D3' }}
      >
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2">
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-center px-6 md:px-20 w-full">
            <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">             
              <h1 className="text-2xl md:text-1xl tracking-widest mb-3 leading-tight">
                Un ascolto che include tutto
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Il lavoro che propongo nasce da un approccio <strong>transpersonale</strong> e <strong>biotransenergetico</strong>.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Entrare in contatto con ciò che è vivo dentro di noi, anche quando è scomodo, confuso, non chiaro.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Lasciare che il corpo parli prima della mente. Lasciare che l’esperienza apra spazi nuovi, invece di riempirli di spiegazioni.
                </motion.p>                
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <ButtonLink text={'Il mio approccio'} href={'/il-mio-approccio'}/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="snap-start h-[90vh] relative flex flex-col items-center overflow-hidden"
        style={{ backgroundColor: '#E6E2D3' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/sfondo_banner_contatti.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-6 px-6 text-center text-white"> 
          <h1 className="hero-title text-2xl md:text-3xl tracking-widest">
            Io ci sono, tu ci sei
          </h1>                           
          <div className="space-y-4 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="white"
            >
              La direzione non nasce dal fare, ma dall’ascolto.
            </motion.p>           
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="white"
            >
              Qui trovi uno spazio dedicato a questo. Se senti che può esserti utile, scrivimi.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ButtonLink text={'Contattami'} href={'/contattami'} variant="white" />
          </motion.div>
        </div>
        <span className="relative z-20 pb-5 text-[10px] sm:text-sm font-bold text-white/70 w-full text-center">
          © 2026 Kevin Burrafato. Tutti i diritti riservati.
        </span>
      </section>
    </main>
  );
  
}
