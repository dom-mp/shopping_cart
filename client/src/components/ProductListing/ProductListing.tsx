import ProductList from "../ProductList";
import AddProduct from "../AddProduct";
import { useState } from "react";
import type { Product, NewProduct } from "../../types";

interface ProductListingProps {
  products: Product[];
  onCreateProduct: (newProduct: NewProduct) => void;
  onUpdateProduct: (updatedProduct: Product) => void;
  onDeleteProduct: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const ProductListing = ({
  products,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
  onAddToCart,
}: ProductListingProps) => {
  const [toggleAddProduct, setToggleAddProduct] = useState(false);

  const handleToggleAddProduct = () => {
    setToggleAddProduct(!toggleAddProduct);
  };

  const content = toggleAddProduct ? (
    <AddProduct
      onToggleAddProduct={handleToggleAddProduct}
      onCreateProduct={onCreateProduct}
    />
  ) : (
    <p>
      <button
        className="add-product-button"
        onClick={() => setToggleAddProduct(true)}
      >
        Add A Product
      </button>
    </p>
  );

  return (
    <main>
      <ProductList
        products={products}
        onUpdateProduct={onUpdateProduct}
        onDeleteProduct={onDeleteProduct}
        onAddToCart={onAddToCart}
      />
      {content}
    </main>
  );
};

export default ProductListing;
