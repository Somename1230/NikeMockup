export default function JordanShoeShowcase() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!item.size) return;
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };
}