import { useCart } from "./CartContext"; 
import { useState } from "react";

export default function CartPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems = [] } = useCart() || {};

  return (
    <>

<div
  className={`fixed bottom-4 right-4 w-80 bg-white text-black shadow-lg rounded-xl p-4 pt-6 space-y-3 transition-transform duration-300 z-40 ${
    isOpen ? "translate-x-10" : "translate-x-full"
  }`}
>

  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-neutral-800 text-white px-2 py-1 rounded-l-xl shadow-lg"
    >
      {isOpen ? ">" : "<"}
    </button>
  </div>


  <h2 className="text-xl font-semibold">Cart</h2>
  {cartItems.length === 0 ? (
    <p className="text-sm text-neutral-600">Your cart is empty.</p>
  ) : (
<ul className="space-y-2 max-h-30 overflow-y-auto scroll-smooth">
  {cartItems.map((item, index) => (
    <li key={index} className="flex items-center space-x-2 text-sm">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-10 h-10 object-cover rounded"
        />
      )}
      <div>
        <div>{item.title}</div>
        <div className="text-xs text-gray-600">Size {item.size}</div>
      </div>
    </li>
  ))}
</ul>
  )}
</div>
    </>
  );
}
