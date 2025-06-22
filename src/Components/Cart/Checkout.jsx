import { useCart } from "./CartContext";
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 pt-30 relative">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {totalItems === 0 ? (
        <p className="text-neutral-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-neutral-800 p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain bg-white rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-sm text-neutral-400">Size: {item.size}</p>
                    <p className="text-sm text-neutral-200 font-semibold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-sm border border-red-500 text-red-500 px-3 py-1 hover:bg-red-500 hover:text-white transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Summary & Actions */}
          <div className="mt-10 border-t border-neutral-700 pt-6">
            <p className="text-lg font-medium mb-2">Total Items: {totalItems}</p>
            <p className="text-xl font-bold mb-4">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <div className="flex gap-4">
              <button 
               onClick={() => alert('This is a mock payment action, your website will be able to process payments in the future')}
                className="bg-white text-black px-4 py-2 hover:bg-neutral-200 transition">
                Pay Now
              </button>
              <button 
                onClick={handleReturn}
                className="bg-transparent border border-white px-4 py-2 hover:bg-white hover:text-black transition">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
