'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'anchoring' | 'q1' | 'pause1' | 'q2' | 'pause2' | 'q3' | 'finale';

const anchoringPhrases = [
  "Osservo il mio respiro.",
  "Sento i rumori fuori.",
  "Osservo i miei pensieri.",
  "Sento cosa pesa nel mio corpo.",
];

const phraseDurations = [3000, 3000, 3500, 3500, 3500, 3500];
const PAUSE_DURATION = 3000;
const EXIT_MS = 500; // durata exit animation, usata per sincronizzare i timeout
const CIRCLE_CIRCUMFERENCE = 282.7;

function CircleLoader({ durationMs, loaderKey }: { durationMs: number; loaderKey: string | number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <circle
        key={loaderKey}
        cx="50" cy="50" r="45"
        fill="none"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={CIRCLE_CIRCUMFERENCE}
        strokeDashoffset={CIRCLE_CIRCUMFERENCE}
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          animation: `drawCircle ${durationMs}ms linear forwards`,
        }}
      />
    </svg>
  );
}

export default function ZeroExperience() {
  const [phase, setPhase] = useState<Phase>('anchoring');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });

  // Anchoring sequence
  useEffect(() => {
    if (phase !== 'anchoring') return;

    let current = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const advance = () => {
      if (current < anchoringPhrases.length - 1) {
        current++;
        setPhraseIndex(current);
        const isLast = current === anchoringPhrases.length - 1;
        // +EXIT_MS perché il nuovo elemento monta solo dopo la exit dell'elemento precedente
        const t = setTimeout(isLast ? () => setPhase('q1') : advance, phraseDurations[current] + EXIT_MS);
        timeouts.push(t);
      }
    };

    // Prima frase: nessuna exit precedente, parte subito
    const t = setTimeout(advance, phraseDurations[0]);
    timeouts.push(t);

    return () => timeouts.forEach(clearTimeout);
  }, [phase]);

  // Pause handling: +EXIT_MS perché la question esce prima che la pausa monti
  useEffect(() => {
    if (phase !== 'pause1' && phase !== 'pause2') return;
    const t = setTimeout(() => {
      setPhase(phase === 'pause1' ? 'q2' : 'q3');
    }, PAUSE_DURATION + EXIT_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const handleNext = (from: 'q1' | 'q2' | 'q3') => {
    if (from === 'q1') setPhase('pause1');
    else if (from === 'q2') setPhase('pause2');
    else setPhase('finale');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-8">
      <AnimatePresence mode="wait">

        {phase === 'anchoring' && (
          <motion.div
            key={`anchor-${phraseIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_MS / 1000 }}
            className="flex flex-col items-center gap-8"
          >
            <p className="white text-lg md:text-xl tracking-widest">
              {anchoringPhrases[phraseIndex]}
            </p>
            <CircleLoader durationMs={phraseDurations[phraseIndex]} loaderKey={phraseIndex} />
          </motion.div>
        )}

        {(phase === 'q1' || phase === 'q2' || phase === 'q3') && (
          <QuestionPhase
            key={phase}
            question={
              phase === 'q1' ? 'Cosa sento nel corpo? Dove lo sento?'
              : phase === 'q2' ? 'Che forma ha? Che colore ha?'
              : 'Se potesse parlare, cosa mi direbbe?'
            }
            value={answers[phase]}
            onChange={(v) => setAnswers((a) => ({ ...a, [phase]: v }))}
            onNext={() => handleNext(phase)}
          />
        )}

        {(phase === 'pause1' || phase === 'pause2') && (
          <motion.div
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_MS / 1000 }}
            className="flex flex-col items-center gap-8"
          >
            <p className="white text-lg md:text-xl tracking-widest">Resto in contatto.</p>
            <CircleLoader durationMs={PAUSE_DURATION} loaderKey={phase} />
          </motion.div>
        )}

        {phase === 'finale' && (
          <motion.div
            key="finale"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8 max-w-sm"
          >
            <p className="white text-base md:text-lg leading-relaxed">
              Se qualcosa si è mosso, e senti che vorresti parlarne, anche solo per fare due chiacchiere — scrivimi. Io ci sono.
            </p>
            <a
              href="https://ig.me/m/kevinburrafato"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Scrivimi
            </a>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

function QuestionPhase({
  question, value, onChange, onNext,
}: {
  question: string;
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: EXIT_MS / 1000 }}
      className="flex flex-col items-center gap-3 w-full max-w-sm"
    >
      <p className="white text-base md:text-lg">{question}</p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Scrivi qui..."
        className="w-full bg-transparent border border-white/40 text-white placeholder-white/70 rounded p-3 resize-none focus:outline-none focus:border-white/70 transition-colors font-[inherit] text-base leading-relaxed"
      />
      <p style={{ fontSize: '0.9rem', letterSpacing: '0.05em', marginTop: '0.75rem' }} className="white">
        Ciò che scrivo resta solo qui. Non viene salvato né condiviso.
      </p>
      <div className="h-10 flex items-center justify-center">
        <AnimatePresence>
          {value.trim().length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onNext}
              className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Resto
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
