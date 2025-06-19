import shoe1 from '../Assets/pictures/jordan.webp';
import shoe2 from '../Assets/pictures/dunk.webp';
import shoe3 from '../Assets/pictures/nikeairmax.webp';



import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ShoeBlock({ image, title, desc, sizes, flip = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <>
    <section
      ref={ref}
      className="h-140 bg-black overflow-hidden"
    >
        <section className="flex items-center justify-center relative bg-neutral-900 h-140 w-[80vw] mx-auto">
      <motion.div
        style={{ scale }}
        className={`relative flex flex-col sm:flex-row items-center justify-center gap-8 ${flip ? 'sm:flex-row-reverse' : ''}`}
      >
        <img
          src={image}
          alt={title}
          className="w-[320px] sm:w-[500px] object-contain z-10 scale-x-[-1]"
        />

        <div className="bg-zinc-800 p-6 sm:p-10 max-w-[400px] text-white relative z-20">
          <p className="text-xs font-semibold mb-1">#1 BEST SELLER</p>

          <motion.h2
            style={{ opacity, y }}
            className="text-6xl font-bold text-red-600 absolute left-1/2 -translate-x-1/2 rotate-12 -top-16 sm:-top-10"
          >
            {title}
          </motion.h2>

          <p className="text-sm leading-relaxed mb-4">
            {desc}
          </p>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {sizes.map((size) => (
              <button
                key={size}
                className="border border-white text-white py-1 px-2 text-sm hover:bg-white hover:text-black transition"
              >
                {size}
              </button>
            ))}
          </div>

          <button className="border border-white px-4 py-1 text-sm hover:bg-white hover:text-black transition">
            ADD TO CART
          </button>
        </div>
      </motion.div>
      </section>
    </section>


    </>
  );
}

export default function JordanShoeShowcase() {
  return (
    <main className="w-full">
      <ShoeBlock
        image={shoe1}
        title="JORDAN 7"
        desc="The AJ1 allows you to enjoy the best of both worlds. Its well-structured self made sure our feet felt not only protected, but also comfortable thanks to all its padding."
        sizes={["06", "08", "10", "12", "07", "09", "11", "13"]}
      />

      <ShoeBlock
        image={shoe2}
        title="JORDAN 4"
        desc="Engineered for comfort and designed for style. The AJ4 remains a staple for those who want performance"
        sizes={["06", "07", "08", "09", "10", "11", "12", "13"]}
        flip
      />

      <ShoeBlock
        image={shoe3}
        title="JORDAN 5"
        desc="A timeless design that blends innovation and history. The AJ5 is for those who live for standout performance."
        sizes={["06", "07", "08", "09", "10", "11", "12", "13"]}
      />
    </main>
  );
}
