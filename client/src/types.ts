import { z } from "zod";
export type ProductType = {
   id: string | number;
   name: string;
   shortDescription: string;
   description: string;
   price: number;
   sizes: string[];
   colors: string[];
   images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
   quantity: number;
   selectedSize: string;
   selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
   name: z.string().min(1, "Name is required!"),
   email: z.email().min(1, "Email is required!"),
   phone: z
      .string()
      .regex(
         /^(?:0|\+94|94)7\d{8}$/,
         "Phone number must be a valid Sri Lankan phone number",
      ),
   address: z.string().min(1, "Address is required"),
   city: z.string().min(1, "City is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
   cardHolder: z.string().min(1, "Card holder is required!"),
   cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
   expirationDate: z
      .string()
      .regex(
         /^(0[1-9]|1[0-2])\/\d{2}$/,
         "Expiration date must be in MM/YY format",
      ),
   cvv: z.string().regex(/^\d{3}$/, "CVV must be 3 digits"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
