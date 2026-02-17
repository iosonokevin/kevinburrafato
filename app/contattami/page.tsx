'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import ButtonLink from '@/components/PrimaryButton';

export default function Contattami() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const placeholders = {   
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    send: 'Invia messaggio'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await res.json();

      if (res.ok) {
        setResponseMessage('Messaggio inviato!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Errore nell\'invio.');
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
      setResponseMessage('Errore interno.');
    } finally {
      setIsSending(false);
    }
  };

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
            Io ci sono
          </h1>
          <h2 className="hero-title text-lg italic tracking-widest max-w-[85%] md:max-w-2xl text-center mx-auto">
            Puoi contattarmi per fare domande, capire se è il momento giusto di iniziare un percorso assieme, o semplicemente per parlare
          </h2>
        </div>     
      </section>   
      <section
        className="snap-start h-[90vh] md:h-screen relative flex flex-col items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: '#F5F7F0' }}
      >
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center gap-12 md:gap-0 md:grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center px-6 md:px-20 w-full">
            <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">             
              <h1 className="text-2xl md:text-1xl tracking-widest mb-3">
                Non c’è fretta, non ci sono obblighi.
              </h1>
              <div className="space-y-4 mb-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Rispondo con cura e ascolto ogni messaggio.
                </motion.p>                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Lo spazio è aperto per te, in totale libertà.
                </motion.p>             
              </div>
            </div>
          </div>      
          <div className="flex items-center justify-center px-6">
            <form className="text-black w-full max-w-md space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={placeholders.name}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
              <input
                type="email"
                name="email"
                placeholder={placeholders.email}
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
              <textarea
                name="message"
                placeholder={placeholders.message}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 resize-none"
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-block px-6 py-2 border rounded-full transition-all duration-300 border-[#1A1A1A] text-[#1A1A1A] bg-transparent hover:bg-[#536942] hover:border-[#536942] hover:text-white cursor-pointer"
              >
                {isSending
                  ? 'Invio in corso...'
                  : placeholders.send}
              </button>
              {responseMessage && (
                <p className="text-sm mt-2 text-center text-green-600">{responseMessage}</p>
              )}
            </form>
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
            La direzione nasce dall’ascolto
          </h1>                           
          <div className="space-y-4 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="white"
            >
              Ogni percorso inizia da un primo gesto.
            </motion.p>           
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="white"
            >
              Anche un piccolo passo è già un gesto di esplorazione.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ButtonLink text={'Faccio lo zero'} href={'/faccio-lo-zero'} variant="white" />
          </motion.div>
        </div>
        <span className="relative z-20 pb-5 text-[10px] sm:text-sm font-bold text-white/70 w-full text-center">
          © 2026 Kevin Burrafato. Tutti i diritti riservati.
        </span>
      </section>
    </main>
  );
}
