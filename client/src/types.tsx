import { z } from "zod";

export const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  _v: z.number().optional(),
});

export const newProductSchema = productSchema.omit({
  _id: true,
});

export const cartItemSchema = productSchema.extend({
  productId: z.string(),
});

export const cartItemAndProductSchema = z.object({
  item: cartItemSchema,
  product: productSchema,
});

export type Product = z.infer<typeof productSchema>;
export type NewProduct = z.infer<typeof newProductSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
