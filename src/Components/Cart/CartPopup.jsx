import { useCart } from "./CartContext";

export default function CartPopup() {
  const { cartItems } = useCart();

  return (
    <div className="fixed bottom-4 right-4 bg-white text-black rounded-xl p-4 shadow-lg w-64 z-50">
      <h3 className="font-bold text-lg mb-2">Your Cart</h3>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Cart is empty</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              {/* Render the image if it exists */}
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
  );
}
