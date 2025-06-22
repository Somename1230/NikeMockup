import ShoeBlock from "./Cart/ShoeBlock";
import CartPopup from "./Cart/CartPopup";

export default function JordanShoeShowcase() {
  return (
    <main className="w-full relative pb-20 bg-black">
      <ShoeBlock
        image="/pictures/jordan.webp"
        title="Air Jordan 1"
        desc="The AJ1 allows you to enjoy the best of both worlds. Its well-structured self made sure our feet felt not only protected, but also comfortable thanks to all its padding."
        sizes={["06", "08", "10", "12", "07", "09", "11", "13"]}
      />

      <ShoeBlock
        image="/pictures/dunk2.webp"
        title="Dunk Low"
        desc="Engineered for comfort and designed for style. The AJ4 remains a staple for those who want performance"
        sizes={["06", "07", "08", "09", "10", "11", "12", "13"]}
        flip
      />

      <ShoeBlock
        image="/pictures/nikeairmax.webp"
        title="Air Max"
        desc="A timeless design that blends innovation and history. The AJ5 is for those who live for standout performance."
        sizes={["06", "07", "08", "09", "10", "11", "12", "13"]}
      />

      <CartPopup />
    </main>
  );
}
