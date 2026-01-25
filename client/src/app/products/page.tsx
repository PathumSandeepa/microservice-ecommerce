import ProductList from "@/components/ProductList";

const ProductsPage = async ({
   searchParams,
}: {
   searchParams: Promise<{ category: string }>;
}) => {
   const category = (await searchParams).category;
   return (
      <div className="">
         <ProductList category={category} params="productPage" />
      </div>
   );
};

export default ProductsPage;
