import type { CartItem } from "../../types";
import CartItems from "../CartItems";

interface ShoppingCartProps {
  cartItems: CartItem[];
  onCheckOut: () => void;
}

const ShoppingCart = ({ cartItems, onCheckOut }: ShoppingCartProps) => {
  const content =
    cartItems.length === 0 ? (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>
          Checkout
        </button>
      </div>
    ) : (
      <CartItems cartItems={cartItems} onCheckOut={onCheckOut} />
    );

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">{content}</div>
    </header>
  );
};

export default ShoppingCart;
