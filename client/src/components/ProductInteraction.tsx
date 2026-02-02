"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
   product,
   selectedSize,
   selectedColor,
}: {
   product: ProductType;
   selectedSize: string;
   selectedColor: string;
}) => {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const [quantity, setQuantity] = useState(1);

   const { addToCart } = useCartStore();

   const handleTypeChange = (type: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(type, value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
   };

   const handleQuantityChange = (type: "increment" | "decrement") => {
      if (type === "decrement" && quantity <= 1) return;
      setQuantity((prev) => (type === "increment" ? prev + 1 : prev - 1));
   };

   const handleAddToCart = () => {
      addToCart({
         ...product,
         quantity,
         selectedColor,
         selectedSize,
      });
      toast.success("Product added to cart");
   };
   return (
      <div className="flex flex-col gap-4 mt-4">
         {/* SIZE */}
         <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Size</span>
            <div className="flex items-center gap-3">
               {product.sizes.map((size) => (
                  <div
                     className={`cursor-pointer border-2 ${
                        selectedSize === size
                           ? "border-black"
                           : "border-gray-300"
                     }`}
                     key={size}
                     onClick={() => handleTypeChange("size", size)}
                  >
                     <div
                        className={`w-12 h-12 flex items-center justify-center font-medium text-sm ${
                           selectedSize === size
                              ? "bg-black text-white"
                              : "bg-white text-black"
                        }`}
                     >
                        {size.toUpperCase()}
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {/* COLOR */}
         <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Color</span>
            <div className="flex items-center gap-3">
               {product.colors.map((color) => (
                  <div
                     className={`cursor-pointer border-2 p-1 ${
                        selectedColor === color
                           ? "border-black"
                           : "border-gray-300"
                     }`}
                     key={color}
                     onClick={() => handleTypeChange("color", color)}
                  >
                     <div
                        className={`w-10 h-10`}
                        style={{ backgroundColor: color }}
                     />
                  </div>
               ))}
            </div>
         </div>
         {/* QUANTITY */}
         <div className="flex flex-col gap-2 text-sm">
            <span className="text-gray-500">Quantity</span>
            <div className="flex items-center gap-2">
               <button
                  className="cursor-pointer border border-gray-300 p-1"
                  onClick={() => handleQuantityChange("decrement")}
               >
                  <Minus className="w-4 h-4" />
               </button>
               <span>{quantity}</span>
               <button
                  className="cursor-pointer border border-gray-300 p-1"
                  onClick={() => handleQuantityChange("increment")}
               >
                  <Plus className="w-4 h-4" />
               </button>
            </div>
         </div>
         {/* BUTTONS */}
         <button
            onClick={handleAddToCart}
            className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
         >
            <Plus className="w-4 h-4" />
            Add to Cart
         </button>
         <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium">
            <ShoppingCart className="w-4 h-4" />
            Buy this Item
         </button>
      </div>
   );
};

export default ProductInteraction;
