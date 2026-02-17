'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import ButtonLink from '@/components/PrimaryButton';

export default function IlMioApproccio() {
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
            Il mio approccio
          </h1>
          <h2 className="hero-title text-lg italic tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto">
            Da dove nasce il mio modo di accompagnare.
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
                Un modo ulteriore di guardare ciò che viviamo.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  La Biotransenergetica è un approccio che unisce psicologia, lavoro sul corpo e consapevolezza.
                </motion.p>  
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  È nata dall’incontro tra la ricerca occidentale e pratiche più antiche legate all’esperienza diretta, ed è stata sviluppata da Pier Luigi Lattuada.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ma al di là delle definizioni, la cosa importante è questa: la vita è movimento, e <strong>quando qualcosa dentro di noi si blocca, iniziamo a soffrire</strong>.
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
                Il flusso e il blocco
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Pensa a quando trattieni un’emozione. Quando eviti un confronto. Quando rimani sempre nello stesso schema.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <strong>È come se l’energia si fermasse</strong>.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  La Biotransenergetica parte da qui: non dal “problema” da risolvere, ma dal punto in cui il flusso si è interrotto.
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
                Cerchio e Quadrato
              </h1>
              <div className="space-y-4 mb-4">               
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ogni momento della nostra vita può essere visto come un equilibrio tra:
                  <br /><br />
                  • <strong>una forma</strong> (la situazione concreta, il corpo, le circostanze)
                  <br />
                  • <strong>un movimento</strong> (le emozioni, l’energia, la coscienza che si espande)
                  <br /><br />
                  Quando questo equilibrio si irrigidisce, nasce la sofferenza.
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
                Non solo capire, ma fare esperienza
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Il punto non è cambiare la situazione esterna a tutti i costi. È entrare nel punto di rigidità e permettere che qualcosa si muova di nuovo.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Quando il movimento riprende, cambia lo stato di consapevolezza. E spesso <strong>ciò che sembrava un problema perde forza</strong>.
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
                Oltre la parole
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  In questo approccio non ci si limita a parlare.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Si lavora attraverso respiro, consapevolezza, corpo, immaginazione guidata, esperienza diretta.
                </motion.p>   
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non per “forzare” un cambiamento, ma per <strong>creare le condizioni in cui il cambiamento può avvenire</strong>.
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
                Per chi è adatto
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  La Biotransenergetica può esserti utile se ti senti bloccato in uno schema che si ripete, vivi un momento di crisi o passaggio, senti che parlare non è sufficiente, vuoi un percorso che coinvolga anche il corpo, non solo la mente.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Non è necessario avere conoscenze spirituali o esperienze particolari. <strong>È un percorso di consapevolezza, radicato nella vita concreta</strong>.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ButtonLink text={'Di più sul percorso'} href={'/percorso'} />
                </motion.div>
              </div>
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
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center flex-grow gap-6 px-6 text-center text-white"> 
          <h1 className="hero-title text-2xl md:text-3xl tracking-widest">
            Non si tratta di analizzare il passato.
          </h1>                           
          <div className="space-y-4 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="white"
            >
              Si tratta di vivere ciò che è presente, fino in fondo.
            </motion.p>           
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="white"
            >
              La trasformazione avviene attraverso l’esperienza consapevole.
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
