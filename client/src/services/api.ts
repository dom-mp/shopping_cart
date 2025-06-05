import axios from "axios";
import {
  productSchema,
  cartItemSchema,
  cartItemAndProductSchema,
  type NewProduct,
  type Product,
} from "./../types";
import { z } from "zod";

const PORT = "5001";

const API = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const getProducts = async () => {
  const request = await API.get("api/products");
  return z.array(productSchema).parse(request.data);
};

export const createProduct = async (product: NewProduct) => {
  const request = await API.post(`api/products`, product);
  return productSchema.parse(request.data);
};

export const updateProduct = async (product: Product) => {
  const request = await API.put(`api/products/${product._id}`, product);
  return productSchema.parse(request.data);
};

export const deleteProduct = async (id: string) => {
  await API.delete(`api/products/${id}`);
  return "Item Deleted";
};

export const getCart = async () => {
  const request = await API.get("/api/cart");
  return z.array(cartItemSchema).parse(request.data);
};

export const addToCart = async (id: string) => {
  const request = await API.post("/api/add-to-cart", { productId: id });
  return cartItemAndProductSchema.parse(request.data);
};

export const checkOut = async () => {
  await API.post("/api/checkout");
  return "Successfully checked out";
};
