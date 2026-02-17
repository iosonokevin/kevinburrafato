'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import ButtonLink from '@/components/PrimaryButton';

export default function Percorso() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="h-screen">     
      <section
        className="h-[85vh] md:h-[95vh] snap-start relative flex flex-col items-center overflow-hidden bg-transparent"
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
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-2 px-6">  
          <h1 className="hero-title text-3xl tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto mb-1">
            Il percorso di counseling
          </h1>
          <h2 className="hero-title text-lg italic tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto">
            Un viaggio guidato per esplorare se stessi, ritrovare forza, direzione e autenticità
          </h2>
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
                Un percorso di esplorazione interiore
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Questo percorso è uno spazio di ascolto e presenza, dedicato a chi sente il bisogno di fare chiarezza, ritrovare direzione, riconnettersi a parti profonde di sé.
                </motion.p>                 
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non si tratta di risolvere qualcosa, ma di <strong>esplorare ciò che è già presente</strong>.
                </motion.p>              
              </div>
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
                Rivolto a chi sente una chiamata
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  A chi attraversa momenti di confusione, di passaggio o di cambiamento.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  A chi sente che qualcosa dentro chiede attenzione, anche senza sapere ancora cosa.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non è necessario avere un problema preciso, <strong>basta il desiderio di ascoltarsi</strong>.
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
                Cosa questo percorso non è
              </h1>
              <div className="space-y-4 mb-4">               
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non è un percorso standardizzato di terapia.
                </motion.p>  
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non sostituisce percorsi medici o psicoterapeutici, ma può affiancarsi come <strong>spazio di consapevolezza e crescita personale</strong>.
                </motion.p>              
              </div>
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
                Cosa può accadere
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Durante il percorso possono emergere emozioni, immagini, intuizioni o movimenti interiori.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Spesso <strong>si apre uno spazio di maggiore chiarezza</strong>, di contatto con le proprie risorse e di riconnessione con ciò che è autentico.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non c’è un risultato da raggiungere, ma un processo da attraversare.
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
                Non risolvere, ma attraversare
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Nelle sedute non andiamo a cercare una soluzione al problema, ma ci entriamo con presenza.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non combattiamo il blocco. Lo ascoltiamo. Lo attraversiamo. Con il corpo. Con l’esperienza diretta.
                </motion.p>    
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Quando il blocco si scioglie, non è solo il problema a cambiare. <strong>Si entra in un nuovo stato di consapevolezza</strong>. E spesso, in quello spazio più ampio, ciò che prima sembrava un problema perde consistenza. Si dissolve.
                </motion.p>          
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>        
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
            Se senti che può esserti utile
          </h1>                           
          <div className="space-y-4 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="white"
            >
              Possiamo incontrarci per un primo colloquio conoscitivo.
            </motion.p>           
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ButtonLink text={'Scrivimi'} href={'/contattami'} variant="white"/>
          </motion.div>
        </div>
        <span className="relative z-20 pb-5 text-[10px] sm:text-sm font-bold text-white/70 w-full text-center">
          © 2026 Kevin Burrafato. Tutti i diritti riservati.
        </span>
      </section>
    </main>
  );
}
