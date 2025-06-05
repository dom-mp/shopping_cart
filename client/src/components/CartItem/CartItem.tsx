import type { CartItem as CartItemType } from "../../types";

interface CartItemProps extends CartItemType {}

const CartItem = ({ title, quantity, price }: CartItemProps) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
};

export default CartItem;
