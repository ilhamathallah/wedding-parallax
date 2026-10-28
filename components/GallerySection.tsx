
"use client";

import { motion, useReducedMotion } from "framer-motion";

const photos = [
  {
    src: "/images/gallery.jpg",
    alt: "A quiet moment together",
    caption: "The little things",
    className: "md:mt-16",
  },
  {
    src: "/images/intro.jpg",
    alt: "A portrait of the couple",
    caption: "Just us",
    className: "",
  },
  {
    src: "/images/story.jpg",
    alt: "A memory from the journey",
    caption: "Our favorite memories",
    className: "md:mt-10",
  },
];

export default function GallerySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f5f0e8] px-5 py-24 sm:px-12 sm:py-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
      >
        <h2 className="font-serif text-4xl sm:text-6xl">
          A story in <span className="italic">photographs.</span>
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 35, scale: 0.98 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: index * 0.15 }}
            className={photo.className}
          >
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#e8ded1]">
              <div
                role="img"
                aria-label={photo.alt}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${photo.src}')` }}
              />

              <div className="pointer-events-none absolute inset-3 border border-white/50" />
            </div>

            <figcaption className="mt-4 text-center font-serif text-lg italic text-[#806d5b]">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
