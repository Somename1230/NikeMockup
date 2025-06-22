import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useCart } from "./CartContext"; 

export default function ShoeBlock({ image, title, desc, sizes, flip = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <section ref={ref} className="h-140 bg-black relative overflow-hidden">
      <section className="flex items-center justify-center relative bg-neutral-900 h-140 w-[80vw] mx-auto">
        <motion.div
          style={{ scale }}
          className={`relative flex flex-col lg:flex-row items-center justify-center gap-2 ${flip ? "lg:flex-row-reverse" : ""}`}
        >
          <img
            src={image}
            alt={title}
            className="w-[320px] lg:w-[500px] object-contain z-10"
          />

          <div className="bg-zinc-800 p-6 sm:p-10 max-w-[400px] text-white relative z-20">
            <p className="text-xs font-semibold mb-1">#1 BEST SELLER</p>
            <p className="text-sm leading-relaxed mb-4">{desc}</p>

        <div className="grid grid-cols-4 gap-2 mb-4">
        {sizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
            <button
                key={size}
                className={`border py-1 px-2 text-sm transition
                ${isSelected ? "bg-white text-black border-white" : "text-white border-white"}
                hover:bg-white hover:text-black
                `}
                onClick={() => setSelectedSize(size)}
            >
                {size}
            </button>
            );
        })}
        </div>

            <button
              className="border border-white px-4 py-1 text-sm hover:bg-white hover:text-black transition"
              onClick={() => selectedSize && addToCart({ title, size: selectedSize, image })}
            >
              ADD TO CART
            </button>
          </div>
        </motion.div>
      </section>
    </section>
  );
}