import { useCart } from "./CartContext"; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function CartPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems = [] } = useCart() || {};
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 w-80 bg-white text-black shadow-lg rounded-xl p-4 pt-6 space-y-3 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-10" : "translate-x-full"
        }`}
      >
        {/* Toggle button */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-neutral-800 text-white px-2 py-1 rounded-l-xl shadow-lg"
          >
            {isOpen ? ">" : "<"}
          </button>
        </div>

        {/* Header */}
        <div className="text-xl font-semibold flex justify-between items-center">
          <h2>Cart</h2>
          <button
            onClick={() => navigate('/checkout')}
            className="pr-4 text-sm hover:underline"
          >
            Checkout
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <p className="text-sm text-neutral-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-2 max-h-20 overflow-y-auto scroll-smooth">
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
                    <div className="text-xs text-black font-semibold">${item.price.toFixed(2)}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="pt-3 border-t border-gray-200 text-sm font-semibold">
              Total: <span className="text-black">${totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
