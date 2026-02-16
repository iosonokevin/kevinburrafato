'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import SidebarMenu from '@/components/SidebarMenu';
import Image from 'next/image';

export default function PrivacyPolicy() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">
      <section
              className="snap-start h-screen relative flex flex-col items-center overflow-hidden bg-transparent"
              style={{ height: '90vh' }}
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
                            Privacy Policy
                          </h1>   
                        </div>
            </section>
      <section className="bg-white text-black w-full py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Informativa sulla Privacy</h2>
            <p className="mb-4">
            Il sito web KevinBurrafato è di proprietà di KevinBurrafato, che è titolare del trattamento dei tuoi dati personali.
            </p>
            <p className="mb-4">
            Abbiamo adottato questa Privacy Policy, che determina come trattiamo le informazioni raccolte dal sito KevinBurrafato, e spiega perché dobbiamo raccogliere alcuni dati personali. Pertanto, è importante che tu legga attentamente questa informativa prima di utilizzare il sito.
            </p>
            <p className="mb-4">
            Ci prendiamo cura dei tuoi dati personali e ci impegniamo a garantirne la riservatezza e la sicurezza.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Informazioni personali raccolte</h3>
            <p className="mb-4">
            Quando visiti KevinBurrafato, raccogliamo automaticamente informazioni sul tuo dispositivo, come browser, indirizzo IP, fuso orario e cookie installati. Inoltre, raccogliamo informazioni sulle pagine visitate, termini di ricerca e interazioni con il sito. Queste vengono chiamate `Informazioni sul dispositivo`. Possiamo anche raccogliere dati personali forniti da te (nome, indirizzo, info di pagamento) al momento della registrazione.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Perché trattiamo i tuoi dati?</h3>
            <p className="mb-4">
            Il nostro obiettivo principale è la sicurezza dei dati degli utenti. Raccogliamo solo le informazioni strettamente necessarie per il funzionamento del sito. Le informazioni raccolte servono esclusivamente per individuare possibili abusi o per fini statistici.
            </p>
            <p className="mb-4">
            Puoi navigare nel sito senza rivelare la tua identità. Tuttavia, per usare alcune funzionalità (newsletter, form di contatto) potresti dover fornire dati personali. Se non lo fai, potresti non accedere ad alcune funzionalità.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">I tuoi diritti</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Diritto all’informazione</li>
            <li>Diritto di accesso</li>
            <li>Diritto di rettifica</li>
            <li>Diritto alla cancellazione</li>
            <li>Diritto alla limitazione del trattamento</li>
            <li>Diritto alla portabilità dei dati</li>
            <li>Diritto di opposizione</li>
            <li>Diritti riguardanti decisioni automatizzate e profilazione</li>
            </ul>
            <p className="mb-4">
            Per esercitare uno di questi diritti, contattaci via email: <a href="mailto:KevinBurrafato@gmail.com" className="underline">KevinBurrafato@gmail.com</a>.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Trasferimenti internazionali</h3>
            <p className="mb-4">
            I tuoi dati possono essere trasferiti fuori dall`Europa, inclusi Stati Uniti e Canada, per motivi legati all’adempimento contrattuale o agli interessi legittimi sopra elencati.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Sicurezza</h3>
            <p className="mb-4">
            Proteggiamo le informazioni fornite su server sicuri, con misure tecniche e organizzative adeguate. Tuttavia, nessuna trasmissione dati via internet è completamente sicura.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Link esterni</h3>
            <p className="mb-4">
            Il nostro sito può contenere link a siti esterni non gestiti da noi. Non siamo responsabili delle loro pratiche sulla privacy.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Contatti</h3>
            <p className="mb-4">
            Per qualsiasi informazione riguardante questa informativa o i tuoi diritti, scrivici a <a href="mailto:KevinBurrafato@gmail.com" className="underline">KevinBurrafato@gmail.com</a>.
            </p>
        </div>
      </section>
    </div>
  );
}
