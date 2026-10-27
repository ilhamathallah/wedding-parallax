"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function WeddingHero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.6, 0]);

  return (
    <section ref={ref} className="relative h-[150svh] bg-[#f5f0e8]">
      <div className="sticky top-0 h-[100svh] min-h-[600px] overflow-hidden">
        <motion.div
          className="absolute -inset-[8%]"
          style={reduceMotion ? {} : { y: imageY, scale: imageScale }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45" />
        <div className="pointer-events-none absolute inset-4 border border-white/50 sm:inset-8" />

        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-x-5 top-6 z-20 flex items-center justify-between text-[8px] font-light uppercase tracking-[0.2em] text-white sm:inset-x-8 sm:top-8 sm:text-[10px] sm:tracking-[0.25em] md:inset-x-10 md:top-10 md:text-[11px] lg:inset-x-12 lg:top-12 lg:text-xs lg:tracking-[0.3em]"
        >
          <span>Our Wedding</span>
          <span>Est. 2027</span>
        </motion.header>

        <motion.div
          className="absolute -left-12 top-[12%] z-10 w-36 text-[#f5e8d1]/80 sm:left-4 sm:w-48 md:left-[8%]"
          animate={reduceMotion ? {} : { rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute -right-12 bottom-[12%] z-10 w-36 rotate-180 text-[#f5e8d1]/80 sm:right-4 sm:w-48 md:right-[8%]"
          animate={reduceMotion ? {} : { rotate: [180, 177, 180] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          style={reduceMotion ? {} : { y: titleY, opacity: titleOpacity }}
          className="absolute inset-x-4 top-1/2 z-10 -translate-y-1/2 text-center text-white"
        >
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.3 }}
            className="font-serif text-[clamp(3.5rem,11vw,9rem)] font-normal leading-[.88] tracking-[-.065em] drop-shadow-lg"
          >
            <span className="block italic">Alexandra</span>
            <span className="my-5 block text-3xl tracking-normal sm:my-7 sm:text-5xl">
              &
            </span>
            <span className="block italic">Nathaniel</span>
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-9 space-y-2 text-[9px] uppercase tracking-[.28em] sm:mt-12 sm:text-xs"
          >
            <p>Saturday, 20 June 2027</p>
            <p className="normal-case tracking-[.2em]">Bali, Indonesia</p>
          </motion.div>
        </motion.div>

        {/* <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white">
          <span className="whitespace-nowrap text-[9px] uppercase tracking-[.35em]">
            Scroll to discover
          </span>
          <motion.div
            className="h-10 w-px bg-white/70"
            animate={reduceMotion ? {} : { scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div> */}
      </div>
    </section>
  );
}
