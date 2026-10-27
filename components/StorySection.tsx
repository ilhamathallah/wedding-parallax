"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#e8ded1] px-5 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.div
              style={reduceMotion ? {} : { y: imageY }}
              className="absolute -inset-y-[10%] inset-x-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/story.jpg')",
                }}
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-3 border border-white/60 sm:inset-5" />
          </div>

          <p className="mt-4 text-right font-serif text-sm italic text-[#806d5b]">
            A moment to remember
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="py-4 md:py-12"
        >
          <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
            A thousand little moments,
            <span className="mt-2 block italic">one great love.</span>
          </h2>

          <div className="my-8 h-px w-14 bg-[#b9a48a]" />

          <p className="max-w-lg text-sm leading-8 text-[#75685b] sm:text-base">
            Somewhere between unexpected conversations and familiar smiles, we
            found something extraordinary. What began as a simple meeting slowly
            became a story we wanted to keep writing, together.
          </p>

          <p className="mt-6 max-w-lg text-sm leading-8 text-[#75685b] sm:text-base">
            Today, we celebrate the love that brought us here and the beautiful
            journey waiting ahead.
          </p>

          <p className="mt-8 font-serif text-2xl italic text-[#9a8267]">
            Always and forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
