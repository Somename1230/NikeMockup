import ShoeBlock from "./Cart/ShoeBlock";
import shoe1 from "../Assets/pictures/jordan.webp";
import shoe2 from "../Assets/pictures/dunk2.webp";
import shoe3 from "../Assets/pictures/nikeairmax.webp";
import CartPopup from "./Cart/CartPopup";
import { CartProvider } from "./Cart/CartContext";

export default function JordanShoeShowcase() {
  return (
    <CartProvider>
      <main className="w-full relative">
        <ShoeBlock
          image={shoe1}
          title="Air Jordan 1"
          desc="The AJ1 allows you to enjoy the best of both worlds. Its well-structured self made sure our feet felt not only protected, but also comfortable thanks to all its padding."
          sizes={["06", "08", "10", "12", "07", "09", "11", "13"]}
        />

        <ShoeBlock
          image={shoe2}
          title="Dunk Low"
          desc="Engineered for comfort and designed for style. The AJ4 remains a staple for those who want performance"
          sizes={["06", "07", "08", "09", "10", "11", "12", "13"]}
          flip
        />

        <ShoeBlock
          image={shoe3}
          title="Air Max"
          desc="A timeless design that blends innovation and history. The AJ5 is for those who live for standout performance."
          sizes={["06", "07", "08", "09", "10", "11", "12", "13"]}
        />

        <CartPopup />
      </main>
    </CartProvider>
  );
}
