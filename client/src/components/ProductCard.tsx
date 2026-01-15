"use client";

import { ProductType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
   return (
      <div className="shadow-lg rounded-lg overflow-hidden">
         {/* IMAGE  */}
         <Link href={`/product/${product.id}`}>
            <div className="relative aspect-2/3">
               <Image
                  src={product.images[product.colors[0]]}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-all duration-300"
               />
            </div>
         </Link>
         {/* PRODUCT DETAIL  */}
         <div className="flex flex-col gap-4 p-4">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.shortDescription}</p>
            {/* PRODUCT TYPES */}
            <div className="flex items-center gap-4 text-xs">
               <div className="flex flex-col gap-1">
                  <span className="text-gray-500">Size</span>
                  <select
                     name="size"
                     id="size"
                     className="ring ring-gray-300 rounded-md px-2 py-2"
                  >
                     {product.sizes.map((size) => (
                        <option key={size} value={size}>
                           {size.toLocaleUpperCase()}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-gray-500">Color</span>
                  <div className="flex items-center gap-2">
                     {product.colors.map((color) => (
                        <div className="" key={color}>
                           <div
                              className="w-14px h-14px rounded-full"
                              style={{ backgroundColor: color }}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            {/* PRICE AND ADD TO CART BUTTON  */}
            <div className="flex items-center justify-between">
               <p className="font-medium"> {product.price.toFixed(2)} </p>
               <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-4 py-2 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
