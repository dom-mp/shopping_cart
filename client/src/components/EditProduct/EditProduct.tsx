import { useState } from "react";
import type { Product as ProductType } from "../../types";

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

interface EditProductProps extends Product {
  onEditToggle: () => void;
  onUpdateProduct: (updatedProduct: ProductType) => void;
}

const EditProduct = ({
  onEditToggle,
  onUpdateProduct,
  _id,
  title,
  price,
  quantity,
}: EditProductProps) => {
  const [formTitle, setFormTitle] = useState(title);
  const [formPrice, setFormPrice] = useState(price);
  const [formQuantity, setFormQuantity] = useState(quantity);

  const handleUpdateProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onEditToggle();
    onUpdateProduct({
      _id: _id,
      title: formTitle,
      price: formPrice,
      quantity: formQuantity,
    });
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleUpdateProduct}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={formTitle}
            aria-label="Product Name"
            onChange={(e) => setFormTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={formPrice}
            aria-label="Product Price"
            onChange={(e) => setFormPrice(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={formQuantity}
            aria-label="Product Quantity"
            onChange={(e) => setFormQuantity(+e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onEditToggle}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
