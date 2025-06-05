import { useState } from "react";
import type { NewProduct } from "../../types";

interface AddProductProps {
  onToggleAddProduct: () => void;
  onCreateProduct: (newProduct: NewProduct) => void;
}

const AddProduct = ({
  onToggleAddProduct,
  onCreateProduct,
}: AddProductProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleCreateProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let response = onCreateProduct({ title: name, price, quantity });
    console.log(response);
  };

  return (
    <div className="add-form">
      <form onSubmit={handleCreateProduct}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            onChange={(e) => setPrice(+e.target.value)}
            value={price}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onToggleAddProduct}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
