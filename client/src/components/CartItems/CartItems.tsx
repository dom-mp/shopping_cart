import CartItem from "../CartItem";
import type { CartItem as CartItemType } from "../../types";

interface CartItemProps {
  cartItems: CartItemType[];
  onCheckOut: () => void;
}

const CartItems = ({ cartItems, onCheckOut }: CartItemProps) => {
  const total: number = cartItems.reduce((sum, cartItem) => {
    return (sum += cartItem.price * cartItem.quantity);
  }, 0);

  const handleCheckOut = () => {
    onCheckOut();
  };

  return (
    <>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} {...cartItem} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">
              Total: {total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="checkout" onClick={handleCheckOut}>
        Checkout
      </button>
    </>
  );
};

export default CartItems;
