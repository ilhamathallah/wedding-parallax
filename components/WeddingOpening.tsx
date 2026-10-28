"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function WeddingOpening() {
  const [opening, setOpening] = useState(false);
  const [finished, setFinished] = useState(false);
  const reducedMotion = useReducedMotion();

  // FIX: Function must be declared inside the component,
  // outside useEffect, so the button can access it.
  const startOpening = () => {
    if (opening) return;
    setOpening(true);
  };

  // Start the exit animation and notify the auto-scroll component.

  useEffect(() => {
    if (!opening) return;

    let scrollTimer: number | undefined;

    const timer = window.setTimeout(
      () => {
        setFinished(true);

        scrollTimer = window.setTimeout(() => {
          console.log("EVENT WEDDING OPENED TERKIRIM");
          window.dispatchEvent(new Event("wedding:opened"));
        }, 400);
      },
      reducedMotion ? 100 : 2600,
    );

    return () => {
      window.clearTimeout(timer);

      if (scrollTimer !== undefined) {
        window.clearTimeout(scrollTimer);
      }
    };
  }, [opening, reducedMotion]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.section
          key="wedding-opening"
          className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f2ece2] px-5 py-10 text-[#514637]"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            opening
              ? { opacity: 0, scale: reducedMotion ? 1 : 1.045 }
              : { opacity: 1, scale: 1 }
          }
          transition={{
            opacity: {
              duration: reducedMotion ? 0.15 : 0.8,
              delay: opening && !reducedMotion ? 1.25 : 0,
              ease: "easeInOut",
            },
            scale: {
              duration: reducedMotion ? 0.15 : 1.5,
              delay: opening && !reducedMotion ? 0.6 : 0,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          {/* Background */}
          <div className="pointer-events-none absolute inset-4 border border-[#c8b99f]/60 sm:inset-8" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(75vw,580px)] w-[min(75vw,580px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8b99f]/25" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(62vw,460px)] w-[min(62vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8b99f]/20" />

          <motion.div
            className="relative z-10 flex w-full max-w-md flex-col items-center text-center"
            animate={opening ? { y: reducedMotion ? 0 : -8 } : { y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Envelope scene */}
            <div
              className="relative mb-9 w-full max-w-[330px]"
              style={{ perspective: "1200px" }}
            >
              <div className="relative aspect-[1.38/1] w-full">
                {/* Envelope back */}
                <div className="absolute inset-0 rounded-[3px] border border-[#c8b79b] bg-[#e7dac6] shadow-[0_24px_55px_rgba(79,61,39,0.16)]" />

                {/* Letter card */}
                <motion.div
                  className="absolute left-[8%] right-[8%] top-[5%] z-10 flex h-[90%] flex-col items-center justify-start border border-[#d8c9b1] bg-[#fbf8f1] pt-6 shadow-sm sm:pt-7"
                  initial={{ y: 0 }}
                  animate={{ y: opening ? -155 : 0 }}
                  transition={{
                    duration: reducedMotion ? 0.15 : 1.05,
                    delay: opening && !reducedMotion ? 0.25 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="font-serif text-[27px] italic leading-tight text-[#514637] sm:text-3xl">
                    Alexandra
                  </span>

                  <span className="my-1 font-serif text-base text-[#a78e69]">
                    &
                  </span>

                  <span className="font-serif text-[27px] italic leading-tight text-[#514637] sm:text-3xl">
                    Nathaniel
                  </span>

                  <span className="mt-4 text-[8px] uppercase tracking-[0.25em] text-[#8b795e]">
                    Bali · 20 June 2027
                  </span>
                </motion.div>

                {/* Front pocket */}
                <svg
                  className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                  viewBox="0 0 330 240"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="envelopeLeft"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f1e7d7" />
                      <stop offset="100%" stopColor="#e6d8c3" />
                    </linearGradient>

                    <linearGradient
                      id="envelopeRight"
                      x1="1"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f4eadb" />
                      <stop offset="100%" stopColor="#e1d1ba" />
                    </linearGradient>

                    <linearGradient
                      id="envelopeBottom"
                      x1="0"
                      y1="0"
                      x2="0.8"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#eee2cf" />
                      <stop offset="100%" stopColor="#dfcfb7" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 0 L165 119 L0 240 Z"
                    fill="url(#envelopeLeft)"
                    stroke="#cdbb9f"
                    strokeWidth="0.8"
                  />

                  <path
                    d="M330 0 L165 119 L330 240 Z"
                    fill="url(#envelopeRight)"
                    stroke="#cdbb9f"
                    strokeWidth="0.8"
                  />

                  <path
                    d="M0 240 L165 105 L330 240 Z"
                    fill="url(#envelopeBottom)"
                    stroke="#cdbb9f"
                    strokeWidth="0.8"
                  />
                </svg>

                {/* Top flap */}
                <motion.div
                  className="absolute inset-x-0 top-0 z-30 h-[54%]"
                  style={{
                    transformOrigin: "50% 0%",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: opening ? -180 : 0 }}
                  transition={{
                    duration: reducedMotion ? 0.15 : 0.85,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                >
                  <svg
                    className="h-full w-full overflow-visible"
                    viewBox="0 0 330 130"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="envelopeFlap"
                        x1="0"
                        y1="0"
                        x2="0.8"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#f7efe2" />
                        <stop offset="100%" stopColor="#e8dbc7" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 0 H330 L165 128 Z"
                      fill="url(#envelopeFlap)"
                      stroke="#cdbb9f"
                      strokeWidth="1"
                    />
                  </svg>
                </motion.div>

                {/* Wax seal */}
                <motion.button
                  type="button"
                  aria-label="Open invitation"
                  onClick={startOpening}
                  disabled={opening}
                  className="absolute left-[43%] top-[42%] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#9b805b] bg-[#ad9068] text-[#fff8ed] shadow-[0_2px_5px_rgba(68,48,27,0.18)] outline-none focus-visible:ring-2 focus-visible:ring-[#8e7654] focus-visible:ring-offset-4 sm:left-[43%] sm:top-[42%] sm:h-10 sm:w-10 md:left-[43%] md:top-[42%] md:h-11 md:w-11 lg:left-[43%] lg:top-[42%] lg:h-12 lg:w-12"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={
                    opening
                      ? { opacity: 0, scale: 0.75 }
                      : { opacity: 1, scale: 1 }
                  }
                  whileHover={reducedMotion || opening ? {} : { scale: 1.06 }}
                  whileTap={reducedMotion || opening ? {} : { scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="font-serif text-sm italic tracking-tight">
                    A<span className="mx-0.5 text-[9px]">&</span>N
                  </span>
                </motion.button>
              </div>
            </div>

            {/* <motion.p
              className="mb-3 text-[9px] uppercase tracking-[0.3em] text-[#85745b]"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              20 June 2027 · Bali, Indonesia
            </motion.p> */}

            <motion.h1
              className="mb-7 font-serif text-3xl font-light italic sm:text-4xl"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9 }}
            >
              A day to remember
            </motion.h1>

            {/* <p className="text-[8px] uppercase tracking-[0.24em] text-[#a09480]">
              With love, Alexandra & Nathaniel
            </p> */}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
