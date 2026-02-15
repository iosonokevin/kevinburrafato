'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import ButtonLink from '@/components/PrimaryButton';

export default function ChiSono() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="h-screen">   
      <section
        className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
        style={{ height: '90vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/sfondo_counseling_hero.PNG"
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
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-2 px-6">  
          <h1 className="hero-title text-3xl tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto mb-1">
            Chi sono
          </h1>
          <h2 className="hero-title text-lg italic tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto">
            Come archeologo di Sé, accompagno le persone a esplorare se stesse per ritrovare forza, direzione e autenticità, scoprendo che dentro di loro sanno già tutto
          </h2>
        </div>
        <div className="relative z-20 pb-5 flex items-center"> 
        </div>      
      </section> 
      <section
        className="snap-start h-[50vh] md:h-[80vh] relative flex flex-col items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: '#F5F7F0' }}
      >
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center px-6 md:px-20 w-full">
            <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">             
              <h1 className="text-2xl md:text-1xl tracking-widest mb-3">
                Archeologo di me stesso
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Da bambino volevo fare l&apos;archeologo.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Crescendo sentivo che non era quella la strada, eppure quell’immagine mi ha sempre accompagnato.
                </motion.p>  
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Solo più avanti ho compreso che parlava in modo simbolico: per me l’archeologia è esplorazione interiore.
                </motion.p>              
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>        
        </div>
      </section> 
      <section
        className="snap-start h-[55vh] md:h-[90vh] relative flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#F5F7F0' }}
      >
        <div className="relative z-20 w-full max-w-3xl px-6 flex flex-col items-center justify-center gap-8 pb-15">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-3">
            <Image 
              src="/foto_profilo.jpg"
              alt="Kevin Burrafato"
              fill
              className="object-cover rounded-full shadow-sm"
              priority 
            />
          </div>
          <div className="flex flex-col items-center text-center">   
            <motion.h1
              className="text-lg md:text-lg italic tracking-widest"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Scavare nelle profondità, ritrovare bellezze sepolte e riportarle alla luce.
            </motion.h1>             
          </div>
          <div className="flex flex-col items-center text-center"> 
            <motion.h1
              className="text-lg md:text-lg italic tracking-widest"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              È questo che faccio oggi nel mio lavoro di counselor.
            </motion.h1>             
          </div>
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
                Il problema non si risolve, si dissolve.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Il mio modo di lavorare nasce dall’ascolto. Non dall’idea di aggiustare, ma dalla fiducia che ogni persona porta già dentro di sé ciò di cui ha bisogno.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Accompagno le persone a rallentare, a tornare al corpo, ad ascoltare ciò che sta chiedendo attenzione.
                </motion.p>
              </div>
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
                Il mio approccio.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Creo uno spazio sicuro in cui ciò che è già presente può emergere, prendere forma e trovare voce.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Utilizzo strumenti di ascolto profondo, sequenze di movimento corporeo e il contatto con forze archetipali, come modalità per fare chiarezza e ritrovare direzione.
                </motion.p>               
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Il mio ruolo non è indicare una strada, ma accompagnare affinché ognuno possa riconoscere la propria.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>        
        </div>
      </section>
      <section
        className="snap-start h-[80vh] md:h-screen relative flex flex-col items-center overflow-hidden"
        style={{ backgroundColor: '#E6E2D3' }}
      >
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-6 px-6 text-center">
          <h1 className="text-2xl md:text-1xl tracking-widest">
            Io ci sono, tu ci sei
          </h1>                 
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              La direzione non nasce dal fare, ma dall’ascolto.
            </motion.p>           
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Qui trovi uno spazio dedicato a questo. Se senti che può esserti utile, scrivimi.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ButtonLink text={'Contattami'} href={'/zero'} />
          </motion.div>
        </div>
        <span className="relative z-20 pb-5 text-[10px] sm:text-sm font-bold text-black w-full text-center">
          © 2026 Kevin Burrafato. Tutti i diritti riservati.
        </span>
      </section>
    </main>
  );
}
