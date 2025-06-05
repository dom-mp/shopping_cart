import { useState } from "react";
import EditProduct from "../EditProduct";
import type { Product as ProductType } from "../../types";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

interface ProductProps extends ProductType {
  onUpdateProduct: (updatedProduct: ProductType) => void;
  onDeleteProduct: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const Product = ({
  _id,
  title,
  price,
  quantity,
  onUpdateProduct,
  onDeleteProduct,
  onAddToCart,
}: ProductProps) => {
  const [editToggle, setEditToggle] = useState(false);

  const handleEditToggle = () => {
    setEditToggle(!editToggle);
  };

  const handleDeleteProduct = () => {
    onDeleteProduct(_id);
  };

  const handleAddToCart = () => {
    onAddToCart(_id);
  };

  const content = editToggle ? (
    <EditProduct
      onEditToggle={handleEditToggle}
      onUpdateProduct={onUpdateProduct}
      _id={_id}
      title={title}
      price={price}
      quantity={quantity}
    />
  ) : (
    <>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className="edit" onClick={() => setEditToggle(!editToggle)}>
        Edit
      </button>
    </>
  );

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">{content}</div>
        <button className="delete-button" onClick={handleDeleteProduct}>
          <span>X</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
