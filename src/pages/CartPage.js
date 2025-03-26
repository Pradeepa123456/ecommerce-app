import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/_cart.scss";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty.</p> : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${cart.reduce((total, p) => total + p.price, 0)}</h3>
          <Link to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
