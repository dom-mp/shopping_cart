import { useState, useEffect } from "react";
import {
  getProducts,
  getCart,
  createProduct,
  updateProduct,
  deleteProduct,
  addToCart,
  checkOut,
} from "./services/api";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCart";
import type { Product, CartItem, NewProduct } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCart();
      setCartItems(data);
    };
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    try {
      fetchCart();
      fetchProducts();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleCreateProduct = async (newProduct: NewProduct) => {
    try {
      const data = await createProduct(newProduct);
      setProducts((prev) => prev.concat(data));
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      const data = await updateProduct(updatedProduct);
      const newProducts = products.map((product) => {
        if (updatedProduct._id === product._id) {
          return data;
        } else {
          return product;
        }
      });
      setProducts(newProducts);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      const filteredProducts = products.filter((product) => {
        if (product._id !== id) return product;
      });
      setProducts(filteredProducts);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddToCart = async (id: string) => {
    try {
      const data = await addToCart(id);
      const productItem = data.product;
      const cartItem = data.item;
      const newProducts = products.map((product) => {
        if (product._id === productItem._id) {
          return productItem;
        } else {
          return product;
        }
      });

      const cartItemExist = cartItems.some(
        (cartObj) => cartObj._id === cartItem._id
      );

      if (!cartItemExist) {
        setCartItems((prev) => prev.concat(cartItem));
      } else {
        const newCartItems = cartItems.map((cartObj) => {
          if (cartObj._id === cartItem._id) {
            return cartItem;
          } else {
            return cartObj;
          }
        });
        setCartItems(newCartItems);
      }
      setProducts(newProducts);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCheckOut = async () => {
    try {
      checkOut();
      setCartItems([]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div id="app">
        <ShoppingCart cartItems={cartItems} onCheckOut={handleCheckOut} />
        <main>
          <ProductListing
            products={products}
            onCreateProduct={handleCreateProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onAddToCart={handleAddToCart}
          />
        </main>
      </div>
    </>
  );
}

export default App;
