"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function IntroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-[#f5f0e8] px-6 py-28 text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mx-auto max-w-2xl"
      >
        <h2 className="font-serif text-4xl font-normal leading-tight sm:text-6xl">
          And so, our
          <br />
          <span className="italic">forever begins.</span>
        </h2>

        <div className="mx-auto my-9 h-px w-16 bg-[#b9a48a]" />

        <p className="mx-auto max-w-md text-sm leading-8 text-[#75685b] sm:text-base">
          A day filled with love, a promise made for a lifetime, and the
          beginning of a beautiful new chapter together.
        </p>

        <p className="mt-10 font-serif text-2xl italic text-[#9a8267]">
          With love, always.
        </p>
      </motion.div>
    </section>
  );
}
