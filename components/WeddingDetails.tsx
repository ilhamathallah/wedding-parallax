
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WeddingDetails() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#e8ded1] px-6 py-28 text-center sm:py-36">
     
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <h2 className="font-serif text-4xl sm:text-6xl">
          The wedding <span className="italic">day.</span>
        </h2>

        <p className="mt-5 font-serif text-xl italic text-[#806d5b] sm:text-2xl">
          Saturday, 20 June 2027
        </p>

        <div className="mx-auto my-10 h-px w-16 bg-[#b9a48a]" />

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[.3em] text-[#8c7963]">
              Ceremony
            </p>
            <h3 className="font-serif text-2xl">Four o'clock</h3>
            <p className="mt-3 text-sm leading-7 text-[#75685b]">
              The Garden Pavilion
              <br />
              Bali, Indonesia
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[.3em] text-[#8c7963]">
              Celebration
            </p>
            <h3 className="font-serif text-2xl">Six o'clock</h3>
            <p className="mt-3 text-sm leading-7 text-[#75685b]">
              The Sunset Terrace
              <br />
              Bali, Indonesia
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs leading-6 text-[#8c7963]">
          We look forward to celebrating this special day
          <br className="hidden sm:block" />
          surrounded by the people we love.
        </p>
      </motion.div>
    </section>
  );
}
