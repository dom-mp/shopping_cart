import Product from "../Product";
import type { Product as ProductType } from "../../types";
// import { useState, useEffect } from "react";
// import { mockProducts } from "../../mockData/data";

interface ProductProps {
  products: ProductType[];
  onUpdateProduct: (updatedProduct: ProductType) => void;
  onDeleteProduct: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const ProductList = ({
  products,
  onUpdateProduct,
  onDeleteProduct,
  onAddToCart,
}: ProductProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              _id={product._id}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              onUpdateProduct={onUpdateProduct}
              onDeleteProduct={onDeleteProduct}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
