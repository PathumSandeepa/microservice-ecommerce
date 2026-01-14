import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
   return (
      <div className="">
         <div className="relative aspect-3/1 mb-12">
            <Image src="/featured.png" alt="Featured Product" fill />
         </div>
         <ProductList />
      </div>
   );
};

export default Homepage;
