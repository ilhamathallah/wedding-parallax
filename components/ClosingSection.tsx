"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ClosingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-[#352d26] px-6 py-24 text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/closing.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#251c16]/55" />
      <div className="absolute inset-4 border border-white/40 sm:inset-8" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-2xl"
      >
        <h2 className="font-serif text-5xl leading-tight sm:text-7xl">
          To love,
          <br />
          <span className="italic">and to be loved.</span>
        </h2>

        <p className="font-serif text-2xl italic sm:text-3xl">
          Alexandra & Nathaniel
        </p>

        <p className="mt-6 text-[10px] uppercase tracking-[.35em] text-white/75">
          Forever starts here · 2027
        </p>
      </motion.div>
    </section>
  );
}
